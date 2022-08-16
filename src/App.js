import React, { useState } from "react";
import Main from "./pages/Main";

function App() {
	const [name, setName] = useState("");

	console.log(name);

	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;
