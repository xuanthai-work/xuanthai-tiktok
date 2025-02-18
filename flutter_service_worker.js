'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8e11b8107c5ae0f5150b61e3272780d4",
".git/config": "47586185d2c826125430734fcc728b05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9b300f5aa95a4f6bd1528b310f120954",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7fb57f693af942f0f3b0b61fffed1b78",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5323b27e31941afae1efc987edc94b75",
".git/logs/refs/heads/main": "361a6734b362f954178c6742b5f548d3",
".git/logs/refs/remotes/origin/main": "5e16b0b4660db17ccc7ee05f29345707",
".git/objects/00/ac23ea1fad7b52d5ee645cd12f3372f75f265e": "5208ed9291fea878aeabc34b0e7054a7",
".git/objects/02/9909d8796b2cc3227303781f5e1e935e721677": "33e6d90500ffb83c4c097ea3fd31dc4e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/12/c14ce7ea5084af42d6610e393dbe51f6f89adc": "76365bf02e8d27128c0e715b445e98cb",
".git/objects/15/a00fdab879658e501a6bd6679b389b9ff306d9": "731b771cd31cd68d510953160738d843",
".git/objects/18/70b0aaf97de45d55b1b38df6a2f76c9d0b3984": "76fbfb75b9282a1b541e0ba4cff3bca9",
".git/objects/1c/6d5a0bb0009e433b6e290cecd24c0fb5190b68": "dd2da7a32de42ee93662b2cee07efac1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/81ace4f684d3649b87aeea12d0b15653a28d63": "286630bba29b9c45eb1bf78dab4d11e1",
".git/objects/22/71ef7d226a35ef490bc4e0c3703d3a38fd8c6a": "fe2d1a26b2851a44082fdf8fd8fb60ec",
".git/objects/25/8896dbb9114ab4e76472ae3e108d8b8bec1999": "5b05b67f900469e4c7a82af969280351",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/aba08398a71b645377e51aebcddeb783e95143": "a2a10d00b215a8be66783aa3d56da405",
".git/objects/31/65e1155aa2c51aaaaa9af081fb0bfdd25a5aea": "7257f6194f8b41eef1ec0793ef6d2c27",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/03b91648eba42d78441dcd428da37808f4b192": "e1edc5fe333fa6a633770a2705e01971",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/e8c21ff8a33e7357c3d37a13218117e342b5bc": "9d5382358b815dcf39c94a7218bc8938",
".git/objects/3c/082f97c64744b41c07ba9a81cb27b88a8e6094": "57d6dcd05c376f809ae7d9fde8140442",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/47a11f2b84a773b7d379bead0bed92c8bc6092": "452b5e0d348f10ef53c3aad8bc7cf577",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/ef4b4194413c84913214f509fa98159d3cbb02": "85edf410215b5cb715b645ea406c4327",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/4b/b205879a1d841db9e8d080d4929d5896cbc75d": "03708d84aeef225fd39fa1d2be44e1c4",
".git/objects/4c/441663d84358ae0bfe9239784b98477b130157": "e83b9562bf8ac5b989f82a0cb0db7bf8",
".git/objects/4c/6a33bf9d7c9a2188aeeec5d908ddc719dcf200": "895cfca22fe401b34b1c3c9ce6f968e7",
".git/objects/4f/2a8209bd3b526e00082bc9554feb1037472941": "8e53b7c8c67283cb74980f24a7120d5f",
".git/objects/5a/c2a0ec61eaaa34e33c230fb72bf9bd225df2f3": "b81d53d321a352e552c72391ee0b10af",
".git/objects/5c/42173d801391c95d14cecc4364d54c6b6afac1": "32a402e34da4fb0a70c6edd4037f7de6",
".git/objects/64/a19486628163442b752e55f09352c2ec3b7d1b": "f3fb1abb534adde50d2d6df829a69976",
".git/objects/6a/ef0bc60b6a945cba38f458ca288fcdbe564568": "57a1d9600ca658aefc1aa4a095ac1dd5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/9c3b0cdda2d2e6f50ffa2caf0ed3735863e523": "0e4e68c2c5b9a388af22fd8e2c855e12",
".git/objects/74/a9882c3aaf604809e1ef94283f04893aed6b0c": "1739d1f0afc68eb66167f463388d357e",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/2740027b2979a071c7dacebe7d55967d2b00b0": "784135ac712b07270eec17071e51d742",
".git/objects/7d/4df7c790646685f0889d33eba136656fc9954e": "ccbba7acbef98bbbf0bd0f711f80d551",
".git/objects/81/31d52d64d2c608fdb416172898bd4f576b7432": "4fb4a250e1616532ed3c3cdd75be7a7f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/d606a7de7b84258a8d1abd59cc2f56b053609e": "bbe0ba37a609dea23e68f05a6fff00ae",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/d2d25e4866b0c78741adcc39a301bc6f1b0917": "d57634e403aac320c98acef160365666",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/96e241d141b2d6e53171539ddb03a85a49957b": "b1a606feba82091fb39f0a35ba6e4341",
".git/objects/a6/a5fd60226042c08b0febf4ffbb433f03f7afd7": "ba3999fae84135971990d340361408a5",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/30708670fdf7585958f0622dc4bb8f992bc0f9": "8877d8c472522d7e8b1b81b6fb51783c",
".git/objects/b6/f096b43a81133818eefbc258b37395a436c220": "9ae1806aab6cdfdb7b34dffd27fed93e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/4951725e503c371adb78c57d983ab8267097a7": "9c09aec115c06b8ea81247800f6bc208",
".git/objects/c5/4c975d76ef25bd80599fb3d8964b0eb91db83b": "1636643459e0a385ff333a8398387bd4",
".git/objects/c9/e72d78fd334b88a26263c38631e820aec72fd5": "4d81ce285ed84e203b2f41fd343db4ba",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/e64d97a2526e69ac02bc5f2efa9627e79fa39f": "87a7b69ba560b85c92cc164313852b2f",
".git/objects/e1/78eb0a30b2408bfeaa489f241b28e3457a285e": "94098ab0cb437255a3dba04e9c3738c7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3fc0a4c8525da0dfa1db201f88be838669f742": "b6e935d20312ef9c4307aed7106584d8",
".git/objects/ee/dba1110fbbb7f9de9a667c1f5fa1264d4e89d0": "42a35c003927f7df642cae845175f3df",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8b53130fe8f18b225c64a0a901a993c7c165d0": "8b652e7235c2535c34905a05834630eb",
".git/objects/fa/d450f424bd43a4ea0c26471357363432663715": "57ef0f1c0560a499826d19a9c74edf9a",
".git/objects/fe/fd2d3c540b2b4016a9bbf728108693d83c88fc": "0eb664ee7f6c86a15e820019e6390271",
".git/objects/pack/pack-c7e79db3cc6eef1bcc449d9e8f742e46aef1833b.idx": "505cd5d133f6ce20391c5b695e80a853",
".git/objects/pack/pack-c7e79db3cc6eef1bcc449d9e8f742e46aef1833b.pack": "a3844d2b4436fee433a19ae905f31dcd",
".git/objects/pack/pack-c7e79db3cc6eef1bcc449d9e8f742e46aef1833b.rev": "e4176230d8495a3484a7b279b84314f1",
".git/ORIG_HEAD": "f5ac12114e4a9b480df9ba3c603a6ee9",
".git/REBASE_HEAD": "f5ac12114e4a9b480df9ba3c603a6ee9",
".git/refs/heads/main": "75d03680b9411c5e1c208d0a7dd13e33",
".git/refs/remotes/origin/main": "75d03680b9411c5e1c208d0a7dd13e33",
"assets/AssetManifest.bin": "a0be34e547d395e1b2b99b8d09e135b3",
"assets/AssetManifest.bin.json": "18da0dcb1e9b7f3487267f047ac7a303",
"assets/AssetManifest.json": "aa717105e212f758d7e0f7a2c055c567",
"assets/assets/fonts/DancingScript-Medium.ttf": "0a4a82df04cdc00d8ef9673b50842e14",
"assets/assets/fonts/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/assets/fonts/DancingScript-VariableFont_wght.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/fonts/font-times-new-roman.ttf": "8ed460da03267d2817c1fe1b8e5272a6",
"assets/assets/fonts/PassionsConflict-Regular.ttf": "f89c9921e3f440b3f4cbfa077a607b7d",
"assets/assets/fonts/QwitcherGrypen-Bold.ttf": "4136d4e34248800b49482f47bc39d275",
"assets/assets/fonts/Zimra-Regular.otf": "f5cab599ab9717fdec01344c2ff052dd",
"assets/assets/images/ava1.jpg": "b8de8462027b4a98f78506d3eecfcba9",
"assets/assets/images/backbrown.jpg": "97709e302f66f527214b018d921e086f",
"assets/assets/images/background.jpg": "b506421c1021ce1add34711800580642",
"assets/assets/images/click.png": "9531ee58b5f3f1e4dbc3df9ab76f2642",
"assets/assets/images/desktoppage.jpg": "a6bc6177c95c3cf392b5d06be4ccff25",
"assets/assets/images/discord.png": "aa4132ab69fab698a73d5a3e15b7f36c",
"assets/assets/images/downarrow.png": "481a2d4bca470070c85427d3093a7bbb",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/instagram.png": "6d502e87783d611f2d606d55d541e139",
"assets/assets/images/instagramto.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/assets/images/mamomo.jpg": "87326376f7ee225c1f4aee51f942d2c7",
"assets/assets/images/Screenshot%25202025-01-07%2520193641.png": "aab3229daf9f744fb424a25c9d69ad6a",
"assets/assets/images/tap-here.png": "1e3dcb0206b558bf048c2e91618952e2",
"assets/assets/images/thaitron3.png": "2ab807264cd604e4a4a45f28c575d7f5",
"assets/assets/images/tik-tok.png": "f6d4517e1cc1297564ab25b01415835b",
"assets/assets/images/youtube.png": "166667ba334707d0b69960f50e94983e",
"assets/FontManifest.json": "575e9ae4217383d089a7f3d5fa275e0b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "1d6fa971a9431b630b417bb3cd7996a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "976d11432325ec2595265510f5d7d9ae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51995ee053a47185a962d6a3b1d49e00",
"/": "51995ee053a47185a962d6a3b1d49e00",
"main.dart.js": "897727e6483e97b0e7331539c57d7260",
"manifest.json": "72f92eebf9051d2bf8d9455a099c275a",
"version.json": "61533813649ab27b4b862e687431136a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
