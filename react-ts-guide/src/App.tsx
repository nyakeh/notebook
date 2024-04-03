import React from "react";
import Header from "./Header";
import Content from "./components/Content";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Content title="New Project generation" body="The following command will generate files for a simple 'hello world' React project. Including a single UI webpage, stylesheet, and unit test" code="npx create-react-app project-name --template typescript" links={[{ label:"Official docs", url:"https://create-react-app.dev/docs/adding-typescript" }]} />
			<Content title="Second" body="" code="" links={[{ label:"", url:"" }]} />
			<Content title="Third" body="" code="" links={[{ label:"", url:"" }]} />
		</div>
	);
}

export default App;
