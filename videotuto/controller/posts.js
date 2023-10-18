app.controller('PostsCtrl',function($scope,Post){
    $scope.NewComment={};
    $scope.posts= Post.getPosts().then(function(post){
      $scope.posts= [
        {
          "id": 0,
          "name": "Opportech",
          "content": "Pariatur voluptate fugiat sunt ex cupidatat. Eiusmod id ea culpa irure cillum nulla reprehenderit tempor velit nisi ut consectetur amet. Nostrud laborum reprehenderit duis ad deserunt ex sint esse ea. Voluptate incididunt mollit nulla tempor magna. Dolor laborum voluptate do esse eu sit dolor aute commodo amet fugiat adipisicing. Minim nostrud occaecat ullamco voluptate non sunt consectetur ullamco reprehenderit sit duis.",
          "comments": [
            {
              "username": "Felecia",
              "city": "Nicholson",
              "email": "feleciaweaver@opportech.com",
              "content": "Deserunt quis adipisicing deserunt sit voluptate reprehenderit mollit commodo duis laborum culpa enim aute. Amet do exercitation consectetur dolore adipisicing ex ullamco velit veniam ea nostrud nisi irure aliquip. Proident aliquip sit velit consectetur ipsum do eiusmod. Do et labore do ad laboris sint elit nisi eiusmod mollit elit consequat elit elit. Sit ullamco est sunt adipisicing labore minim consectetur aliquip aliquip ipsum in."
            },
            {
              "username": "Lane",
              "city": "Dellview",
              "email": "laneweaver@opportech.com",
              "content": "Cupidatat id est id anim anim quis nisi officia adipisicing ex exercitation commodo. Deserunt sit amet ex labore cillum adipisicing in. Qui proident duis pariatur elit dolore deserunt ea. Ipsum aliqua minim qui pariatur eiusmod elit veniam. Minim quis irure reprehenderit sit in eiusmod qui non eiusmod reprehenderit esse do ipsum."
            },
            {
              "username": "Mcneil",
              "city": "Biehle",
              "email": "mcneilweaver@opportech.com",
              "content": "Sint adipisicing duis consectetur do ex adipisicing. Nostrud Lorem veniam labore voluptate qui laborum. Ullamco ipsum consequat deserunt consequat tempor cupidatat in ea. Exercitation amet aliqua sit reprehenderit eiusmod aliqua do magna in excepteur et exercitation anim mollit. In proident deserunt pariatur labore pariatur ex ea velit labore dolore mollit voluptate."
            }
          ]
        },
        {
          "id": 1,
          "name": "Codax",
          "content": "Dolore do ad occaecat dolor consequat. Id ullamco ad incididunt irure magna. Sit voluptate nostrud qui magna. Culpa voluptate in dolor qui eiusmod ipsum officia incididunt ex Lorem consequat. Ex officia cillum laborum labore. Irure cupidatat exercitation aliqua excepteur commodo eiusmod.",
          "comments": [
            {
              "username": "Dominique",
              "city": "Ona",
              "email": "dominiqueweaver@codax.com",
              "content": "Pariatur laboris mollit est ad dolore esse veniam eu. In irure exercitation aute ad sunt consectetur in sit velit tempor officia culpa laboris. Est ad nisi incididunt sit minim laboris. Nisi qui adipisicing incididunt cillum et non sint consectetur do adipisicing amet. Esse ex est incididunt velit."
            }
          ]
        },
        {
          "id": 2,
          "name": "Webiotic",
          "content": "Id sint et proident mollit ipsum consectetur anim excepteur incididunt do ad commodo. Esse id et laboris eu deserunt excepteur magna. Ullamco id deserunt incididunt qui cupidatat consectetur et et ex ipsum nostrud velit. Officia et cupidatat velit Lorem labore ad cupidatat mollit nostrud dolore dolor. Deserunt consectetur sit elit id enim consequat aliqua. Est ex dolore voluptate commodo qui qui labore.",
          "comments": [
            {
              "username": "Adele",
              "city": "Sunbury",
              "email": "adeleweaver@webiotic.com",
              "content": "Consectetur deserunt quis Lorem sunt nostrud aliquip labore duis labore Lorem duis. Velit pariatur eu do cupidatat eu aute in excepteur commodo occaecat qui dolor. Tempor ex excepteur quis pariatur elit laborum dolor magna. Reprehenderit laboris occaecat adipisicing et consectetur in reprehenderit quis esse ullamco in. Labore quis do aute eu officia in ad ullamco tempor officia commodo."
            },
            {
              "username": "Karla",
              "city": "Gibsonia",
              "email": "karlaweaver@webiotic.com",
              "content": "Sint ad eiusmod proident duis Lorem. Reprehenderit officia Lorem consectetur veniam occaecat adipisicing aute culpa incididunt labore laboris. Enim amet non commodo occaecat exercitation adipisicing commodo consectetur ut eiusmod deserunt adipisicing laboris deserunt. Anim mollit dolore id eu excepteur sint aliquip aliqua fugiat tempor exercitation ex. Est eiusmod veniam nulla enim Lorem laboris minim labore nostrud pariatur ad ex."
            }
          ]
        },
        {
          "id": 3,
          "name": "Oulu",
          "content": "Pariatur Lorem est id et ad. Consequat eiusmod nostrud velit consequat incididunt deserunt ut sint. Dolore culpa ut aliquip fugiat esse adipisicing ullamco adipisicing do sit. Amet incididunt sit excepteur nisi in dolore reprehenderit dolore amet irure officia magna do laborum. Exercitation exercitation consectetur laborum deserunt eiusmod cupidatat aute minim culpa non. Aliquip cupidatat aliquip dolor aute Lorem duis aliqua culpa anim non ipsum veniam.",
          "comments": [
            {
              "username": "Trujillo",
              "city": "Leeper",
              "email": "trujilloweaver@oulu.com",
              "content": "Ea pariatur mollit sunt ea eu eu minim. Nisi sunt sint nulla elit qui. Labore dolor dolor est cupidatat ea exercitation irure nulla ipsum voluptate sint occaecat irure. Amet cupidatat id eu Lorem Lorem esse consectetur dolore. Ut reprehenderit id sunt consequat mollit qui amet magna exercitation cupidatat occaecat."
            }
          ]
        },
        {
          "id": 4,
          "name": "Soprano",
          "content": "Irure exercitation eu nostrud et ad excepteur. Consequat velit dolore sit sint nulla. Culpa aliquip Lorem nisi eiusmod voluptate anim consectetur. Officia fugiat nostrud fugiat sunt eu Lorem dolore dolor dolore Lorem. Anim exercitation duis eu aute ad adipisicing ea quis excepteur nostrud. Ut deserunt cupidatat fugiat amet sit ut nulla tempor nulla.",
          "comments": [
            {
              "username": "Rocha",
              "city": "Leyner",
              "email": "rochaweaver@soprano.com",
              "content": "Dolor excepteur eu aute cupidatat qui dolor. Nisi consequat aliquip ea adipisicing excepteur nostrud irure ea laborum duis deserunt. Dolore nulla non quis ipsum ex sunt cupidatat excepteur id reprehenderit commodo do exercitation quis. Qui esse deserunt proident aliquip ullamco aliqua commodo. In excepteur est nisi aliqua ut nisi aute magna."
            },
            {
              "username": "Tia",
              "city": "Haring",
              "email": "tiaweaver@soprano.com",
              "content": "Ad cillum occaecat et pariatur officia ipsum culpa in ipsum non qui. Nulla incididunt cillum labore proident ea nostrud id nisi laborum culpa dolor mollit. Sit enim id cupidatat in qui cupidatat esse est irure excepteur ea laborum consectetur. Pariatur cupidatat pariatur commodo ex adipisicing excepteur dolore eu eiusmod ut amet. Deserunt nulla proident enim qui."
            },
            {
              "username": "Jeanie",
              "city": "Dragoon",
              "email": "jeanieweaver@soprano.com",
              "content": "Qui voluptate ullamco excepteur anim fugiat deserunt nulla cupidatat aute nulla reprehenderit. Tempor sit non ipsum ex voluptate sint laboris. Nulla officia quis in ut dolor quis sunt dolore fugiat aliquip fugiat ipsum sint. Eu occaecat cupidatat ad ad. Dolor velit do id quis laborum nostrud fugiat."
            }
          ]
        },
        {
          "id": 5,
          "name": "Velos",
          "content": "Sint eiusmod fugiat occaecat dolor cillum cillum pariatur dolore aliqua. Consequat duis culpa officia eu. Veniam aliquip labore deserunt magna amet deserunt enim veniam reprehenderit laborum. Sint ad esse occaecat et non incididunt adipisicing culpa. Non laboris culpa ea adipisicing consequat laboris eiusmod magna id sint adipisicing. Est reprehenderit pariatur dolore et ad ullamco minim do in.",
          "comments": [
            {
              "username": "Mcdonald",
              "city": "Canoochee",
              "email": "mcdonaldweaver@velos.com",
              "content": "Voluptate reprehenderit cillum eiusmod mollit elit. Proident deserunt occaecat sit officia. Amet excepteur consectetur mollit eu nostrud labore exercitation officia mollit nostrud amet anim Lorem. Est proident adipisicing elit veniam eiusmod qui duis aliquip Lorem anim consectetur. Eu laboris Lorem cupidatat eiusmod dolore laboris ex."
            },
            {
              "username": "Rosemary",
              "city": "Lowgap",
              "email": "rosemaryweaver@velos.com",
              "content": "Eu velit in cupidatat ipsum cupidatat mollit dolor aute. Sit nulla eiusmod dolor elit in amet et ut dolor ullamco esse est esse fugiat. Non amet laborum labore officia ex. Voluptate nostrud occaecat enim excepteur deserunt voluptate exercitation dolor occaecat. Ipsum nisi Lorem non voluptate officia ad exercitation do minim."
            }
          ]
        },
        {
          "id": 6,
          "name": "Maineland",
          "content": "Deserunt aute consectetur minim non. Aute deserunt consequat officia ad proident dolor sint nisi aliqua. Amet velit esse sit irure nisi et velit reprehenderit occaecat aute dolor est duis. Occaecat id quis incididunt non proident voluptate esse. Et id incididunt commodo in occaecat eiusmod fugiat do quis id deserunt ea elit. Aute consectetur nisi mollit ut et sunt velit esse magna consectetur et non.",
          "comments": [
            {
              "username": "Hammond",
              "city": "Belleview",
              "email": "hammondweaver@maineland.com",
              "content": "Enim commodo commodo consectetur nulla commodo. Proident cillum enim dolor voluptate. Minim deserunt voluptate culpa qui mollit. Veniam cillum proident adipisicing non voluptate fugiat ea qui Lorem laborum culpa duis. Ullamco exercitation tempor nisi non aute."
            },
            {
              "username": "Erika",
              "city": "Katonah",
              "email": "erikaweaver@maineland.com",
              "content": "Ipsum ad amet mollit ad culpa nisi ea exercitation qui fugiat labore tempor. Officia adipisicing tempor deserunt veniam anim adipisicing cupidatat laboris mollit deserunt Lorem. Duis pariatur proident eiusmod in commodo amet. Culpa Lorem ea quis consequat eu anim deserunt fugiat deserunt mollit. Id laborum incididunt sit pariatur consequat minim nulla duis."
            }
          ]
        }
      ]
    },function(message){
        alert(message);
    })});