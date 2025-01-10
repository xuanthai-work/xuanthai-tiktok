'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "76e30c0e1e1eedf356a79400f52697de",
".git/config": "405f33827228e2c75c7e2cb7a013db8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "9a0f971f80d8b83f62e963b74d9a4d24",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "241b046fb7546e2bd58c49612e9a0711",
".git/logs/refs/heads/main": "f2ed8e2269f6404af6daf706ec7b77a5",
".git/logs/refs/remotes/origin/main": "2f47a7e72b627e559afbf4caa2408ace",
".git/objects/00/ac23ea1fad7b52d5ee645cd12f3372f75f265e": "5208ed9291fea878aeabc34b0e7054a7",
".git/objects/02/9909d8796b2cc3227303781f5e1e935e721677": "33e6d90500ffb83c4c097ea3fd31dc4e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/7e8c5f7396d78e46799110dbaeb2208fb6bfb5": "a9ab17191fb60309e51ff4e782c7580a",
".git/objects/0a/8de3c81f57d9e6aa80bb744704f6ab90f5c287": "033fe40377ecb2522020356499d84a2a",
".git/objects/0b/b82b203c04dc2fdff512c9614d67967182b079": "d8a691fd008799c768b110a927f0f8bd",
".git/objects/0d/fe7d6cadff11d25bb10b4b3ac735ecd80e6cc8": "5c97eed95cb6d7ef8819c8e17032b69e",
".git/objects/18/70b0aaf97de45d55b1b38df6a2f76c9d0b3984": "76fbfb75b9282a1b541e0ba4cff3bca9",
".git/objects/18/82996103d58f9b12a3a2d924ca548773af5b62": "a28a5b1d47c6f009a8213567148d83ef",
".git/objects/1c/477b47462783b40f0e32cf029cddf35aa22313": "647d2e4ab0e19a07b6fbbfcbe1384c57",
".git/objects/1c/8d14e736c67a4368601510971dc7894cc2977f": "db10c9924f96f9ede8b4071491eb29dd",
".git/objects/1d/944fff4342646c61347937bdca00ca87f0a439": "2c5d8d586bde583a7cffeb4816082d50",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/4de3ab0337dd35767ea9c641a0dc14349c2627": "3cfead67598fb5b5a7d1d33af7f9fa3a",
".git/objects/20/f989e15c2b12e1628a821a20a531935492ee22": "2db8adc19a7fed45bb11dd703ce791e3",
".git/objects/22/71ef7d226a35ef490bc4e0c3703d3a38fd8c6a": "fe2d1a26b2851a44082fdf8fd8fb60ec",
".git/objects/24/5fb83acc9315d2a7dc56e8dfdf1bf1abfa95e4": "787410362d678ffc099858c4dcec89d7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/b03825beb9ac7d70ffaf0eeacd710ebcfa8041": "4f60db317c04fc6659528b034d2c7b90",
".git/objects/28/53c722ad96af20f8b1314bc67a0bcae224764a": "7e851d39e7974298d36253933b119e4b",
".git/objects/2a/2a8030d429e0b2461555eb1924028d2ec3d078": "b291aec5b80cbafed5f2242bea3dc31b",
".git/objects/2a/8c63bebd646192007759944a70b2e8979e4b8c": "259fe855923593ae15311a5df6ec9274",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/32171f74106f2804c97aa29226c669e87ee1e6": "6d0f09cec713ed7d9ce8bf67485a9b0a",
".git/objects/36/41a9ad20a6b58079a24b32005109194502f728": "2e2f87f9853f7bae207f5361efd7e31f",
".git/objects/39/03b91648eba42d78441dcd428da37808f4b192": "e1edc5fe333fa6a633770a2705e01971",
".git/objects/3a/25885bb0a48c6b2c5c3b863909136489311a09": "36e8c17ff71314d5a53fdc24e198a8df",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/4ab6758991e55cd321d3f97592e92fd4410215": "c64f0427ab4f3b8884be7b8c1a266bfa",
".git/objects/3f/e3bc2bf4695280118ecd1822e3093432f374b7": "5d685156504c999c9afdae11c3dd6caa",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/28ffecdc082140a40d64fbf6b0acf28551accc": "549c54095b4253d488871430c178991c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/48/b03f2837d367727c58496cec8db0fcb582cd43": "a6f68ab51e3c4bbafec460f744f81f56",
".git/objects/49/aba99ef23004b80d3f80889d2c4d42524d55a1": "5d896eb1273d720a63608ce3cc6bcc69",
".git/objects/4c/441663d84358ae0bfe9239784b98477b130157": "e83b9562bf8ac5b989f82a0cb0db7bf8",
".git/objects/4f/1e57eee1bfe15c270b4b11c554e1a7c212ac2f": "2f8591448ced76b89bf252a6912b2b64",
".git/objects/4f/2a8209bd3b526e00082bc9554feb1037472941": "8e53b7c8c67283cb74980f24a7120d5f",
".git/objects/4f/e4322390e937ce6279d5f9b3517916b216510a": "ee29e36444b5185985b4bde03f4d6c1f",
".git/objects/50/9baaac656a2c7c0aa23ed973f2c7ee8fc86e1a": "151c6c8d4022bc92dce96b129f3ccd42",
".git/objects/5b/73471f9c4cb893c3c90dc5dae8c7be52649b1f": "51991e30de819c769314d36f8d889e74",
".git/objects/5b/b9d8748f6d75ee8ee22824733880ea3394a55f": "2614d150be66d98d472d93fa2916369f",
".git/objects/5c/42173d801391c95d14cecc4364d54c6b6afac1": "32a402e34da4fb0a70c6edd4037f7de6",
".git/objects/5f/fcc049b48935ba003cc0e4648a55b7007d3e94": "a98d111080763512c238d3440b1d5fbe",
".git/objects/61/d72d82ab8f188509d7d35e4e1648babb7127fd": "0d9b18bf275430b538c5491d2555d662",
".git/objects/62/8a22e926a7ac714156f7cb4c34f3e411be3ce5": "486dff4935fb5ee6001d5571841c6ec1",
".git/objects/63/bd2ce2ab53e4999bb9fc58cbacf06427b43a2f": "2f6ab038a28ed07d7864df6717abfd32",
".git/objects/64/a19486628163442b752e55f09352c2ec3b7d1b": "f3fb1abb534adde50d2d6df829a69976",
".git/objects/6a/31aeee1946d9dc9dc268b0434865a7bf20ba58": "cdcdb11cad4ac21e000b689690edc31e",
".git/objects/6a/ef0bc60b6a945cba38f458ca288fcdbe564568": "57a1d9600ca658aefc1aa4a095ac1dd5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/780bdaf267151ea403a8a0f720d72c43486f83": "436003537204be4ea0145918d3ad2540",
".git/objects/74/8131f09dcbd69a53d1a73e45651a0e44040f64": "65a76468e58021ec43e8a2b3cc2296f9",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/4df7c790646685f0889d33eba136656fc9954e": "ccbba7acbef98bbbf0bd0f711f80d551",
".git/objects/80/5025bfee0e83084283cd52fcd69732d0f5144d": "526d851776dbee772aaa17bdddda406b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/99d9796d939a93d54ba04efb1a493dfb4f9e1a": "4172e9d814dd0820fd187cc931d42f9e",
".git/objects/84/d606a7de7b84258a8d1abd59cc2f56b053609e": "bbe0ba37a609dea23e68f05a6fff00ae",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/c53d3c6717bc548e8e0274629934a24cc786bf": "01994619b4f7e2de862a6a471dc5e434",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/25e87a892df60565966643e8606cbaa27f511d": "f16689c7e8b53cc6abadbc0551952963",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/efaad465179edfafec537b05628be146b2d3e0": "328de50a12b08f85a7f3a0418f0c5172",
".git/objects/90/66e20b43b3bb6a0a815027a821f4f893f01af3": "0745a8502d4ed909584dfe7672b384eb",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/98c28bdea9339ef6c3951d6877dbbf64acc98c": "fc9f0fca6f871883d2812d6783460cc5",
".git/objects/9f/79788d3e27fcf2333986066de76b79c6fd4e83": "9fc2cd354e67c02bc27146a50ff0b545",
".git/objects/af/175f99b06ccaf6ac713077159ee89fa69cf3ef": "d4f750f2d4e29bb847b1233327daa8fa",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/30708670fdf7585958f0622dc4bb8f992bc0f9": "8877d8c472522d7e8b1b81b6fb51783c",
".git/objects/b6/f096b43a81133818eefbc258b37395a436c220": "9ae1806aab6cdfdb7b34dffd27fed93e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/e333539a413c214d11433276aabb2954863c49": "ad0ee1b8946a191b6a6537d163ceeb82",
".git/objects/c3/ba2d1f3945cd52470d280b0910229ac0fdcc23": "23e8e7fa6a48e8862812beb30238bddc",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3f33989a7d83da553025c8af070d748add8a2e": "8d8a2df83ae2a8174b8d91817beb15d1",
".git/objects/d4/f51a8f4200fd7f15ebd6e14225d3a9e609e7e2": "b2a769dad5dfff35af1dfe6b10c5d27a",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8cec58559d2e2be3e8d2ddc5dd5c3a2c98684d": "947d5775c5594435b03fecbc2b246b9b",
".git/objects/d9/aa956c8907473c75b9aab937469417303c6f75": "18b7fbc8959de076d8e13720a85529d8",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/12506c9a7b709df46932dd487945d94805e004": "33e9a568a258d9dc5add192ab918efe3",
".git/objects/e1/78eb0a30b2408bfeaa489f241b28e3457a285e": "94098ab0cb437255a3dba04e9c3738c7",
".git/objects/e2/43f2c38246f03847e29be64506f2a22fdf1776": "1ccf665bd2ee84ffa132fdf8781461a8",
".git/objects/e2/8e749188a8dc28ae2a33cd2c0e6faf2d6d2208": "f05eb4646235a6f3e49e04b20a22c1ff",
".git/objects/e3/b2eb77e98c8c29ffcd6fff720959383dc2a83b": "dfcbcede2a218c7ffa80fdf179882b76",
".git/objects/e5/6e29defaefdb894933692dfdedb9e62f739b49": "8a60c140f3b5fe828245057a4083c3fe",
".git/objects/e7/426610e702e82875c38140b02888a0a40bd5ab": "dea3ef53267164e85dd9d2fd93e78a0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8f3f22d74106257d8e50eea693918355470289": "6f8446086db031a956dfe2d89a1f0f57",
".git/objects/ed/3fc0a4c8525da0dfa1db201f88be838669f742": "b6e935d20312ef9c4307aed7106584d8",
".git/objects/ee/dba1110fbbb7f9de9a667c1f5fa1264d4e89d0": "42a35c003927f7df642cae845175f3df",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8b53130fe8f18b225c64a0a901a993c7c165d0": "8b652e7235c2535c34905a05834630eb",
".git/objects/f8/a6b6fe053290e2c9c22422fda96a77cebd7879": "17fe8ec8a6daf4e914823e82b7bb2479",
".git/objects/fa/d450f424bd43a4ea0c26471357363432663715": "57ef0f1c0560a499826d19a9c74edf9a",
".git/objects/fd/c41f42c5c8f988c6e5aea54ef40db0ee094148": "c5800f63cbf5caf81212e3e8bb4494c7",
".git/objects/fe/fd2d3c540b2b4016a9bbf728108693d83c88fc": "0eb664ee7f6c86a15e820019e6390271",
".git/refs/heads/main": "6035987e7c3d105c58b4b85a6b702746",
".git/refs/remotes/origin/main": "6035987e7c3d105c58b4b85a6b702746",
"assets/AssetManifest.bin": "6deacfa5b6fff153d0043d2e27103d0f",
"assets/AssetManifest.bin.json": "97e8c1cca30554de204cdf111cc63da9",
"assets/AssetManifest.json": "56fcb786b7e19a9973c8cf396d386d10",
"assets/assets/fonts/DancingScript-Medium.ttf": "0a4a82df04cdc00d8ef9673b50842e14",
"assets/assets/fonts/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/assets/fonts/DancingScript-VariableFont_wght.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/fonts/font-times-new-roman.ttf": "8ed460da03267d2817c1fe1b8e5272a6",
"assets/assets/fonts/PassionsConflict-Regular.ttf": "f89c9921e3f440b3f4cbfa077a607b7d",
"assets/assets/fonts/QwitcherGrypen-Bold.ttf": "4136d4e34248800b49482f47bc39d275",
"assets/assets/fonts/Zimra-Regular.otf": "f5cab599ab9717fdec01344c2ff052dd",
"assets/assets/images/ava1.jpg": "b8de8462027b4a98f78506d3eecfcba9",
"assets/assets/images/backbrown.jpg": "acf37c8027c1c4803e568766a1413a37",
"assets/assets/images/background.jpg": "b506421c1021ce1add34711800580642",
"assets/assets/images/click.png": "9531ee58b5f3f1e4dbc3df9ab76f2642",
"assets/assets/images/desktoppage.jpg": "8ea36ffa34dc4622de471dccdd750a8c",
"assets/assets/images/discord.png": "aa4132ab69fab698a73d5a3e15b7f36c",
"assets/assets/images/downarrow.png": "481a2d4bca470070c85427d3093a7bbb",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/instagram.png": "6d502e87783d611f2d606d55d541e139",
"assets/assets/images/instagramto.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
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
"flutter_bootstrap.js": "1b5b8baf20e1f23b2a49eba4111115d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51995ee053a47185a962d6a3b1d49e00",
"/": "51995ee053a47185a962d6a3b1d49e00",
"main.dart.js": "8cae61dad8296073b44090b1b0b8fe92",
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
