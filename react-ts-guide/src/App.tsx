import Header from "./Header";
import Content from "./components/Content";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Content
				title="New project generation"
				body="create-react-app is a command-line tool provided by the React team to bootstrap a new React project with minimal setup. It automates the process of setting up a modern React application, allowing developers to focus on writing code rather than configuring build tools and dependencies. The following command will generate files for a simple 'hello world' React project. Including a single UI webpage, stylesheet, and unit test."
				codeSnippets={["npx create-react-app project-name --template typescript"]}
				links={[{ label: "Create React App docs", url: "https://create-react-app.dev/docs/adding-typescript" }]}
			/>
			<Content
				title="Testing"
				body="You can write unit tests using the Jest NPM library. Jest is a popular JavaScript testing framework that's commonly used for testing React applications. Using the beforeAll syntax 'beforeAll(() => {});' as a shared test setup function."
				codeSnippets={["describe('Given a unit test method', () => {","it('when in a test case', () => { const result = plus(4, 3); expect(result).toEqual(7); });","it('when a second case', () => { const result = plus(12, 4); expect(result).toEqual(16); });","});"]}
				links={[{ label: "Jest docs", url: "https://jestjs.io/docs/setup-teardown" }]}
			/>
			<Content title="Third" body="" codeSnippets={[]} links={[{ label: "", url: "" }]} />
		</div>
	);
}

export default App;
