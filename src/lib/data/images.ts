function makeImage(src: string, alt: string, title: string) {
    return { src, alt, title };
}

const dinoMeme = makeImage('https://i.pinimg.com/736x/c7/31/fd/c731fd7c073cf6a30f4b3e036f232d14.jpg', 'Dino Meme', 'Dino Meme');
const Triceratops = makeImage('https://i.pinimg.com/736x/f3/0a/51/f30a51245c64e53eb8e323e988c08a4b.jpg', 'Dino Triceratops', 'Dino Triceratops');
const TyrannosaurusRex = makeImage('https://i.pinimg.com/736x/f7/1e/59/f71e59d276576943b8451e1117ef0539.jpg', 'Dino Tyrannosaurus Rex', 'Dino Tyrannosaurus Rex');
const Velociraptor = makeImage('https://i.pinimg.com/736x/3a/17/30/3a173011e4eb5a5d2693b30dc58654f0.jpg', 'Dino Velociraptor', 'Dino Velociraptor');
const Stegosaurus = makeImage('https://i.pinimg.com/736x/74/25/fb/7425fb50fb0b0f0e215471594041986d.jpg', 'Dino Stegosaurus', 'Dino Stegosaurus');
const Shizuka = makeImage('https://awesomepng.com/thumbnail/broccoli/1-green-broccoli-png-image-thumb.png', 'Dino Shizuka', 'Dino Shizuka');
const Suneo = makeImage('https://awesomepng.com/thumbnail/cartoon/92422--free-clipart-hd-thumb.png', 'Suneo', 'Suneo');
const Nobita = makeImage('https://awesomepng.com/thumbnail/artwork/93004-shizuka-nobi-yellow-minamoto-sewashi-facial-expression-thumb.png', 'Nobita', 'Nobita');
const Doraemon = makeImage('https://awesomepng.com/thumbnail/nose/90613-art-human-nobi-doraemon-behavior-dorami-nobita-thumb.png', 'Doraemon', 'Doraemon');
const Giant = makeImage('https://awesomepng.com/thumbnail/doraemon/71299-nobi-youtube-nobita-television-doraemon-free-photo-png-thumb.png', 'Giant', 'Giant');

export { dinoMeme, Triceratops, TyrannosaurusRex, Velociraptor, Stegosaurus, Shizuka, Suneo, Nobita, Doraemon, Giant }