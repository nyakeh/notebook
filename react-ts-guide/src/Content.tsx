import React from "react";
import "./App.css";

function Content() {
	return (
		<div className="App-content">
			<h2>New Project generation</h2>
			<p>The following command will generate files for a simple 'hello world' React project. Including a single UI webpage, stylesheet, and unit test</p>
			<code>npx create-react-app project-name --template typescript</code>
			<p>Official docs: <a href="https://create-react-app.dev/docs/adding-typescript" className="App-link">create-react-app.dev</a></p>
		</div>
	);
}

export default Content;
