function makeImage(src: string, alt: string, title: string) {
    return { src, alt, title };
}

const dinoMeme = makeImage('https://i.pinimg.com/736x/c7/31/fd/c731fd7c073cf6a30f4b3e036f232d14.jpg', 'Dino Meme', 'Dino Meme');
const Triceratops = makeImage('https://i.pinimg.com/736x/f3/0a/51/f30a51245c64e53eb8e323e988c08a4b.jpg', 'Dino Triceratops', 'Dino Triceratops');
const TyrannosaurusRex = makeImage('https://i.pinimg.com/736x/f7/1e/59/f71e59d276576943b8451e1117ef0539.jpg', 'Dino Tyrannosaurus Rex', 'Dino Tyrannosaurus Rex');
const Velociraptor = makeImage('https://i.pinimg.com/736x/3a/17/30/3a173011e4eb5a5d2693b30dc58654f0.jpg', 'Dino Velociraptor', 'Dino Velociraptor');
const Stegosaurus = makeImage('https://i.pinimg.com/736x/74/25/fb/7425fb50fb0b0f0e215471594041986d.jpg', 'Dino Stegosaurus', 'Dino Stegosaurus');

export { dinoMeme, Triceratops, TyrannosaurusRex, Velociraptor, Stegosaurus }