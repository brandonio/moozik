const fetchTopAlbums = (function () {
  const ALBUMS_DATA = {
    feed: {
      author: {
        name: {
          label: "iTunes Store",
        },
        uri: {
          label: "http://www.apple.com/itunes/",
        },
      },
      entry: [
        {
          "im:name": {
            label: "Descendants 3 (Original TV Movie Soundtrack)",
          },
          "im:image": [
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/26/8b/7f/268b7f91-f8b1-deff-0bac-cf77834f5f01/19UMGIM47919.rgb.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/26/8b/7f/268b7f91-f8b1-deff-0bac-cf77834f5f01/19UMGIM47919.rgb.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/26/8b/7f/268b7f91-f8b1-deff-0bac-cf77834f5f01/19UMGIM47919.rgb.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "13",
          },
          "im:price": {
            label: "$7.99",
            attributes: {
              amount: "7.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "℗ 2019 Walt Disney Records",
          },
          title: {
            label:
              "Descendants 3 (Original TV Movie Soundtrack) - Various Artists",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/descendants-3-original-tv-movie-soundtrack/1465832864?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/descendants-3-original-tv-movie-soundtrack/1465832864?uo=2",
            attributes: {
              "im:id": "1465832864",
            },
          },
          "im:artist": {
            label: "Various Artists",
          },
          category: {
            attributes: {
              "im:id": "16",
              term: "Soundtrack",
              scheme:
                "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
              label: "Soundtrack",
            },
          },
          "im:releaseDate": {
            label: "2019-08-02T00:00:00-07:00",
            attributes: {
              label: "August 2, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "Atonement",
          },
          "im:image": [
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/d4/bb/68/d4bb6807-6f1a-0bec-4555-f7a5d94aa185/Killswitch_Engage_-_Atonement.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d4/bb/68/d4bb6807-6f1a-0bec-4555-f7a5d94aa185/Killswitch_Engage_-_Atonement.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/d4/bb/68/d4bb6807-6f1a-0bec-4555-f7a5d94aa185/Killswitch_Engage_-_Atonement.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "11",
          },
          "im:price": {
            label: "$9.99",
            attributes: {
              amount: "9.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "℗ 2019 Metal Blade Records",
          },
          title: {
            label: "Atonement - Killswitch Engage",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/atonement/1466701470?uo=2",
            },
          },
          id: {
            label: "https://music.apple.com/us/album/atonement/1466701470?uo=2",
            attributes: {
              "im:id": "1466701470",
            },
          },
          "im:artist": {
            label: "Killswitch Engage",
            attributes: {
              href:
                "https://music.apple.com/us/artist/killswitch-engage/14268438?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "1153",
              term: "Heavy Metal",
              scheme:
                "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
              label: "Metal",
            },
          },
          "im:releaseDate": {
            label: "2019-08-16T00:00:00-07:00",
            attributes: {
              label: "August 16, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
          },
          "im:image": [
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/a7/31/24/a731244c-e065-2f44-63a2-d15b6b27fefa/00602577427657.rgb.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "14",
          },
          "im:price": {
            label: "$9.99",
            attributes: {
              amount: "9.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "℗ 2019 Darkroom/Interscope Records",
          },
          title: {
            label: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? - Billie Eilish",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/when-we-all-fall-asleep-where-do-we-go/1450695723?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/when-we-all-fall-asleep-where-do-we-go/1450695723?uo=2",
            attributes: {
              "im:id": "1450695723",
            },
          },
          "im:artist": {
            label: "Billie Eilish",
            attributes: {
              href:
                "https://music.apple.com/us/artist/billie-eilish/1065981054?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "20",
              term: "Alternative",
              scheme:
                "https://music.apple.com/us/genre/music-alternative/id20?uo=2",
              label: "Alternative",
            },
          },
          "im:releaseDate": {
            label: "2019-03-29T00:00:00-07:00",
            attributes: {
              label: "March 29, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "Look Up Child",
          },
          "im:image": [
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "13",
          },
          "im:price": {
            label: "$7.99",
            attributes: {
              amount: "7.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2018 Centricity Music, exclusively Marketed & Distributed by 12Tone Music, LLC. All rights reserved.",
          },
          title: {
            label: "Look Up Child - Lauren Daigle",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/look-up-child/1447184494?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/look-up-child/1447184494?uo=2",
            attributes: {
              "im:id": "1447184494",
            },
          },
          "im:artist": {
            label: "Lauren Daigle",
            attributes: {
              href:
                "https://music.apple.com/us/artist/lauren-daigle/722177758?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "22",
              term: "Christian & Gospel",
              scheme:
                "https://music.apple.com/us/genre/music-christian-gospel/id22?uo=2",
              label: "Christian & Gospel",
            },
          },
          "im:releaseDate": {
            label: "2018-09-07T00:00:00-07:00",
            attributes: {
              label: "September 7, 2018",
            },
          },
        },
        {
          "im:name": {
            label: "NOW That's What I Call Music, Vol. 71",
          },
          "im:image": [
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/2a/7d/2c/2a7d2c8b-9df7-b145-80df-f26172db3078/886447824429.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/2a/7d/2c/2a7d2c8b-9df7-b145-80df-f26172db3078/886447824429.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/2a/7d/2c/2a7d2c8b-9df7-b145-80df-f26172db3078/886447824429.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "20",
          },
          "im:price": {
            label: "$7.99",
            attributes: {
              amount: "7.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "℗ 2019 UMG Recordings, Inc. and Sony Music Entertainment",
          },
          title: {
            label: "NOW That's What I Call Music, Vol. 71 - Various Artists",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/now-thats-what-i-call-music-vol-71/1472053532?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/now-thats-what-i-call-music-vol-71/1472053532?uo=2",
            attributes: {
              "im:id": "1472053532",
            },
          },
          "im:artist": {
            label: "Various Artists",
          },
          category: {
            attributes: {
              "im:id": "14",
              term: "Pop",
              scheme: "https://music.apple.com/us/genre/music-pop/id14?uo=2",
              label: "Pop",
            },
          },
          "im:releaseDate": {
            label: "2019-08-02T00:00:00-07:00",
            attributes: {
              label: "August 2, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "The Search",
          },
          "im:image": [
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/bb/ef/fb/bbeffb1f-55fa-0a14-ae30-672f804c4d7f/19UMGIM46307.rgb.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/bb/ef/fb/bbeffb1f-55fa-0a14-ae30-672f804c4d7f/19UMGIM46307.rgb.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/bb/ef/fb/bbeffb1f-55fa-0a14-ae30-672f804c4d7f/19UMGIM46307.rgb.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "20",
          },
          "im:price": {
            label: "$10.99",
            attributes: {
              amount: "10.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "℗ 2019 NF Real Music, LLC",
          },
          title: {
            label: "The Search - NF",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/the-search/1470132470?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/the-search/1470132470?uo=2",
            attributes: {
              "im:id": "1470132470",
            },
          },
          "im:artist": {
            label: "NF",
            attributes: {
              href: "https://music.apple.com/us/artist/nf/898094630?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "18",
              term: "Hip Hop/Rap",
              scheme:
                "https://music.apple.com/us/genre/music-hip-hop-rap/id18?uo=2",
              label: "Hip-Hop/Rap",
            },
          },
          "im:releaseDate": {
            label: "2019-07-26T00:00:00-07:00",
            attributes: {
              label: "July 26, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "Country Squire",
          },
          "im:image": [
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/da/b8/04/dab804d9-4e04-68cb-bfbd-c65afa6c3e36/886447696750.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/da/b8/04/dab804d9-4e04-68cb-bfbd-c65afa6c3e36/886447696750.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/da/b8/04/dab804d9-4e04-68cb-bfbd-c65afa6c3e36/886447696750.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "9",
          },
          "im:price": {
            label: "$7.99",
            attributes: {
              amount: "7.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2019 Hickman Holler Records, under exclusive license to RCA Records, a division of Sony Music Entertainment.",
          },
          title: {
            label: "Country Squire - Tyler Childers",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/country-squire/1462929670?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/country-squire/1462929670?uo=2",
            attributes: {
              "im:id": "1462929670",
            },
          },
          "im:artist": {
            label: "Tyler Childers",
            attributes: {
              href:
                "https://music.apple.com/us/artist/tyler-childers/473667472?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "6",
              term: "Country",
              scheme: "https://music.apple.com/us/genre/music-country/id6?uo=2",
              label: "Country",
            },
          },
          "im:releaseDate": {
            label: "2019-08-02T00:00:00-07:00",
            attributes: {
              label: "August 2, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "Lateralus",
          },
          "im:image": [
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/fb/99/8c/fb998c1e-1a11-2434-0fa7-0d90beba5d2b/886447824764.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/fb/99/8c/fb998c1e-1a11-2434-0fa7-0d90beba5d2b/886447824764.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/fb/99/8c/fb998c1e-1a11-2434-0fa7-0d90beba5d2b/886447824764.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "13",
          },
          "im:price": {
            label: "$11.99",
            attributes: {
              amount: "11.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2001 Tool Dissectional, L.L.C./Volcano Entertainment II, L.L.C..",
          },
          title: {
            label: "Lateralus - TOOL",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/lateralus/1474185412?uo=2",
            },
          },
          id: {
            label: "https://music.apple.com/us/album/lateralus/1474185412?uo=2",
            attributes: {
              "im:id": "1474185412",
            },
          },
          "im:artist": {
            label: "TOOL",
            attributes: {
              href: "https://music.apple.com/us/artist/tool/140870416?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "1153",
              term: "Heavy Metal",
              scheme:
                "https://music.apple.com/us/genre/music-rock-metal/id1153?uo=2",
              label: "Metal",
            },
          },
          "im:releaseDate": {
            label: "2001-05-15T00:00:00-07:00",
            attributes: {
              label: "May 15, 2001",
            },
          },
        },
        {
          "im:name": {
            label: "Greatest Hits",
          },
          "im:image": [
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "17",
          },
          "im:price": {
            label: "$10.99",
            attributes: {
              amount: "10.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "This Compilation ℗ 2014 Hollywood Records, Inc.",
          },
          title: {
            label: "Greatest Hits - Queen",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/greatest-hits/1422650667?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/greatest-hits/1422650667?uo=2",
            attributes: {
              "im:id": "1422650667",
            },
          },
          "im:artist": {
            label: "Queen",
            attributes: {
              href: "https://music.apple.com/us/artist/queen/3296287?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "21",
              term: "Rock",
              scheme: "https://music.apple.com/us/genre/music-rock/id21?uo=2",
              label: "Rock",
            },
          },
          "im:releaseDate": {
            label: "1981-10-26T00:00:00-07:00",
            attributes: {
              label: "October 26, 1981",
            },
          },
        },
        {
          "im:name": {
            label: "The Greatest Showman (Original Motion Picture Soundtrack)",
          },
          "im:image": [
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "11",
          },
          "im:price": {
            label: "$9.99",
            attributes: {
              amount: "9.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2017 This compilation Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. Motion Picture Artwork, Photos, and Fox Trademarks and Logos TM and © 2017 Twentieth Century Fox Film Corporation.",
          },
          title: {
            label:
              "The Greatest Showman (Original Motion Picture Soundtrack) - Various Artists",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2",
            attributes: {
              "im:id": "1299856714",
            },
          },
          "im:artist": {
            label: "Various Artists",
          },
          category: {
            attributes: {
              "im:id": "16",
              term: "Soundtrack",
              scheme:
                "https://music.apple.com/us/genre/music-soundtrack/id16?uo=2",
              label: "Soundtrack",
            },
          },
          "im:releaseDate": {
            label: "2017-12-08T00:00:00-07:00",
            attributes: {
              label: "December 8, 2017",
            },
          },
        },
        {
          "im:name": {
            label: "Victorious",
          },
          "im:image": [
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/f8/45/8c/f8458c86-af38-ed87-09af-413215bb0c18/075679849601.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/f8/45/8c/f8458c86-af38-ed87-09af-413215bb0c18/075679849601.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/f8/45/8c/f8458c86-af38-ed87-09af-413215bb0c18/075679849601.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "12",
          },
          "im:price": {
            label: "$9.99",
            attributes: {
              amount: "9.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2019 Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. A Warner Music Group Company",
          },
          title: {
            label: "Victorious - Skillet",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/victorious/1462648219?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/victorious/1462648219?uo=2",
            attributes: {
              "im:id": "1462648219",
            },
          },
          "im:artist": {
            label: "Skillet",
            attributes: {
              href: "https://music.apple.com/us/artist/skillet/1750802?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "1152",
              term: "Hard Rock",
              scheme:
                "https://music.apple.com/us/genre/music-rock-hard-rock/id1152?uo=2",
              label: "Hard Rock",
            },
          },
          "im:releaseDate": {
            label: "2019-08-02T00:00:00-07:00",
            attributes: {
              label: "August 2, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "Happiness Begins",
          },
          "im:image": [
            {
              label:
                "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/fa/c2/d5/fac2d55b-d2ba-03ab-855b-fb9722419c88/19UMGIM38391.rgb.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/fa/c2/d5/fac2d55b-d2ba-03ab-855b-fb9722419c88/19UMGIM38391.rgb.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/fa/c2/d5/fac2d55b-d2ba-03ab-855b-fb9722419c88/19UMGIM38391.rgb.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "14",
          },
          "im:price": {
            label: "$10.99",
            attributes: {
              amount: "10.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2019 Jonas Brothers Recording, Limited Liability Company, under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
          },
          title: {
            label: "Happiness Begins - Jonas Brothers",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/happiness-begins/1461478261?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/happiness-begins/1461478261?uo=2",
            attributes: {
              "im:id": "1461478261",
            },
          },
          "im:artist": {
            label: "Jonas Brothers",
            attributes: {
              href:
                "https://music.apple.com/us/artist/jonas-brothers/114342891?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "14",
              term: "Pop",
              scheme: "https://music.apple.com/us/genre/music-pop/id14?uo=2",
              label: "Pop",
            },
          },
          "im:releaseDate": {
            label: "2019-06-07T00:00:00-07:00",
            attributes: {
              label: "June 7, 2019",
            },
          },
        },
        {
          "im:name": {
            label: "The Platinum Collection (Greatest Hits I, II & III)",
          },
          "im:image": [
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9e/65/ef/9e65ef3a-4c0c-ed55-6161-4d2946a9235e/00050087319090.rgb.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/9e/65/ef/9e65ef3a-4c0c-ed55-6161-4d2946a9235e/00050087319090.rgb.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9e/65/ef/9e65ef3a-4c0c-ed55-6161-4d2946a9235e/00050087319090.rgb.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "51",
          },
          "im:price": {
            label: "$24.99",
            attributes: {
              amount: "24.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label: "℗ 2014 Hollywood Records, Inc.",
          },
          title: {
            label:
              "The Platinum Collection (Greatest Hits I, II & III) - Queen",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href:
                "https://music.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/1440650428?uo=2",
            },
          },
          id: {
            label:
              "https://music.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/1440650428?uo=2",
            attributes: {
              "im:id": "1440650428",
            },
          },
          "im:artist": {
            label: "Queen",
            attributes: {
              href: "https://music.apple.com/us/artist/queen/3296287?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "21",
              term: "Rock",
              scheme: "https://music.apple.com/us/genre/music-rock/id21?uo=2",
              label: "Rock",
            },
          },
          "im:releaseDate": {
            label: "2000-11-13T00:00:00-07:00",
            attributes: {
              label: "November 13, 2000",
            },
          },
        },
        {
          "im:name": {
            label: "Dragons",
          },
          "im:image": [
            {
              label:
                "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/37/27/75/37277523-da00-cb72-71a4-9940e6e8109a/193483809687.jpg/55x55bb.png",
              attributes: {
                height: "55",
              },
            },
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/37/27/75/37277523-da00-cb72-71a4-9940e6e8109a/193483809687.jpg/60x60bb.png",
              attributes: {
                height: "60",
              },
            },
            {
              label:
                "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/37/27/75/37277523-da00-cb72-71a4-9940e6e8109a/193483809687.jpg/170x170bb.png",
              attributes: {
                height: "170",
              },
            },
          ],
          "im:itemCount": {
            label: "10",
          },
          "im:price": {
            label: "$7.99",
            attributes: {
              amount: "7.99000",
              currency: "USD",
            },
          },
          "im:contentType": {
            "im:contentType": {
              attributes: {
                term: "Album",
                label: "Album",
              },
            },
            attributes: {
              term: "Music",
              label: "Music",
            },
          },
          rights: {
            label:
              "℗ 2019 Magnolia Music marketed and distributed by Thirty Tigers",
          },
          title: {
            label: "Dragons - Drew Holcomb & The Neighbors",
          },
          link: {
            attributes: {
              rel: "alternate",
              type: "text/html",
              href: "https://music.apple.com/us/album/dragons/1462670945?uo=2",
            },
          },
          id: {
            label: "https://music.apple.com/us/album/dragons/1462670945?uo=2",
            attributes: {
              "im:id": "1462670945",
            },
          },
          "im:artist": {
            label: "Drew Holcomb & The Neighbors",
            attributes: {
              href:
                "https://music.apple.com/us/artist/drew-holcomb-the-neighbors/285801696?uo=2",
            },
          },
          category: {
            attributes: {
              "im:id": "10",
              term: "Singer/Songwriter",
              scheme:
                "https://music.apple.com/us/genre/music-singer-songwriter/id10?uo=2",
              label: "Singer/Songwriter",
            },
          },
          "im:releaseDate": {
            label: "2019-08-16T00:00:00-07:00",
            attributes: {
              label: "August 16, 2019",
            },
          },
        },
      ],
    },
  };

  return function fetchTopAlbums() {
    // simulate an ajax request
    return new Promise((resolve, reject) => {
      window.setTimeout(() => resolve(ALBUMS_DATA), 1000);
    });
  };
})();

export default fetchTopAlbums;
