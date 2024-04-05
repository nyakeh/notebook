import "./Content.css";
import "../App.css";

type ContentProps = {
	title: string;
	body: string;
	codeSnippets: string[];
	links?: ContentLink[];
};

type ContentLink = {
	label: string;
	url: string;
};

function Content({ title, body, codeSnippets, links }: ContentProps) {
	return (
		<div className="Content">
			<h2>{title}</h2>
			<p>{body}</p>
			<div className="Content-code">
				{codeSnippets.map((code) => (
					<code className="language-javascript">{code}</code>
				))}
			</div>
			{links?.map((link) => (
				<p>
					{link.label}&nbsp;:&nbsp;
					<a href={link.url} className="App-link" target="_blank">
						{link.url}
					</a>
				</p>
			))}
		</div>
	);
}

export default Content;
