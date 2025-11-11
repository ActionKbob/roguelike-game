import { GameObjects, Scene } from "phaser";
import { observe, onAdd, onRemove, query, type World } from "bitecs";

import { 
	Position,
	Renderable 
} from "#game/components";

export const displayObjectMap : Map<number, GameObjects.Bob | GameObjects.Sprite> = new Map();

export function RenderSystem( _world : World, _blitter : GameObjects.Blitter ) : ( _world : World<{}> ) => {}
{

	displayObjectMap.clear();

	const onEnter : Array<integer> = [];
	const onExit : Array<integer> = [];

	observe( _world, onAdd( Renderable, Position ), ( eid : integer ) => onEnter.push( eid ) );
	observe( _world, onRemove( Renderable, Position ), ( eid : integer ) => onExit.push( eid ) );

	return ( _world : World<{}> ) => {
		
		const entered = onEnter.splice( 0 );
		const exited = onExit.splice( 0 );

		for( const eid of entered )
		{
			if( displayObjectMap.has( eid ) )
				displayObjectMap.delete( eid );

			displayObjectMap.set( eid, _blitter.create( 0, 0, Renderable.frame[ eid ] ) );
		}

		for( const eid of exited )
		{
			if( displayObjectMap.has( eid ) )
				displayObjectMap.delete( eid );

			displayObjectMap.delete( eid );
		}

		for( const eid of query( _world, [ Position, Renderable ] ) )
		{
			if( displayObjectMap.has( eid ) )
			{
				const displayObject = displayObjectMap.get( eid )!;
				displayObject.x = Position.x[eid]!;
				displayObject.y = Position.y[eid]!;
			}
		}

		return _world;

	};
}