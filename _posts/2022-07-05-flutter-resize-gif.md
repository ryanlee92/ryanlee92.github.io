---
layout: post
title:  "Flutter: Resize GIF"
author: ryan
categories: [ flutter, development ]
description: "Flutter 에서 GIF를 리사이즈 하는 법에 대한 포스트"
featured: false
hidden: false
--- 

현재 재직중인 회사에서는 프론트엔드 프레임워크로 Flutter를 사용하고 있다.
그런데 오늘 업무를 하다 GIF를 리사이징해야 하는 상황이 있었는데, `flutter resize gif` 등의 키워드로 구글링을 해도 결과가 나오지 않았다.

결국 해결책을 발견했는데, 이 포스트가 같은 문제를 겪는 사람들에게 도움이 되길 바란다.

## 사용되는 라이브러리
기본적으로 이미지를 고르는 `image_picker`를 사용하고, gif 리사이징을 위해 FFmpeg 라이브러리를 사용했다.
FFmpeg 라이브러리는 크게 `flutter_ffmpeg`, `ffmpeg_kit_flutter`, `ffmpeg_cli` 등이 있는데, discontinued 된 라이브러리이긴 하지만 discontinued 되기 전부터 사용하고 있었던 `flutter_ffmpeg`를 사용하기로 했다. (기본적으로 ffmpeg를 사용하기 때문에 들어가는 쿼리는 동일하다. 따라서 어떤 라이브라리를 쓰더라도 ffmpeg를 쓰는 한 동일한 쿼리를 넣으면 된다.)

## Resizing Method
먼저 `image_picker` 라이브러리에서 이미지를 선택한다. 선택한 이미지는 `XFile`이라는 타입을 반환하게 되는데, 리사이징하는 함수는 이 `XFile` 과 `BuildContext`를 받아서 만들게 된다.

함수 코드는 아래와 같다.

```dart
FutureOr<Uint8List?> resizeAndCropImage({required XFile image, required BuildContext context}) async {
    Uint8List? data;
    if (!kIsWeb && image.path.split('.').last != 'gif') {
      data = await Utils.cropImage(image, context, 900, 900);
    } else {
      if (kIsWeb) {
        data = await image.readAsBytes();
      } else {
        FlutterFFmpeg _flutterFFmpeg = FlutterFFmpeg();

        String resizeFilePath = image.path.replaceAll('.gif', '_resize.gif');
        try {
          await _flutterFFmpeg.execute(
              '-i ${image.path} -filter_complex "[0:v] scale=320:-1:flags=lanczos,split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" $resizeFilePath');

          data = await File(resizeFilePath).readAsBytes();
        } catch (e) {
          data = await image.readAsBytes();
        }
      }
    }
    return data;
}

Future<Uint8List> cropImage(XFile image, BuildContext context, int maxHeight, int maxWidth async {
    CroppedFile? croppedFile;
    croppedFile = await ImageCropper().cropImage(
        sourcePath: image.path,
        compressFormat: ImageCompressFormat.png,
        compressQuality: 100,
        aspectRatio: const CropAspectRatio(ratioX: 1, ratioY: 1),
        uiSettings: buildUiSettings(context),
        maxHeight: maxHeight,
        maxWidth: maxWidth);
    Uint8List cropped = await croppedFile!.readAsBytes();
    Uint8List compressedImage = await FlutterImageCompress.compressWithList(cropped, quality: 80);
    return compressedImage;
}
```

### 함수에 대한 설명
먼저 gif인지 아닌지에 대해 판단을 한다. path의 마지막이 gif로 끝나는지 확인하고 gif가 아닌 일반 이미지라면 `FlutterImageCompress` 라이브러리를 통해 그냥 압축한다.

반면 gif라면 플랫폼이 웹일때는 압축이 불가능하고 (ffmpeg 라이브러리가 support하지 않는다.) 앱인 경우에는 `_flutterFFmpeg.execute` 안에 있는 쿼리를 통해 리사이즈 한다. 만약 이를 실패하면 압축을 포기하고 원래 값을 뱉는다.

<!-- 
---
layout: post
title:  "Inception Movie"
author: john
categories: [ Jekyll, tutorial ]
tags: [red, yellow]
image: assets/images/11.jpg
description: "My review of Inception movie. Actors, directing and more."
rating: 4.5
featured: true
hidden: false
beforetoc: "Markdown editor is a very powerful thing. In this article I'm going to show you what you can actually do with it, some tricks and tips while editing your post."
toc: true // 목차를 사용할 것인지
--- 
-->