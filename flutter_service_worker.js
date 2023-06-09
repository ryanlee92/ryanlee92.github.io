'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "958cd77dd6f5bd7e285a212735ff5e87",
"/": "958cd77dd6f5bd7e285a212735ff5e87",
"main.dart.js": "bc466981c2a55d470084bacfd152db5a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/config": "c1f3190c8ce09dd1bc40df6ce0d982ff",
".git/objects/50/e22f9593a74d8fdf09de453f961093bb4052ba": "e8a244f2d895a5eaa11005c06c2f2bd7",
".git/objects/3b/28399e572cfdd9cf9bfe8ff538504b76a63519": "4602025a8e03091bea82e68c4605f75a",
".git/objects/6f/90f96096d15623a4ad3acf13130316536461c4": "ef60a9930c194ca85350daa16b49b579",
".git/objects/6f/56eff583767f83da271c2b3e0261cc98bfeb67": "266809064e54ab7f47557e11aedbcaa7",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/2ba1c83ba5954d3ad95724a825412439d4b19a": "c14d679e144c7b94539887e87da5da40",
".git/objects/04/29932eb4ae651854b3dde4a735d4b153e1ed0b": "8dfe1ac42218cd258f77216948871557",
".git/objects/6a/79b1b6ef2f7dd7f9c067a9cc34324440e635c5": "0a95a55edfacec8ccccc99a754ca77dd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/3cdc9ba22e04ee6635d64b2feb83a023511309": "5da6afb30ce4a247526344e8bc0e9d1f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/3831f817429b7e867d3a91e976bd2e268eb8e6": "2ff412a9d05b91def38c091c8f4f084c",
".git/objects/51/d51f53392c6728b93e266e42d96447b494cb9f": "d45d136461d120dd265cc273a6059a31",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/df/b89f60ca726fe45a04c5583daf54a701014d57": "659cb7104693095fb6120d231eae8f3b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f7659ecc32b407666acd0679c0743eb601997f": "902bfd3c923e0f181e1331625fbba790",
".git/objects/bc/55e07b874c07e808823dee8bd25cbc6ec7ed9e": "179659ce88418a8165469d5aac9b649b",
".git/objects/f4/dd0a55a99ce6fe33cfdb9176a187e9df9be426": "da422b69434a3ac97bdc75828610f8c2",
".git/objects/f3/06504d80910e5cc5e53b366292794ac18df4da": "6d8534622f7d6e6a9b8c7c2c4627a3d6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/78207f490603bea0976d112c6458bf8bc416ca": "b70cd62d7a73772db8fdc4e5fa9581e9",
".git/objects/fc/e7aef329c69718f7cd060cef4ac6520cec3290": "b8ef9c160ebe0728cf0c5e8fa3925507",
".git/objects/cf/fc0b473fb05e6f82e15bf049434ce69eca720a": "52e32f34da91ea90100f8e13db0acafd",
".git/objects/c8/d791206ecfa006b42b838a34625b9bf134628b": "26fd91897479005886434d5bf5306b37",
".git/objects/c8/e537ba92709a517340ee115f60ce0b534f18d5": "f83cf6439f89dadd26dd4bcc11fdc689",
".git/objects/ec/fce6db7cf9b84acce6faeffd15af40a0e33fcd": "9680a631b126e61b29fbe6683cd86971",
".git/objects/29/c6773ec08f353b498d6ab85c26d588d73f4af0": "40cc5abb487fb10930d2ffc864fc95e3",
".git/objects/42/536f2ffe60b08d4cf54c045adf57a139838ba3": "04bdbf13085198c1d9f372dfa9b5cbb4",
".git/objects/73/6c87d97c8261b07e39ce42a6cd6c3111d9c34a": "38cfa5f6921aa3a39f43a3d6d8f3c87b",
".git/objects/87/1fb681c2e57728be8869c3420b29d099ade7cb": "bd39c6b157e486d9e6abb1907a4596bf",
".git/objects/87/0d45524a5fa9380479b9b181daff4edddc0f01": "2f971137596f857054b3f4e768f9c15d",
".git/objects/74/54d9cf46aca558ad2346529de2389e4ce2596b": "abc1e791417a4805a6824b6341e20bf3",
".git/objects/74/c599ad3218b77917fcb5de88a3b4f6c8dfcf25": "b2094b6bc8f12a64e35689935d1aa61a",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d2d369995ee4b852053a3f42dac1737ed50844": "fd19ea5159eaa41988fff4e120f34eb4",
".git/objects/10/b3595505fb97728d3cd7c3255cf7be3c0cddc8": "8dfe919080ad1634c7b306141039c8cb",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/d52cac0015d8d747177ec02b36dc9bd1fc05e9": "28734a341200cbb920e4a5ccb3c9c11c",
".git/objects/44/495933e143300e433c2a8ce22b578d4529753e": "c3064855ce98a4cdd4a853117a94472c",
".git/objects/2a/d919386ccce37adac0c66f61e2475ac1a05c58": "76d120822817249788e85eddd98b6008",
".git/objects/88/ae2165ae162cbaf3f192cf3323247c2556ab00": "93f8d3e56dbfe0f10c3f95303b1376ff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/bc81d292ed61a347f4c05dd1230f711786fe63": "cd391840063c1d376bf4f5f28d3a96d7",
".git/objects/07/75e748d1720ed64bc077ff5516cb24fcb2dc7c": "5f091aa5fd12f5cf8fca2764f1dafa7c",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/09/6edf8fe4cd778d56cbd9ad5333f8bb5b4ad797": "7be60abd3bc20b5c841c6c8b39dd88c2",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/3c8a1bb2d00d900b1b70bd2923125be952b88c": "503ffdd7f08e201c67374ea18255a666",
".git/objects/53/cead8b3e017fa4d993afe91c7c5f6191008efe": "d51be1581aadd69e161ab2a3edfba091",
".git/objects/3f/be9ef71fdfcc9b6cdd5a4349796316e3efbb2f": "e55a12a2ca9c09b8a529cd469bae2fdc",
".git/objects/30/939ff0b763232d2ab38d0759ecc24f9fd82fd8": "19e38f85478f8d8aeabb08c3d3f573b6",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/e196868b6ab1c0f6bdbf578c5d9eeb425e59d4": "37e1b0f99e2e184325b125605ca9d5a6",
".git/objects/37/87808dc3d4a59f5c99c512cdff9a44cca190f1": "c8b47b1a4539d1e8b14b6e74d71a8dd6",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/38be9575184745b583302112ba125fd35e7ac0": "2f8502df263e117e3289437eca2cb90f",
".git/objects/01/0374ccfc6e81d2cbb92e90ab0ce528b0708496": "1ca70c166c4bfa46d569b88db17b30ff",
".git/objects/06/74982d0e52d34d2d3b6be9381476287a0dc760": "409b9ccbc8b0784cff37052356105bc6",
".git/objects/39/94c119582b9a02a8f6792eb63ce2f9bc47cc8d": "8ec1ff378fa0a785636d38154ca4374c",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/0f/a2c37f9a4da6946e25358e206accc25d70a5ed": "e337363bdcb90d081027508b9c5a3ee9",
".git/objects/d3/1f8f0da03b338abcd8d632780d6253971b0524": "108b39db06570d21edf5dde10c44c14d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/d3fe9a3737b60fa907e0e9070aeea25a2ae945": "a282af81d77ca3c1e3f76c6f585c43a5",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a7/5cec64a6b902312c807ecd4e1eaf911f8e18c8": "ae330db908c67be1dba5be28db3cd292",
".git/objects/b1/6f6a5a43e5585e662cf64ccbdc18593e5f1e48": "4ccc7031ad86a0b26d20e182402e6082",
".git/objects/dc/bb57d8b79a6203fbabe029f80a9eeaf311fdea": "56d35861091796e3ece0fd89570affd1",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/dc/5815635c802cacd0fc5d5c28b2b6f42ecbcf06": "29b327d013a833bd38007abf18b28b21",
".git/objects/d2/e4d75bb2d28d8cf62db6e70c58c383b332a167": "d7cc5a605dfe58fc766353391c543837",
".git/objects/b7/c0fbe4f49f805089e30ebce25e85223a9779bc": "1478182cb258590eb9cba26c13e623f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/526646ae6a7ff175e1e4d9a2fe26c028a8b361": "bf99e36b56d590f8ba6adcf9ce2c8e0d",
".git/objects/b0/9a0ce2cabc66bb51eb6b50fff5593f129d7bff": "7851cea6fce88900f77bfe88ae797347",
".git/objects/a6/fa3540d54e123555540cbafa9e3faadd4278ea": "e668cd28f804b6d20bbfc8a1365483c7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f7024e9b383d358dbc1fa6986f31608a485912": "65ab31f58da99d0bb3247e1bf00d23ae",
".git/objects/ef/adc0f161dadf37909f2841fc33ae26b11b2b91": "fef2adb31cd12c13de432a2669fe7a18",
".git/objects/e6/8aa06b443752fcd30b0636575da92a192f999d": "fdf1fb66f2d31520778205353ee1d43f",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f9/22939b13b0ade1785207eef8f207ffd9ec13d9": "6f170c904228524946ae69d1435a73ea",
".git/objects/f0/03be5fbcdb8e7a2f43ffe22e73b79adea803a2": "a6843e4b74844538ce3316acb40520ed",
".git/objects/ff/1f738c7b381e9fe4dc4d9c6a800f06da7e8175": "247f60687e32b8e7260c39207802416c",
".git/objects/c5/4718d9b88ee37e46563fece04e81e600423aab": "436c2174992171bfe2f6cd34f052da87",
".git/objects/f6/eaa437687e2bc71cd13e4e949ae766e1ca7f0c": "d71ef8eaf444a875e5a9be7c5da37f7f",
".git/objects/f1/12dc04a95971cd1a556ac7fff90a7eee07a4a6": "721d7ed29a1a87d6907d55f6be093aff",
".git/objects/f1/70db2acc110ec1e7bf833e6fde758d1b8090d2": "d299cd6af4aed4ffab04d0f347bb9e66",
".git/objects/f8/18603aab4695a3ebac0266b1c5a888dcaf9b9c": "c73958a54f0869ed9aaa36bc4de789ab",
".git/objects/46/41209ae53ce32c43d586695b70366e72487268": "aecedd3a59403726cfd6c85c9d0a81cb",
".git/objects/83/fdba46ad5832bde2de4188b19d8e5696e1a8d5": "e7c30f7054c8bbcf9f349c9f529ec330",
".git/objects/1b/6a43fc029a6a4c55aa1fae3720fd49a8049383": "2482f1be44d3bfdd14e6755f2627bd35",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/c538f4696bfb14b6bcacf0cf710dff47507d82": "03ed124ec9787507f805a890812655a1",
".git/objects/48/a3b42a0bb795abc5aa72a4d66b4a74fcc5a1af": "dfaa5b38f8b6ece57bbd0e943a1af78a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/fe8d191dd1a6cac5655faee1b76a7f6fa64fb3": "ab8a8be00e52d949594eb92ec939b8d1",
".git/objects/23/c094d51d9424da811e3566b02d3be25c80e6c8": "e3c0dc3c39653f789696cba1483f7721",
".git/objects/8c/148b0a8846a3f4769a6d433dffc7394d64ddcf": "76125ef5cb52dff4b47bec4421e575c2",
".git/objects/47/afbabd5161aa9ae7466a9704c92b2d10daab88": "c4780e8048ff0a0de4ac1e1c87f00f20",
".git/objects/7a/f66c1f411daba0d4f350ded93f5aa00f224eb8": "a0e3fa15871eadf74d965277affc7f0f",
".git/objects/8e/385048bd349f037cd301c83545c43e6d91a5b3": "6678a8af9d44bcdb9ffad3e27af7ee31",
".git/objects/8e/e24615c2e8fc2178aac07b67465f7d7f60709c": "b4d68fed6f58268b64c55c379fd5309f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bdcd0758fb29f629c2ea400cdd9177b5",
".git/logs/refs/heads/main": "bdcd0758fb29f629c2ea400cdd9177b5",
".git/logs/refs/remotes/origin/main": "026e26c3f426c6b7b029c1693b4bb703",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "24413d4513648a188ca37c363423a616",
".git/refs/remotes/origin/main": "24413d4513648a188ca37c363423a616",
".git/index": "3942831cf2f1d2e52f72c8b0f31a43fc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "c850886d224dc52564f7a965d1cfdd81",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "3a34f982db0940e136978cf5300ee759",
"assets/NOTICES": "fde23eee79d7eaa3faa781de591f698c",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/supabase_auth_ui/assets/logos/google_light.png": "f243a900707589f1b21af980454090bd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "7c895d8823c87f376c17b9579f3763dc",
"assets/fonts/MaterialIcons-Regular.otf": "a5635e9e2a0b909936a25f0b881e5be9",
"assets/assets/config/development.config.json": "22c2fb977e06df688da955ca2b0107d6",
"assets/assets/config/production.config.json": "bc6e98c3bae3d6129b0a3e0a41e969df",
"assets/assets/config/local.config.json": "bc6e98c3bae3d6129b0a3e0a41e969df",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
