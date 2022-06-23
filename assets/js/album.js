const element = document.getElementById('embedded-music');
var data = [
    {
        "artist": ["Freddie Gibbs", "The Alchemist"],
        "album": "Alfredo",
        "url": "https://embed.music.apple.com/us/album/alfredo/1513978902"
    },
    {
        "artist": "Steve Lacy",
        "album": "Apollo XII",
        "url": "https://embed.music.apple.com/us/album/apollo-xxi/1464024764"
    },
    {
        "artist": "Danny Brown",
        "album": "Atrosity Exhibition",
        "url": "https://embed.music.apple.com/us/album/atrocity-exhibition/1142690534"
    },
    {
        "artist": "Childish Gambino",
        "album": "Awaken, My Love!",
        "url": "https://embed.music.apple.com/us/album/awaken-my-love/1450975800"
    },
    {
        "artist": ["Freddie Gibbs", "Madlib"],
        "album": "Bandana",
        "url": "https://embed.music.apple.com/us/album/bandana/1464243671"
    },
    {
        "artist": "Childish Gambino",
        "album": "Because the Internet",
        "url": "https://embed.music.apple.com/us/album/because-the-internet/1451062686"
    },
    {
        "artist": "Vince Staples",
        "album": "Big Fish Theory",
        "url": "https://embed.music.apple.com/us/album/big-fish-theory/1440887126"
    },
    {
        "artist": "The Pharcyde",
        "album": "Bizarre Ride II",
        "url": "https://embed.music.apple.com/us/album/bizarre-ride-ii-the-pharcyde/1440913414"
    },
    {
        "artist": "ScHoolboy Q",
        "album": "Blank Face LP",
        "url": "https://embed.music.apple.com/us/album/blank-face-lp/1440870906"
    },
    {
        "artist": "Frank Ocean",
        "album": "Blonde",
        "url": "https://embed.music.apple.com/us/album/blonde/1146195596"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "CALL ME IF YOU GET LOST",
        "url": "https://embed.music.apple.com/us/album/call-me-if-you-get-lost/1573484415"
    },
    {
        "artist": "Childish Gambino",
        "album": "Camp",
        "url": "https://embed.music.apple.com/us/album/camp/1450829373"
    },
    {
        "artist": "Heatwave",
        "album": "Central Heating",
        "url": "https://embed.music.apple.com/us/album/central-heating/275811293"
    },
    {
        "artist": "Frank Ocean",
        "album": "channel ORANGE",
        "url": "https://embed.music.apple.com/us/album/channel-orange/1440765580"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "Cherry Bomb",
        "url": "https://embed.music.apple.com/us/album/cherry-bomb/983056044"
    },
    {
        "artist": "Kanye West",
        "album": "The College Dropout",
        "url": "https://embed.music.apple.com/us/album/the-college-dropout/1412872568"
    },
    {
        "artist": ["CZARFACE", "MF DOOM"],
        "album": "Czarface Meets Metal Face",
        "url": "https://embed.music.apple.com/us/album/czarface-meets-metal-face/1346325841"
    },
    {
        "artist": "Kendrick Lamar",
        "album": "DAMN",
        "url": "https://embed.music.apple.com/us/album/damn/1440881047"
    },
    {
        "artist": "Baby Keem",
        "album": "DIE FOR MY BITCH",
        "url": "https://embed.music.apple.com/us/album/die-for-my-bitch/1472614374"
    },
    {
        "artist": "Playboi Carti",
        "album": "Die Lit",
        "url": "https://embed.music.apple.com/us/album/die-lit/1381553184"
    },
    {
        "artist": "Kanye West",
        "album": "Donda",
        "url": "https://embed.music.apple.com/us/album/donda-deluxe/1595496182"
    },
    {
        "artist": "Earl Sweatshirt",
        "album": "Doris",
        "url": "https://embed.music.apple.com/us/album/doris/669700847"
    },
    {
        "artist": "Gunna",
        "album": "DRIP SEASON 4EVER",
        "url": "https://embed.music.apple.com/us/album/drip-season-4ever/1604944424"
    },
    {
        "artist": "Thundercat",
        "album": "Drunk",
        "url": "https://embed.music.apple.com/us/album/drunk/1197789099"
    },
    {
        "artist": "Lil Uzi Vert",
        "album": "Eternal Atake",
        "url": "https://embed.music.apple.com/us/album/eternal-atake-deluxe-luv-vs-the-world-2/1502707380"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "Flower Boy",
        "url": "https://embed.music.apple.com/us/album/flower-boy/1254572564"
    },
    {
        "artist": "Westside Gunn",
        "album": "Flygod Is an Awesome God 2",
        "url": "https://embed.music.apple.com/us/album/flygod-is-an-awesome-god-2/1521316232"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "Goblin",
        "url": "https://embed.music.apple.com/us/album/goblin-deluxe-edition/433409557"
    },
    {
        "artist": "Amine",
        "album": "Good For You",
        "url": "https://embed.music.apple.com/us/album/good-for-you/1440884840"
    },
    {
        "artist": "Kendrick Lamar",
        "album": "good kid, m.A.A.d city",
        "url": "https://embed.music.apple.com/us/album/good-kid-m-a-a-d-city-deluxe-version/1440818890"
    },
    {
        "artist": "Kanye West",
        "album": "Graduation",
        "url": "https://embed.music.apple.com/us/album/graduation/1451901307"
    },
    {
        "artist": "Earl Sweatshirt",
        "album": "I Don't Like Shit, I Don't Go Outside",
        "url": "https://embed.music.apple.com/us/album/i-dont-like-shit-i-dont-go-outside-an-album-by-earl-sweatshirt/974796109"
    },
    {
        "artist": "Nigo",
        "album": "I know NIGO!",
        "url": "https://embed.music.apple.com/us/album/i-know-nigo/1614984200"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "IGOR",
        "url": "https://embed.music.apple.com/us/album/igor/1463409338"
    },
    {
        "artist": "Pusha T",
        "album": "It's Almost Dry",
        "url": "https://embed.music.apple.com/us/album/its-almost-dry-pharrell-vs-ye/1620409025"
    },
    {
        "artist": ["KIDS SEE GHOST", "Kanye West", "Kid Cudi"],
        "album": "KIDS SEE GHOST",
        "url": "https://embed.music.apple.com/us/album/kids-see-ghosts/1396710872"
    },
    {
        "artist": "J. Cole",
        "album": "KOD",
        "url": "https://embed.music.apple.com/us/album/kod/1373858456"
    },
    {
        "artist": "Kanye West",
        "album": "Late Registration",
        "url": "https://embed.music.apple.com/us/album/late-registration/1440668749"
    },
    {
        "artist": "Kanye West",
        "album": "The Life of Pablo",
        "url": "https://embed.music.apple.com/us/album/the-life-of-pablo/1443063578"
    },
    {
        "artist": "A$AP Rocky",
        "album": "LONG.LIVE.A$AP",
        "url": "https://embed.music.apple.com/us/album/long-live-a%24ap-deluxe-version/1450690198"
    },
    {
        "artist": "A Tribe Called Quest",
        "album": "The Low End Theory",
        "url": "https://embed.music.apple.com/us/album/the-low-end-theory/278911460"
    },
    {
        "artist": "JPEGMAFIA",
        "album": "LP!",
        "url": "https://embed.music.apple.com/us/album/lp/1590920785"
    },
    {
        "artist": "Lil Uzi Vert",
        "album": "Luv Is Rage",
        "url": "https://embed.music.apple.com/us/album/luv-is-rage/1067479738"
    },
    {
        "artist": "Lil Uzi Vert",
        "album": "Luv Is Rage 2",
        "url": "https://embed.music.apple.com/us/album/luv-is-rage-2-deluxe/1313364174"
    },
    {
        "artist": "Madvillain",
        "album": "Madvillainy",
        "url": "https://embed.music.apple.com/us/album/madvillainy/887699504"
    },
    {
        "artist": "Baby Keem",
        "album": "The Melodic Blue",
        "url": "https://embed.music.apple.com/us/album/the-melodic-blue/1584419112"
    },
    {
        "artist": "Denzel Curry",
        "album": "Melt My Eyes See Your Future",
        "url": "https://embed.music.apple.com/us/album/melt-my-eyez-see-your-future/1613566792"
    },
    {
        "artist": "A Tribe Called Quest",
        "album": "Midnight Marauders",
        "url": "https://embed.music.apple.com/us/album/midnight-marauders/265670545"
    },
    {
        "artist": "MF DOOM",
        "album": "MM..FOOD",
        "url": "https://embed.music.apple.com/us/album/mm-food/1516750770"
    },
    {
        "artist": "Kendrick Lamar",
        "album": "Mr. Morale & The Big Steppers",
        "url": "https://embed.music.apple.com/us/album/mr-morale-the-big-steppers/1623854804"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "Music Inspired by Illumination & Dr. Seuss' The Grinch",
        "url": "https://embed.music.apple.com/us/album/music-inspired-by-illumination-dr-seuss-the-grinch/1441586573"
    },
    {
        "artist": "Kanye West",
        "album": "My Beautiful Dark Twisted Fantasy",
        "url": "https://embed.music.apple.com/us/album/my-beautiful-dark-twisted-fantasy/1440742903"
    },
    {
        "artist": "N.E.R.D",
        "album": "NO ONE EVER REALLY DIES",
        "url": "https://embed.music.apple.com/us/album/no-one-ever-really-dies/1311935265"
    },
    {
        "artist": "Odd Future",
        "album": "The OF Tape, Vol. 2",
        "url": "https://embed.music.apple.com/us/album/the-of-tape-vol-2/506428288"
    },
    {
        "artist": "J. Cole",
        "album": "The Off-Season",
        "url": "https://embed.music.apple.com/us/album/the-off-season/1567421945"
    },
    {
        "artist": "Amine",
        "album": "ONEPOINTFIVE",
        "url": "https://embed.music.apple.com/us/album/onepointfive/1423772324"
    },
    {
        "artist": "Kendrick Lamar",
        "album": "Overly Dedicated",
        "url": "https://embed.music.apple.com/us/album/overly-dedicated/1171563506"
    },
    {
        "artist": "ScHoolboy Q",
        "album": "Oxymoron",
        "url": "https://embed.music.apple.com/us/album/oxymoron-deluxe-version/1440863327"
    },
    {
        "artist": ["Freddie Gibbs", "Madlib"],
        "album": "Piñata",
        "url": "https://embed.music.apple.com/us/album/pi%C3%B1ata/826080165"
    },
    {
        "artist": "Playboi Carti",
        "album": "Playboi Carti",
        "url": "https://embed.music.apple.com/us/album/playboi-carti/1440887343"
    },
    {
        "artist": "Westside Gunn",
        "album": "Pray for Paris",
        "url": "https://embed.music.apple.com/us/album/pray-for-paris/1506521703"
    },
    {
        "artist": "Ol' Dirty Bastard",
        "album": "Return to the 36 Chambers",
        "url": "https://embed.music.apple.com/us/album/return-to-the-36-chambers/332667010"
    },
    {
        "artist": ["Dreamville", "J. Cole"],
        "album": "Revenge of the Dreamers III",
        "url": "https://embed.music.apple.com/us/album/revenge-of-the-dreamers-iii/1471461700"
    },
    {
        "artist": "Travis Scott",
        "album": "Rodeo",
        "url": "https://embed.music.apple.com/us/album/rodeo-expanded-edition/1456176981"
    },
    {
        "artist": "Bee Gees",
        "album": "Saturday Night Fever",
        "url": "https://embed.music.apple.com/us/album/saturday-night-fever-the-original-movie-soundtrack/1442259177"
    },
    {
        "artist": "Earl Sweatshirt",
        "album": "Some Rap Songs",
        "url": "https://embed.music.apple.com/us/album/some-rap-songs/1442399872"
    },
    {
        "artist": ["CZARFACE", "MF DOOM"],
        "album": "Super What?",
        "url": "https://embed.music.apple.com/us/album/super-what/1557743744"
    },
    {
        "artist": "Jaden",
        "album": "SYRE",
        "url": "https://music.apple.com/us/album/syre/1440935800"
    },
    {
        "artist": "Denzel Curry",
        "album": "TA13OO",
        "url": "https://embed.music.apple.com/us/album/ta13oo/1408388537"
    },
    {
        "artist": "A$AP Rocky",
        "album": "TESTING",
        "url": "https://embed.music.apple.com/us/album/testing/1387635013"
    },
    {
        "artist": "Kendrick Lamar",
        "album": "To Pimp a Butterfly",
        "url": "https://embed.music.apple.com/us/album/to-pimp-a-butterfly/1440828886"
    },
    {
        "artist": "Cortex",
        "album": "Troupeau bleu",
        "url": "https://embed.music.apple.com/us/album/troupeau-bleu/1154110761"
    },
    {
        "artist": "JPEGMAFIA",
        "album": "Veteran",
        "url": "https://embed.music.apple.com/us/album/veteran/1429075456"
    },
    {
        "artist": ["JAY-Z", "Kanye West"],
        "album": "Watch the Throne",
        "url": "https://embed.music.apple.com/us/album/watch-the-throne-deluxe/1440845249"
    },
    {
        "artist": "Playboi Carti",
        "album": "Whole Lotta Red",
        "url": "https://embed.music.apple.com/us/album/whole-lotta-red/1546163603"
    },
    {
        "artist": "Tyler, The Creator",
        "album": "Wolf",
        "url": "https://embed.music.apple.com/us/album/wolf/600946351"
    },
    {
        "artist": "Kanye West",
        "album": "ye",
        "url": "https://embed.music.apple.com/us/album/ye/1441456689"
    },
    {
        "artist": "Kanye West",
        "album": "Yeezus",
        "url": "https://embed.music.apple.com/us/album/yeezus/1440873068"
    },
    {
        "artist": "Quasimoto",
        "album": "Yessir, Whatever",
        "url": "https://embed.music.apple.com/us/album/yessir-whatever/646508871"
    },
    {
        "artist": "Childish Gambino",
        "album": "3.15.20",
        "url": "https://embed.music.apple.com/us/album/3-15-20/1503868246"
    },
    {
        "artist": "J. Cole",
        "album": "4 Your Eyes Only",
        "url": "https://embed.music.apple.com/us/album/4-your-eyez-only/1440934458"
    },
    {
        "artist": "Jay-Z",
        "album": "4:44",
        "url": "https://embed.music.apple.com/us/album/4-44/1440935425"
    },
    {
        "artist": "Gravediggaz",
        "album": "6 Feet Deep",
        "url": "https://embed.music.apple.com/us/album/6-feet-deep/305647794"
    },
    {
        "artist": "KAYTRANADA",
        "album": "99.9%",
        "url": "https://embed.music.apple.com/us/album/99-9/1092026376"
    },
    {
        "artist": "Kanye West",
        "album": "808s & Heartbreaks",
        "url": "https://embed.music.apple.com/us/album/808s-heartbreak/1441410287"
    },
    {
        "artist": "Joey Bada$$",
        "album": "1999",
        "url": "https://embed.music.apple.com/us/album/1999/1396290965"
    },
    {
        "artist": "J. Cole",
        "album": "2014 Forest Hills Drive",
        "url": "https://embed.music.apple.com/us/album/2014-forest-hills-drive/1600766204"
    }
]

/*
    {
        "artist": "",
        "album": "",
        "url": ""
    }
*/

function generateAlbum() {
    albumIndex = Math.floor(Math.random() * (data.length + 1))
    element.src = data[albumIndex].url
}