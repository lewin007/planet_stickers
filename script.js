document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector('.thumbnails');

    // Categories and their corresponding image paths
    const stickerImages = [
       { category: 'arcane', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/arcane/arcane%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/arcane/arcane%20(2).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/arcane/arcane%20(3).JPG'
    ]},
    { category: 'attackOnTitan', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/attackOnTitan/attackOnTitan%20(1).JPG'
    ]},
    { category: 'avatar', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/avatar/avatar%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/avatar/avatar%20(2).JPG'
    ]},
    { category: 'avengers', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/avengers/avengers%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/avengers/avengers%20(2).JPG'
    ]},
    { category: 'batman', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/batman/batman%20(1).JPG'
    ]},
    { category: 'blackPanther', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/blackPanther/blackPanther%20(1).JPG'
    ]},
    { category: 'brooklyn99', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/brooklyn99/brooklyn99%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/brooklyn99/brooklyn99%20(2).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/brooklyn99/brooklyn99%20(3).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/brooklyn99/brooklyn99%20(4).JPG'
    ]},
    { category: 'deathNote', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/deathNote/deathNote%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/deathNote/deathNote%20(2).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/deathNote/deathNote%20(3).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/deathNote/deathNote%20(4).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/deathNote/deathNote%20(5).JPG'
    ]},
    { category: 'demonSlayer', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/demonSlayer/demonSlayer%20(1).JPG'
    ]},
    { category: 'drStrange', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/drStrange/drStrange%20(1).JPG'
    ]},
    { category: 'friends', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/friends/friends%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/friends/friends%20(2).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/friends/friends%20(3).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/friends/friends%20(4).JPG'
    ]},
    { category: 'games', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/games/games%20(1).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/games/games%20(2).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/games/games%20(3).JPG',
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/games/games%20(4).JPG'
    ]},
    { category: 'godFather', paths: [
        'https://github.com/lewin007/planet_stickers/blob/29d46723e48c39bddb18c0c262fd8336f718aee4/img/godFather/godFather%20(1).JPG'
    ]},
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


