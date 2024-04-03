import React from 'react';
import '../App.css';

type ContentProps = {
	title: string;
	body: string;
	code?: string;
	links?: ContentLink[];
};

type ContentLink = {
	label: string;
	url: string;
};

function Content(props: ContentProps) {
	return (
		<div className="App-content">
			<h2>{props.title}</h2>
			<p>{props.body}</p>
			<code>{props.code}</code>
			{props.links?.map((link) => (
				<p>
					{link.label}:
					<a href={link.url} className="App-link" target="_blank">
						{link.url}
					</a>
				</p>
			))}
		</div>
	);
}

export default Content;
