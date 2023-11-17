import { Application, Sprite } from 'pixi.js'

const centerToStage = (sprite: Sprite, app: Application) => {
	sprite.x = app.screen.width / 2;
	sprite.y = app.screen.height / 2;
}

export default centerToStage;