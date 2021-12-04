import React from "react";
import axios from "axios";
import globalVars from "./../../globalVars";
import { getCookie } from "./../../utils";
const textAreaStyle = { resize: "none", width: "700px", height: "200px" };

export default function Comments({ lessonID }) {
	const addCommRef = React.createRef();
	const addRepRef = React.createRef();
	const [comments, setComments] = React.useState([]);

	React.useEffect(() => {
		console.log(lessonID);
		axios
			.get(`${globalVars.apiPrefix}/comment/${lessonID}`, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => {
					setComments(res.data);
					console.log(res.data);
				},
				(err) => {
					console.error(err);
					alert("error!");
				}
			); //*/
	}, [lessonID]);

	const handleAddCommClick = (event) => {
		event.preventDefault();
		const { value: title } = addCommRef.current;
		if (!title) {
			alert("comentariul e gol!");
			return;
		}
		axios
			.post(
				`${globalVars.apiPrefix}/comment`,
				{
					lectie_id: lessonID,
					title,
				},
				{
					headers: {
						Authorization: getCookie("jwt"),
					},
				}
			)
			.then(
				(res) => {
					window.location.reload();
				},
				(err) => {
					console.error(err);
					alert("eroare");
				}
			);
	};

	const handleAddRepClick = (event) => {
		event.preventDefault();
		const { value: title } = addRepRef.current;
        if (!title) {
            alert('raspunsul e gol!');
            return;
        }
        axios.post(``).then(res => {

        }, err => {
            alert('eroare');
            console.error(err);
        })
	};

	return (
		<div>
			<p>add comment</p>
			<div className="add-comment">
				<textarea ref={addCommRef} style={textAreaStyle} type="text" />
				<br />
				<button onClick={handleAddCommClick}>comment!</button>
			</div>
			<p>comments:</p>
			<div className="comment-section">
				{comments &&
					comments.map((comment) => {
						return (
							<div className="comment-box">
								<img
									style={{ height: "15em" }}
									src={comment.owner.profile_pic}
									alt=""
								/>{" "}
								<br />
								<i className="name">{comment.owner.username}</i>
								<p className="content">{comment.title}</p>
								<div
									style={{ color: "red" }}
									className="replies-box"
								>
									{comment.raspunsuri.map((ans) => {
										return <div>{ans.title}</div>;
									})}
									<br />
									<div className="add-reply">
										<textarea
											ref={addRepRef}
											style={textAreaStyle}
											type="text"
										/>
										<br />
										<button onClick={handleAddRepClick}>
											add reply!
										</button>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
