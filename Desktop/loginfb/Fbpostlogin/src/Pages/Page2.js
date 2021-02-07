import React, { createElement } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useState } from "react";
import ReactDOM from "react";
import Showcomments from "../Components/Showcomments";
import "../Styles/Page2.css";
function Page2() {
	const [comment, setcomment] = useState({
		items: [],
		text: "",
	});
	function coment() {
		const newitem = comment.text;
		if (newitem != "") {
			const newitems = [...comment.items, newitem];
			setcomment({
				items: newitems,
				text: "",
			});
		}
	}

	React.useEffect(() => {
		const data = localStorage.getItem("my-tier-list");

		if (data) {
			setcomment({ items: JSON.parse(data) });
		}
	}, []);

	React.useEffect(() => {
		localStorage.setItem("my-tier-list", JSON.stringify(comment.items));
	});

	return (
		<div className="page2body">
			<div className="page2">
				<img
					className="img1"
					src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg"
					alt="new"
					tart
				></img>
				<h3>Syed Mohid Hussain</h3>

				<textarea
					type="text"
					className="comntsec"
					placeholder="Enter your comments here.."
					onChange={(event) => {
						setcomment({ ...comment, text: event.target.value });
					}}
				/>

				<button id="bt2" type="submit" onClick={coment}>
					Post
				</button>

				<Showcomments items={comment.items} />
			</div>
		</div>
	);
}

export default Page2;
