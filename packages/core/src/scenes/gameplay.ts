import { Scene, GameObjects } from "phaser";

import { createWorld, IWorld } from "bitecs";

export class Gameplay extends Scene
{

	private _world! : IWorld

	private _blitter! : GameObjects.Blitter;
	get blitter() : GameObjects.Blitter
	{
		return this._blitter;
	}

	constructor()
	{
		super( "Gameplay" );
	}

	init() : void
	{
		console.log("...Gameplay...");

		this._world = createWorld();

		this._blitter = this.add.blitter( 0, 0, 'dungeon' );
	}

	create() : void
	{
    
  }

	update( _time : number, _delta : number) : void
	{
		
	}
}