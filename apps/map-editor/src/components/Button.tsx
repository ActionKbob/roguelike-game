export const Button = ( { children, className } : any & HTMLButtonElement ) => {
	return (
		<button className={`${ className } flex items-center gap-2 bg-sky-950 hover:bg-sky-800 border-sky-700 hover:border-sky-950 border-2 px-3 py-2 rounded-lg active:bg-sky-600 drop-shadow-slate-950 cursor-pointer`}>
			{ children }
		</button>
	)
}