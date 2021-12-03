import axios from "axios";
import React from "react";
import { getUserDataFromJwtReq, isLoggedIn } from "../../utils";
import globalVars from "./../../globalVars";
import { getCookie } from "../../utils";
const url = globalVars.apiPrefix + "/user/profile";

export default function Profile() {
	const [userData, setUserData] = React.useState(null);

	const nameRef = React.createRef();
	const surnameRef = React.createRef();
	const emailRef = React.createRef();
	const passwordRef = React.createRef();

	React.useEffect(() => {
		if (!isLoggedIn()) {
			window.location.assign("/autentificare");
			return;
		}
	}, []);

	React.useEffect(() => {
		getUserDataFromJwtReq()
			.then((data) => {
				console.log("====================================");
				console.log(data);
				console.log("====================================");
				setUserData({
					name: data.name,
					surname: data.surname,
					email: data.email,
				});
			})
			.catch((err) => {
				console.error(err);
				alert("error!");
			});
	}, []);

	const handleSubmitForm = async (event) => {
		event.preventDefault();
		const { value: name } = nameRef.current;
		const { value: surname } = surnameRef.current;
		const { value: email } = emailRef.current;
		const { value: password } = passwordRef.current;

		if (!name || !surname || !email || !password) {
			alert("fields must be filled!");
			return;
		}

		axios
			.patch(
				url,
				{
					name,
					surname,
					email,
					password,
				},
				{
					headers: {
						Authorization: getCookie("jwt"),
					},
				}
			)
			.then(
				(res) => {
					alert("updated successfully");
					window.location.reload();
				},
				(err) => {
					console.error(err);
					alert("error123!");
				}
			);
	};

	return (
		<form onSubmit={handleSubmitForm}>
			<div className="right">
				<input
					ref={nameRef}
					type="text"
					defaultValue={userData?.name}
					name="name"
				/>
				<br />
				<input
					ref={surnameRef}
					type="text"
					defaultValue={userData?.surname}
					name="surname"
				/>
				<br />
				<input
					ref={emailRef}
					type="email"
					defaultValue={userData?.email}
					name="email"
				/>
				<br />
				<input ref={passwordRef} type="password" name="psw" />
				<br />
				<button type="submit">Trimite</button>
			</div>
		</form>
	);
}
