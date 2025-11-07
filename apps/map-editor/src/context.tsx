import { createContext, useContext } from 'react';

export const MapEditorContext = createContext< Object | null >( null );

export const MapEditorProvider = ( { children } : any ) => {

	

	return (
		<MapEditorContext.Provider value={ {} }>
			{children}
		</MapEditorContext.Provider>
	);
}

export const useMapEditor = () => useContext( MapEditorContext );