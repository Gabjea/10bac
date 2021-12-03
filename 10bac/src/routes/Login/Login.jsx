import React from "react";
import "./Login.css";
import axios from "axios";
import { isLoggedIn, setCookie } from "../../utils";
const url = "http://79.113.201.115:5000/api/v1/user/login";

export default function Login() {
	const emailRef = React.createRef();
	const passwordRef = React.createRef();

    React.useEffect(() => {
        if (isLoggedIn()) {
            window.location.assign('/');
        }
    }, []);

	const handleFormSubmit = async event => {
		event.preventDefault();
		const { value: email } = emailRef.current;
		const { value: password } = passwordRef.current;
        console.log(email, password);
		axios.post(url, {
            email, password
        }).then(res => {
            setCookie('jwt', res.data.token);
            window.location.assign('/');
        }, err => {
            console.error(err);
            alert('eroare!!!');
        })
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
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
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
