import { Scene } from "phaser";

export class Preloader extends Scene
{
	constructor()
	{
		super( "Preload" );
	}

	preload()
	{
		console.log("...Preloading...");

		this.load.spritesheet(
      'dungeon', 'http://localhost:6969/api/images/tilemap_packed.png',
      {
        frameWidth : 16,
        frameHeight : 16
      }
    );
	}

	create()
	{
		this.scene.start( 'Gameplay' );
	}
}