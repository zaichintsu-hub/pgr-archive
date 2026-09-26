const bgImages = [
    'bg/Qu Pavo.jpg',
    'bg/Haicma Starveil.jpg',
    'bg/Camu 2.png',
    'bg/Pulao.jpg',
    'bg/Selena Tempest.png',
    'bg/Roland Flamebeau.jpg',
    'bg/Qu.jpg',
    'bg/The ark beyond.jpg',
    'bg/Noan Arca.jpg',
    'bg/Echo_Aria_story_banner.png',
    'bg/Haicma.png',
    'bg/Pulao Dragontoll.jpg'
];

const layers = document.querySelectorAll('.background-layer');
let currentBgIndex = 0;
let activeLayer = 0;

function setBackground(layer, image) {
    layer.style.backgroundImage =
        `linear-gradient(rgba(11, 12, 16, 0.35), rgba(11, 12, 16, 0.35)), url("${image}")`;
}

setBackground(layers[0], bgImages[0]);
layers[0].classList.add('active');

setInterval(() => {
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
    const nextLayer = activeLayer === 0 ? 1 : 0;
    setBackground(layers[nextLayer], bgImages[currentBgIndex]);
    layers[nextLayer].classList.add('active');
    layers[activeLayer].classList.remove('active');
    activeLayer = nextLayer;
}, 10000);

