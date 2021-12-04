import React from "react";
import axios from "axios";
import globalVars from "./../../globalVars";
import { getCookie, getUserDataFromJwtReq } from "./../../utils";
const textAreaStyle = { resize: "none", width: "700px", height: "200px" };

export default function Comments({ lessonID }) {
	const addCommRef = React.createRef();
	const addRepRef = React.createRef();
	const [comments, setComments] = React.useState([]);
	const [userID, setUserID] = React.useState(null);

	React.useEffect(() => {
		//console.log(lessonID);
		axios
			.get(`${globalVars.apiPrefix}/comment/${lessonID}`, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => {
					setComments(res.data);
					//console.log(res.data);
				},
				(err) => {
					console.error(err);
					alert("error!");
				}
			); //*/
	}, [lessonID]);

	React.useEffect(() => {
		getUserDataFromJwtReq().then((data) => {
			setUserID(() => data._id);
			//console.log(data._id);
		});
	}, []);

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
			alert("raspunsul e gol!");
			return;
		}
		const nrComm = Number(event.target.id);
		const commId = comments[nrComm]._id;
		const url = `${globalVars.apiPrefix}/comment/reply/${commId}`;
		axios
			.post(
				url,
				{
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
					alert("eroare");
					console.error(err);
				}
			); //*/
	};

	const handleDelCommClick = (event) => {
		event.preventDefault();
		const nrComm = Number(event.target.id);
		console.log(nrComm);
		const commId = comments[nrComm]._id;
		const url = `${globalVars.apiPrefix}/comment/${commId}`;
		axios
			.delete(url, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => window.location.reload(),
				(err) => {
					alert("error!");
					console.error(err);
				}
			);
	};

	const handleDelReplClick = (event) => {
		event.preventDefault();
		const nrComm = Number(event.target.id);
		const nrRepl = Number(event.target.dataset.idrepl);
		const commId = comments[nrComm]._id;
		const replId = comments[nrComm].raspunsuri[nrRepl]._id;
		console.log(commId, replId);
		const url = `${globalVars.apiPrefix}/comment/reply/${commId}/${replId}`;
		axios
			.delete(url, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => window.location.reload(),
				(err) => {
					alert("error!");
					console.error(err);
				}
			);
	};

	let indexOfComm = 0;
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
						//console.log(comment.owner._id === userID);
						let indexOfRepl = 0;
						return (
							<div className="comment-box">
								{userID === comment.owner._id && (
									<button
										id={indexOfComm}
										onClick={handleDelCommClick}
									>
										delete!
									</button>
								)}
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
										return (
											<div className="reply">
												{userID === ans.owner._id && (
													<button
														id={indexOfComm}
														data-idrepl={
															indexOfRepl++
														}
														onClick={
															handleDelReplClick
														}
													>
														delete!
													</button>
												)}
												<img
													style={{ height: "7em" }}
													src={ans.owner.profile_pic}
													alt=""
												/>
												<div>{ans.owner.username}</div>
												<div>{ans.title}</div>
											</div>
										);
									})}
									<br />
									<div className="add-reply">
										<textarea
											ref={addRepRef}
											style={textAreaStyle}
											type="text"
										/>
										<br />
										<button
											id={indexOfComm++}
											onClick={handleAddRepClick}
										>
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
