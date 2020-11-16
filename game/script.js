function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
    this.image.onload = () => this.ready = true;
    if (imageUrl) {
        this.image.src = imageUrl;
    }
}

const background = new GameObject('images/background.png');

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
ctx.drawImage(background.image, 0, 0);

setTimeout(() => ctx.drawImage(background.image, 0, 0), 1500);

const hero = new GameObject('images/hero.png');

ctx.drawImage(hero.image, 90, 150);

const monster = new GameObject('images/monster.png');
ctx.drawImage(monster.image, 130, 250);
