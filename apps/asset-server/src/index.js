import express from "express";
import cors from 'cors';
import sharp from 'sharp';

import path from 'path';
import fs from 'fs/promises';
import { error } from "console";

const PORT = process.env.PORT || 6969;
const ASSETS_DIR = path.join( process.cwd(), 'src/assets' );

const app = express();

app.use( cors({
  origin: ['http://localhost:3001', 'http://localhost:5173'],
  credentials: true,
}) );

app.use( '/images', express.static( 'public/images' ) )

app.get( '/api/images/:filename', async ( request, response ) => {

	const { type, filename } = request.params;

	try
	{
		const { width, height, format } = request.query;

		const filePath = path.join( ASSETS_DIR, 'images', filename );
		
		try
		{
			await fs.access( filePath )
		}
		catch
		{
			return response.status( 404 ).json( { error : `Image not found` } );
		}

		return response.sendFile( filePath );

		//TODO : Sharp image processing
	}
	catch( error )
	{
		response.status( 500 ).json( { error : `Failed to process image` } );
	}

} );

app.get('/', (req, res) => {
  res.send('Welcome to the image server! Access images at /images/your-image-name.jpg');
});

app.listen( PORT, () => {
	console.log( `Asset Server running on port ${PORT}` );
} )