import React from "react";
import axios from "axios";
const url = "http://79.113.201.115:5000/api/v1/user/register";

export default function Register() {
	const nameRef = React.createRef();
	const surnameRef = React.createRef();
	const emailRef = React.createRef();
	const passwordRef = React.createRef();
	const confPassRef = React.createRef();

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const { value: name } = nameRef.current;
		const { value: surname } = surnameRef.current;
		const { value: email } = emailRef.current;
		const { value: password } = passwordRef.current;
		const { value: password2 } = confPassRef.current;
		if (password !== password2) {
			alert("parolele nu se potrivesc!");
			return;
		}
		axios.post(url, {
			name,
            surname,
			email,
			password,
		}).then(res => {
            alert('register ok!');
            window.location.assign('/autentificare');
        }, err => {
            console.error(err);
            alert('eroare!');
        });
	};

	return (
		<div>
			<div>
				<form onSubmit={handleFormSubmit}>
					<label for="name">
						<b>Name</b>
					</label>
					<input
						ref={nameRef}
						type="text"
						placeholder="Enter name"
						name="name"
						required
					/>
					<br />
					<label for="surname">
						<b>Surname</b>
					</label>
					<input
						ref={surnameRef}
						type="text"
						placeholder="Enter surname"
						name="surname"
						required
					/>
					<br />
					<label for="email">
						<b>Email</b>
					</label>
					<input
						ref={emailRef}
						type="email"
						placeholder="Enter email"
						name="email"
						required
					/>
					<br />
					<label for="psw">
						<b>Password</b>
					</label>
					<input
						ref={passwordRef}
						type="password"
						placeholder="Enter Password"
						name="psw"
						required
					/>
					<br />
					<label for="cpsw">
						<b>Confirm password</b>
					</label>
					<input
						ref={confPassRef}
						type="password"
						placeholder="Confirm Password"
						name="cpsw"
						required
					/>
					<br />
					<button type="submit">register</button>
				</form>
                <p><i>ai deja un profil! autentificate <a href="/autentificare">aici</a>!</i></p>
			</div>
		</div>
	);
}
