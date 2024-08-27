document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector('.thumbnails');

    // Categories and their corresponding image paths
    const stickerImages = [
        { category: 'basketball', paths: [
            'img/basketball/basketball (1).jpg',
            'img/basketball/basketball (2).jpg',
            'img/basketball/basketball (3).jpg',
            'img/basketball/basketball (4).jpg',
            'img/basketball/basketball (5).jpg',
            'img/basketball/basketball (6).jpg'
        ]},
        { category: 'one-piece', paths: [
            'img/one-piece/one-piece (1).jpg',
            'img/one-piece/one-piece (2).jpg',
            'img/one-piece/one-piece (3).jpg',
            'img/one-piece/one-piece (4).jpg',
            'img/one-piece/one-piece (5).jpg',
            'img/one-piece/one-piece (6).jpg',
            'img/one-piece/one-piece (7).jpg',
            'img/one-piece/one-piece (8).jpg',
            'img/one-piece/one-piece (9).jpg',
            'img/one-piece/one-piece (10).jpg',
            'img/one-piece/one-piece (11).jpg',
            'img/one-piece/one-piece (12).jpg',
            'img/one-piece/one-piece (13).jpg',
            'img/one-piece/one-piece (14).jpg',
            'img/one-piece/one-piece (15).jpg',
            'img/one-piece/one-piece (16).jpg',
            'img/one-piece/one-piece (17).jpg',
            'img/one-piece/one-piece (18).jpg',
            'img/one-piece/one-piece (19).jpg',
            'img/one-piece/one-piece (20).jpg'
        ]},
        { category: 'meme', paths: [
            'img/meme/meme (1).jpg',
            'img/meme/meme (2).jpg',
            'img/meme/meme (3).jpg',
            'img/meme/meme (4).jpg',
            'img/meme/meme (5).jpg',
            'img/meme/meme (6).jpg',
            'img/meme/meme (7).jpg',
            'img/meme/meme (8).jpg',
            'img/meme/meme (9).jpg',
            'img/meme/meme (10).jpg',
            'img/meme/meme (11).jpg',
            'img/meme/meme (12).jpg',
            'img/meme/meme (13).jpg',
            'img/meme/meme (14).jpg',
            'img/meme/meme (15).jpg',
            'img/meme/meme (16).jpg',
            'img/meme/meme (17).jpg',
            'img/meme/meme (18).jpg',
            'img/meme/meme (19).jpg',
            'img/meme/meme (20).jpg'
        ]},
        { category: 'arcane', paths: [
            "https://github.com/lewin007/planet_stickers/blob/89579f96eed3e33512af5a51a50a493d26b647ff/img/arcane/arcane%20(1).JPG",
            'img/arcane/arcane (2).jpg'
        ]},
        { category: 'architecture', paths: [
            'img/architecture/architecture (1).jpg',
            'img/architecture/architecture (2).jpg',
            'img/architecture/architecture (3).jpg',
            'img/architecture/architecture (4).jpg',
            'img/architecture/architecture (5).jpg'
        ]},
        { category: 'art', paths: [
            'img/art/art (1).jpg',
            'img/art/art (2).jpg',
            'img/art/art (3).jpg',
            'img/art/art (4).jpg',
            'img/art/art (5).jpg',
            'img/art/art (6).jpg',
            'img/art/art (7).jpg',
            'img/art/art (8).jpg',
            'img/art/art (9).jpg'
        ]},
        { category: 'attackOnTitins', paths: [
            'img/attackOnTitins/attackOnTitins (1).jpg',
            'img/attackOnTitins/attackOnTitins (2).jpg'
        ]},
        { category: 'avatar', paths: [
            'img/avatar/avatar (1).jpg',
            'img/avatar/avatar (2).jpg',
            'img/avatar/avatar (3).jpg'
        ]},
        { category: 'avenger', paths: [
            'img/avenger/avenger (1).jpg',
            'img/avenger/avenger (2).jpg',
            'img/avenger/avenger (3).jpg',
            'img/avenger/avenger (4).jpg',
            'img/avenger/avenger (5).jpg',
            'img/avenger/avenger (6).jpg',
            'img/avenger/avenger (7).jpg',
            'img/avenger/avenger (8).jpg',
            'img/avenger/avenger (9).jpg'
        ]},
        { category: 'batman', paths: [
            'img/batman/batman (1).jpg',
            'img/batman/batman (2).jpg'
        ]},
        { category: 'berserk', paths: [
            'img/berserk/berserk (1).jpg',
            'img/berserk/berserk (2).jpg',
            'img/berserk/berserk (3).jpg',
            'img/berserk/berserk (4).jpg',
            'img/berserk/berserk (5).jpg'
        ]},
        { category: 'blackClover', paths: [
            'img/blackClover/blackClover (1).jpg',
            'img/blackClover/blackClover (2).jpg'
        ]},
        { category: 'bleatch', paths: [
            'img/bleatch/bleatch (1).jpg',
            'img/bleatch/bleatch (2).jpg',
            'img/bleatch/bleatch (3).jpg',
            'img/bleatch/bleatch (4).jpg'
        ]},
        { category: 'box', paths: [
            'img/box/box (1).jpg'
        ]},
        { category: 'fightClub', paths: [
            'img/fightClub/fightClub (1).jpg',
            'img/fightClub/fightClub (2).jpg'
        ]},
        { category: 'breakingBad', paths: [
            'img/breakingBad/breakingBad (1).jpg',
            'img/breakingBad/breakingBad (2).jpg',
            'img/breakingBad/breakingBad (3).jpg'
        ]},
        { category: 'classroomOfElits', paths: [
            'img/classroomOfElits/classroomOfElits (1).jpg',
            'img/classroomOfElits/classroomOfElits (2).jpg'
        ]},
        { category: 'dark', paths: [
            'img/dark/dark (1).jpg'
        ]},
        { category: 'deadpool', paths: [
            'img/deadpool/deadpool (1).jpg',
            'img/deadpool/deadpool (2).jpg',
            'img/deadpool/deadpool (3).jpg',
            'img/deadpool/deadpool (4).jpg'
        ]},
        { category: 'deathnote', paths: [
            'img/deathnote/deathnote (1).jpg',
            'img/deathnote/deathnote (2).jpg',
            'img/deathnote/deathnote (3).jpg'
        ]},
        { category: 'demonSlayer', paths: [
            'img/demonSlayer/demonSlayer (1).jpg',
            'img/demonSlayer/demonSlayer (2).jpg'
        ]},
        { category: 'dragonBall', paths: [
            'img/dragonBall/dragonBall (1).jpg',
            'img/dragonBall/dragonBall (2).jpg'
        ]},
        { category: 'animefilms', paths: [
            'img/animefilms/animefilms (1).JPG',
            'img/animefilms/animefilms (2).jpg'
        ]},
        { category: 'football', paths: [
            'img/football/football (1).jpg',
            'img/football/football (2).jpg',
            'img/football/football (3).jpg',
            'img/football/football (4).jpg',
            'img/football/football (5).jpg',
            'img/football/football (6).jpg',
            'img/football/football (7).jpg',
            'img/football/football (8).jpg',
            'img/football/football (9).jpg',
            'img/football/football (10).jpg'
        ]},
        { category: 'forestGump', paths: [
            'img/forestGump/forestGump (1).jpg'
        ]},
        { category: 'freinds', paths: [
            'img/freinds/freinds (1).jpg',
            'img/freinds/freinds (2).jpg'
        ]},
        { category: 'games', paths: [
            'img/games/games (1).jpg',
            'img/games/games (2).jpg',
            'img/games/games (3).jpg',
            'img/games/games (4).jpg'
        ]},
        { category: 'godFather', paths: [
            'img/godFather/godFather (1).jpg'
        ]},
        { category: 'gta', paths: [
            'img/gta/gta (1).jpg',
            'img/gta/gta (2).jpg',
            'img/gta/gta (3).jpg',
            'img/gta/gta (4).jpg',
            'img/gta/gta (5).jpg'
        ]},
        { category: 'gumbull', paths: [
            'img/gumbull/gumbull (1).jpg',
            'img/gumbull/gumbull (2).jpg'
        ]},
        { category: 'harryPotter', paths: [
            'img/harryPotter/harryPotter (1).jpg',
            'img/harryPotter/harryPotter (2).jpg',
            'img/harryPotter/harryPotter (3).jpg',
            'img/harryPotter/harryPotter (4).jpg',
            'img/harryPotter/harryPotter (5).jpg',
            'img/harryPotter/harryPotter (6).jpg'
        ]},
        { category: 'howIMetYourMother', paths: [
            'img/howIMetYourMother/howIMetYourMother (1).jpg'
        ]},
        { category: 'howToTrainYourDragon', paths: [
            'img/howToTrainYourDragon/howToTrainYourDragon (1).jpg'
        ]},
        { category: 'hxh', paths: [
            'img/hxh/hxh (1).jpg'
        ]},
        { category: 'info', paths: [
            'img/info/info (1).jpg',
            'img/info/info (2).jpg',
            'img/info/info (3).jpg',
            'img/info/info (4).jpg',
            'img/info/info (5).jpg',
            'img/info/info (6).jpg',
            'img/info/info (7).jpg',
            'img/info/info (8).jpg',
            'img/info/info (9).jpg',
            'img/info/info (10).jpg'
        ]},
        { category: 'intersteller', paths: [
            'img/intersteller/intersteller (1).jpg'
        ]},
        { category: 'invincible', paths: [
            'img/invincible/invincible (1).jpg',
            'img/invincible/invincible (2).jpg'
        ]},
        { category: 'jjk', paths: [
            'img/jjk/jjk (1).jpg',
            'img/jjk/jjk (2).jpg',
            'img/jjk/jjk (3).jpg',
            'img/jjk/jjk (4).jpg',
            'img/jjk/jjk (5).jpg',
            'img/jjk/jjk (6).jpg',
            'img/jjk/jjk (7).jpg',
            'img/jjk/jjk (8).jpg',
            'img/jjk/jjk (9).jpg',
            'img/jjk/jjk (10).jpg',
            'img/jjk/jjk (11).jpg',
            'img/jjk/jjk (12).jpg',
            'img/jjk/jjk (13).jpg',
            'img/jjk/jjk (14).jpg',
            'img/jjk/jjk (15).jpg',
            'img/jjk/jjk (16).jpg',
            'img/jjk/jjk (17).jpg',
            'img/jjk/jjk (18).jpg',
            'img/jjk/jjk (19).jpg',
            'img/jjk/jjk (20).jpg',
            'img/jjk/jjk (21).jpg',
            'img/jjk/jjk (22).jpg',
            'img/jjk/jjk (23).jpg',
            'img/jjk/jjk (24).jpg',
            'img/jjk/jjk (25).jpg',
            'img/jjk/jjk (26).jpg',
            'img/jjk/jjk (27).jpg',
            'img/jjk/jjk (28).jpg',
            'img/jjk/jjk (29).jpg',
            'img/jjk/jjk (30).jpg',
            'img/jjk/jjk (31).jpg',
            'img/jjk/jjk (32).jpg',
            'img/jjk/jjk (33).jpg',
            'img/jjk/jjk (34).jpg'
        ]},
        { category: 'jojo', paths: [
            'img/jojo/jojo (1).jpg'
        ]},
        { category: 'joker', paths: [
            'img/joker/joker (1).jpg',
            'img/joker/joker (2).jpg'
        ]},
        { category: 'klem', paths: [
            'img/klem/klem (1).jpg',
            'img/klem/klem (2).jpg',
            'img/klem/klem (3).jpg',
            'img/klem/klem (4).jpg',
            'img/klem/klem (5).jpg',
            'img/klem/klem (6).jpg',
            'img/klem/klem (7).jpg',
            'img/klem/klem (8).jpg',
            'img/klem/klem (9).jpg',
            'img/klem/klem (10).jpg',
            'img/klem/klem (11).jpg',
            'img/klem/klem (12).jpg',
            'img/klem/klem (13).jpg',
            'img/klem/klem (14).jpg',
            'img/klem/klem (15).jpg',
            'img/klem/klem (16).jpg',
            'img/klem/klem (17).jpg',
            'img/klem/klem (18).jpg',
            'img/klem/klem (19).jpg',
            'img/klem/klem (20).jpg',
            'img/klem/klem (21).jpg',
            'img/klem/klem (22).jpg',
            'img/klem/klem (23).jpg',
            'img/klem/klem (24).jpg',
            'img/klem/klem (25).jpg',
            'img/klem/klem (26).jpg',
            'img/klem/klem (27).jpg'
        ]},
        { category: 'kongfuPanda', paths: [
            'img/kongfuPanda/kongfuPanda (1).jpg'
        ]},
        { category: 'lacasadelpaper', paths: [
            'img/lacasadelpaper/lacasadelpaper (1).jpg'
        ]},
        { category: 'lalaland', paths: [
            'img/lalaland/lalaland (1).jpg'
        ]},
        { category: 'love', paths: [
            'img/love/love (1).jpg',
            'img/love/love (2).jpg',
            'img/love/love (3).jpg',
            'img/love/love (4).jpg',
            'img/love/love (5).jpg'
        ]},
        { category: 'loveIsWar', paths: [
            'img/loveIsWar/loveIsWar (1).jpg'
        ]},
        { category: 'matrix', paths: [
            'img/matrix/matrix (1).jpg'
        ]},
        { category: 'miyamora', paths: [
            'img/miyamora/miyamora (1).jpg'
        ]},
        { category: 'monsters', paths: [
            'img/monsters/monsters (1).jpg'
        ]},
        { category: 'moonNight', paths: [
            'img/moonNight/moonNight (1).jpg'
        ]},
        { category: 'mrRobot', paths: [
            'img/mrRobot/mrRobot (1).jpg'
        ]},
        { category: 'mushukutensai', paths: [
            'img/mushukutensai/mushukutensai (1).jpg'
        ]},
        { category: 'myHeroAcademy', paths: [
            'img/myHeroAcademy/myHeroAcademy (1).jpg'
        ]},
        { category: 'naruto', paths: [
            'img/naruto/naruto (1).jpg',
            'img/naruto/naruto (2).jpg',
            'img/naruto/naruto (3).jpg',
            'img/naruto/naruto (4).jpg'
        ]},
        { category: 'nimo', paths: [
            'img/nimo/nimo (1).jpg'
        ]},
        { category: 'nurse', paths: [
            'img/nurse/nurse (1).jpg',
            'img/nurse/nurse (2).jpg',
            'img/nurse/nurse (3).jpg',
            'img/nurse/nurse (4).jpg',
            'img/nurse/nurse (5).jpg',
            'img/nurse/nurse (6).jpg',
            'img/nurse/nurse (7).jpg',
            'img/nurse/nurse (8).jpg',
            'img/nurse/nurse (9).jpg',
            'img/nurse/nurse (10).jpg',
            'img/nurse/nurse (11).jpg'
        ]},
        { category: 'nyc', paths: [
            'img/nyc/nyc (1).jpg',
            'img/nyc/nyc (2).jpg'
        ]},
        { category: 'office', paths: [
            'img/office/office (1).jpg',
            'img/office/office (2).jpg',
            'img/office/office (3).jpg',
            'img/office/office (4).jpg',
            'img/office/office (5).jpg',
            'img/office/office (6).jpg'
        ]},
        { category: 'onePunchMan', paths: [
            'img/onePunchMan/onePunchMan (1).jpg'
        ]},
        { category: 'orange', paths: [
            'img/orange/orange (1).jpg'
        ]},
        { category: 'paris', paths: [
            'img/paris/paris (1).jpg'
        ]},
        { category: 'peakyBlinders', paths: [
            'img/peakyBlinders/peakyBlinders (1).jpg'
        ]},
        { category: 'pikachu', paths: [
            'img/pikachu/pikachu (1).jpg'
        ]},
        { category: 'pokemon', paths: [
            'img/pokemon/pokemon (1).jpg'
        ]},
        { category: 'rickAndMorty', paths: [
            'img/rickAndMorty/rickAndMorty (1).jpg'
        ]},
        { category: 'rom', paths: [
            'img/rom/rom (1).jpg'
        ]},
        { category: 'ronaldo', paths: [
            'img/ronaldo/ronaldo (1).jpg'
        ]},
        { category: 'samurai', paths: [
            'img/samurai/samurai (1).jpg'
        ]},
        { category: 'snk', paths: [
            'img/snk/snk (1).jpg',
            'img/snk/snk (2).jpg',
            'img/snk/snk (3).jpg'
        ]},
        { category: 'space', paths: [
            'img/space/space (1).jpg',
            'img/space/space (2).jpg',
            'img/space/space (3).jpg',
            'img/space/space (4).jpg',
            'img/space/space (5).jpg',
            'img/space/space (6).jpg',
            'img/space/space (7).jpg',
            'img/space/space (8).jpg',
            'img/space/space (9).jpg'
        ]},
        { category: 'spiderMan', paths: [
            'img/spiderMan/spiderMan (1).jpg',
            'img/spiderMan/spiderMan (2).jpg',
            'img/spiderMan/spiderMan (3).jpg',
            'img/spiderMan/spiderMan (4).jpg'
        ]},
        { category: 'spiritedAway', paths: [
            'img/spiritedAway/spiritedAway (1).jpg'
        ]},
        { category: 'startUp', paths: [
            'img/startUp/startUp (1).jpg'
        ]},
        { category: 'starWars', paths: [
            'img/starWars/starWars (1).jpg',
            'img/starWars/starWars (2).jpg',
            'img/starWars/starWars (3).jpg'
        ]},
        { category: 'steven', paths: [
            'img/steven/steven (1).jpg'
        ]},
        { category: 'street', paths: [
            'img/street/street (1).jpg',
            'img/street/street (2).jpg',
            'img/street/street (3).jpg',
            'img/street/street (4).jpg'
        ]},
        { category: 'taylorSwift', paths: [
            'img/taylorSwift/taylorSwift (1).jpg'
        ]},
        { category: 'theSimpsons', paths: [
            'img/theSimpsons/theSimpsons (1).jpg',
            'img/theSimpsons/theSimpsons (2).jpg',
            'img/theSimpsons/theSimpsons (3).jpg'
        ]},
        { category: 'tokyo', paths: [
            'img/tokyo/tokyo (1).jpg',
            'img/tokyo/tokyo (2).jpg'
        ]},
        { category: 'tokyoRevengers', paths: [
            'img/tokyoRevengers/tokyoRevengers (1).jpg',
            'img/tokyoRevengers/tokyoRevengers (2).jpg',
            'img/tokyoRevengers/tokyoRevengers (3).jpg',
            'img/tokyoRevengers/tokyoRevengers (4).jpg',
            'img/tokyoRevengers/tokyoRevengers (5).jpg',
            'img/tokyoRevengers/tokyoRevengers (6).jpg',
            'img/tokyoRevengers/tokyoRevengers (7).jpg',
            'img/tokyoRevengers/tokyoRevengers (8).jpg',
            'img/tokyoRevengers/tokyoRevengers (9).jpg'
        ]},
        { category: 'transformer', paths: [
            'img/transformer/transformer (1).jpg'
        ]},
        { category: 'vinlandSaga', paths: [
            'img/vinlandSaga/vinlandSaga (1).jpg'
        ]},
        { category: 'volleyball', paths: [
            'img/volleyball/volleyball (1).jpg',
            'img/volleyball/volleyball (2).jpg'
        ]},
        { category: 'wallPaper', paths: [
            'img/wallPaper/wallPaper (1).jpg',
            'img/wallPaper/wallPaper (2).jpg',
            'img/wallPaper/wallPaper (3).jpg',
            'img/wallPaper/wallPaper (4).jpg',
            'img/wallPaper/wallPaper (5).jpg',
            'img/wallPaper/wallPaper (6).jpg',
            'img/wallPaper/wallPaper (7).jpg',
            'img/wallPaper/wallPaper (8).jpg',
            'img/wallPaper/wallPaper (9).jpg',
            'img/wallPaper/wallPaper (10).jpg',
            'img/wallPaper/wallPaper (11).jpg'
        ]},
        { category: 'warrior', paths: [
            'img/warrior/warrior (1).jpg'
        ]},
        { category: 'wolfOfWallStreet', paths: [
            'img/wolfOfWallStreet/wolfOfWallStreet (1).jpg'
        ]},
        { category: 'wrestling', paths: [
            'img/wrestling/wrestling (1).jpg',
            'img/wrestling/wrestling (2).jpg',
            'img/wrestling/wrestling (3).jpg',
            'img/wrestling/wrestling (4).jpg'
        ]}
    ];
    

    stickerImages.forEach(sticker => {
        sticker.paths.forEach((path, index) => {
            const img = document.createElement('img');
            img.src = path;
            img.alt = `${sticker.category} Sticker ${index + 1}`;
            img.classList.add('sticker'); // Add class to image

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = `${sticker.category} Sticker ${index + 1}`;
            checkbox.name = `sticker${index + 1}`;
            checkbox.classList.add(sticker.category);  // Add category as class

            const label = document.createElement('label');
            label.textContent = `${sticker.category} Sticker ${index + 1}`;

            const stickerDiv = document.createElement('div');
            stickerDiv.appendChild(img);
            stickerDiv.appendChild(checkbox);
            stickerDiv.appendChild(label);

            thumbnailsContainer.appendChild(stickerDiv);
        });
    });
});

// Filter stickers based on category
function filterStickers() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const stickers = document.querySelectorAll('.thumbnails > div');

    stickers.forEach(sticker => {
        const img = sticker.querySelector('img');
        const checkbox = sticker.querySelector('input[type="checkbox"]');

        if (selectedCategory === 'all' || checkbox.classList.contains(selectedCategory)) {
            sticker.style.display = 'block';
        } else {
            sticker.style.display = 'none';
        }
    });
}

// Unselect all stickers
function unselectAllStickers() {
    const checkboxes = document.querySelectorAll('.thumbnails input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

// Show the scroll-to-top arrow when scrolled down
window.addEventListener('scroll', function() {
    const scrollTopArrow = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollTopArrow.classList.add('show');
    } else {
        scrollTopArrow.classList.remove('show');
    }
});


