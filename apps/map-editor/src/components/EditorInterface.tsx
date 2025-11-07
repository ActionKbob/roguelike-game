import { Button } from "./Button";

export const EditorInterface = () => {
	return (
		<div className="flex flex-col w-screen h-screen">
			<div className="flex justify-between bg-slate-900 px-8 py-6 text-white drop-shadow-2xl/25 z-10">
				<div>
					<p className="text-3xl font-bold">Map Name here</p>
				</div>
				<div className="flex items-center gap-4">
					<Button>
						<span className="material-symbols-outlined">
							save
						</span>
						
						<p className="font-bold">Save</p>
					</Button>

					<Button>
						<span className="material-symbols-outlined">
							folder_open
						</span>
						
						<p className="font-bold">Load</p>
					</Button>

					<Button>
						<span className="material-symbols-outlined">
							delete
						</span>
						
						<p className="font-bold">Clear</p>
					</Button>
				</div>
			</div>
			<div className="flex grow">
				<div className="grow bg-slate-500">editor</div>
				<div className="basis-[350px] h-full bg-slate-800 drop-shadow-2xl/50">
					side bar
				</div>
			</div>
		</div>
	);
}