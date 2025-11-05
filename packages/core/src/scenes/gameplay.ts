import { Scene, GameObjects } from "phaser";

import { IWorld } from "bitecs";

export class Gameplay extends Scene
{

	private _blitter! : GameObjects.Blitter;
	get blitter() : GameObjects.Blitter
	{
		return this._blitter;
	}

	constructor()
	{
		super( "Gameplay" );
	}

	preload()
	{
		console.log("...Gameplay...");
		this._blitter = this.add.blitter( 0, 0, 'dungeon' );
	}

	create() {
    this._blitter.create( 0, 0, ( 12 * 7 + 2 ) );
  }
}