import React from "react";

export default function Register() {
	return (
		<div>
			<form onSubmit={null}>
				<label for="uname">
					<b>Username</b>
				</label>
				<input
					ref={null}
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
					ref={null}
					type="password"
					placeholder="Enter Password"
					name="psw"
					required
				/>
				<br />
				<button type="submit">Register!</button>
			</form>
		</div>
	);
}
