import React from "react";
import { render } from "react";
import Limg from "../Components/Limg";
import "../Styles/Showcomments.css";
function Showcomments(props) {
	var it = props.items;

	if (it) {
		const list = it.map((item) => {
			return (
				<div className="comshown-1">
					<Limg />
					<p className="comshown-2">{item}</p>
				</div>
			);
		});

		return <div>{list}</div>;
	}
}

export default Showcomments;
