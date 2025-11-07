import { EditorInterface } from "./components/EditorInterface";
import { MapEditorProvider } from "./context";

function App() {
  return (
		<MapEditorProvider>
			<EditorInterface />
		</MapEditorProvider>
  )
}

export default App;
