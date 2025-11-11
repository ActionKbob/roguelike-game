import { Scene, GameObjects, Cameras } from "phaser";

import { addComponent, addEntity, createWorld, type World } from "bitecs";
import { SystemPipeline } from "../game/types";
import { RenderSystem } from "../game/systems";
import { Position, Renderable } from "#game/components";

export class Gameplay extends Scene
{

	private _world! : World;
	private _systems! : SystemPipeline;

	private _camera! : Cameras.Scene2D.Camera;

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
		this._systems = new SystemPipeline();

		this._blitter = this.add.blitter( 0, 0, 'dungeon' );

		this._camera = this.cameras.main;

		// this._camera.zoom = 5;
	}

	create() : void
	{
    // Define systems
		this._systems.add( 'render', RenderSystem( this._world, this.blitter ) );
		
		const eid = addEntity( this._world );
		addComponent( this._world, eid, Position );
		addComponent( this._world, eid, Renderable );

		Position.x[ eid ] = 50;
		Position.y[ eid ] = 50;

		Renderable.frame[ eid ] = ( 12 * 7 ) + 3;
  }

	update( _time : number, _delta : number) : void
	{
		this._systems.run( this._world );
	}
}