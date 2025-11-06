import { Types, defineComponent } from "bitecs";
import { Vector2D } from "@repo/core/src/game/types";

export const Position = defineComponent( Vector2D );

export const Renderable = defineComponent( {
	texture : Types.ui8,
	frame : Types.ui8
} );

export const Tile = defineComponent( {
	type : Types.ui8,
	walkable : Types.ui8
} );

export const Map = defineComponent( {
	id : Types.ui16,
	width : Types.ui16,
	height : Types.ui16
} );