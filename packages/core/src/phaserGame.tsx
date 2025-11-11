'use client'

import { type Game } from "phaser";
import { useEffect, useRef } from "react"

export const PhaserGame = () => {

	const containerRef = useRef<HTMLDivElement>( null );

	const gameRef = useRef<Game | null>( null );

	useEffect( () => {

		const initGame = async () => {
			const Phaser = await import('phaser');
			const Scenes = await import('./scenes');
	
			if( containerRef.current && !gameRef.current )
			{
				gameRef.current = new Phaser.Game( {
					type : Phaser.AUTO,
					parent : containerRef.current,
					backgroundColor : "#1a5c85",
					scale : {
						mode : Phaser.Scale.ScaleModes.ENVELOP,
						width  : window.innerWidth / 3,
						height : window.innerHeight / 3
					},
					pixelArt : true,
					antialias : false,
					scene : [
						Scenes.Preloader,
						Scenes.Gameplay
					],
					fps : {
						limit : 144
					}
				} )
			}
		}

		initGame();
		
	}, [] )

	return (
		<div id="phaser-game" ref={ containerRef }></div>
	)
}