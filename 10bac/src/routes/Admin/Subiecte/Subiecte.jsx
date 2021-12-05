import React from "react";
import "./Subiecte.css";
import axios from "axios";
import globalVars from "../../../globalVars";
import { getCookie } from "../../../utils";
import { getUserDataFromJwtReq } from "../../../utils";

const Subiecte = () => {
	React.useEffect(() => {
		getUserDataFromJwtReq().then((data) => {
			if (data.role !== "admin") {
				window.location.replace("/");
			}
		});
	}, []);

	const titluRef = React.createRef();
	const urlRef = React.createRef();

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const { value: titlu } = titluRef.current;
		const { value: url } = urlRef.current;

		axios
			.post(
				"http://79.113.201.115:5000/api/v1/admin/sub_bac/",
				{
					name: titlu,
					link: url,
					materie_id: 1,
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
			<h2>Adaugă un subiect de bacalaureat</h2>

			<form onSubmit={handleFormSubmit}>
				<input
					ref={titluRef}
					type="text"
					placeholder="Introdu titlul subiectului"
					name="email"
				/>

				<input
					ref={urlRef}
					type="text"
					placeholder="Introdu URL-ul subiectului"
					name="psw"
				/>

				<button type="submit">Trimite</button>
			</form>
			<br />
			<br />
		</div>
	);
};

export default Subiecte;
