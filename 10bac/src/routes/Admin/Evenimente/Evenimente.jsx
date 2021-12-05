import React from "react";
import axios from "axios";
import globalVars from "../../../globalVars";
import { getCookie } from "../../../utils";
import { getUserDataFromJwtReq } from "../../../utils";

const Evenimente = () => {
	React.useEffect(() => {
		getUserDataFromJwtReq().then((data) => {
			if (data.role !== "admin") {
				window.location.replace("/");
			}
		});
	}, []);

	const titluRef = React.createRef();
	const urlRef = React.createRef();
	const dateRef = React.createRef();

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const { value: titlu } = titluRef.current;
		const { value: url } = urlRef.current;
		const { value: date } = dateRef.current;

		axios
			.post(
				"http://79.113.201.115:5000/api/v1/admin/event/",
				{
					title: titlu,
					link: url,
					date: date,
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
					// return setError('Email-ul și parola nu coincid!');
				}
			);
	};

	return (
		<div className="Subiecte Profile">
			<h2>Adaugă un eveniment</h2>

			<form onSubmit={handleFormSubmit}>
				<input
					ref={titluRef}
					type="text"
					placeholder="Introdu titlul evenimentului"
					name="email"
				/>

				<input
					ref={urlRef}
					type="text"
					placeholder="Introdu URL-ul evenimentului"
					name="psw"
				/>
				<input
					ref={dateRef}
					type="datetime-local"
					placeholder="Introdu URL-ul evenimentului"
					name="psw"
				/>

				<button type="submit">Trimite</button>
			</form>
			<br />
			<br />
		</div>
	);
};

export default Evenimente;
