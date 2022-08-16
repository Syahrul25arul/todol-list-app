import React, { useState } from "react";
import Main from "./pages/Main";

function App() {
	const [name, setName] = useState("");

	console.log(name);

	return (
		<div className="App">
			{/* <Main /> */}
			<input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" placeholder="name2" value={name} />
		</div>
	);
}

export default App;
