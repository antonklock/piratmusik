import { Sprite } from 'pixi.js'

const centerAnchor = (sprite: Sprite) => {
	sprite.anchor.set(0.5);
};

export default centerAnchor;