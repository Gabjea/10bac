import axios from "axios";
import React from "react";
import { getUserDataFromJwtReq, isLoggedIn } from "../../utils";
import globalVars from "./../../globalVars";
import { getCookie } from "../../utils";
const url = globalVars.apiPrefix + "/user/profile";

export default function Profile() {
	const [userData, setUserData] = React.useState(null);
	const [userProfilePic, setUserProfilePic] = React.useState(null);

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

    const handleImgSubm = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", userProfilePic);
        console.log(formData);
        axios.post('http://79.113.201.115:5000/api/v1/user/profile/picture', formData, {
            headers: {
                Authorization: getCookie("jwt"),
                'Content-Type': 'multipart/form-data'
            },
        }//*/
        ).then(res => {
            //console.log(res.data);
            alert('img updated!');
            window.location.reload();
        }, err => {
            console.error(err);
            alert('error');
        }).catch(err => {
            console.error(err);
            alert('error2');
        })
    }

    const handleChange = event => {
        event.preventDefault();
        setUserProfilePic(event.target.files[0]);
        console.log(event.target.files[0]);
    }

	return (
		<div>
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
			<br />
			<hr />
			<br />
			update profile pic: <br />
			<div>
				<h1>file upload</h1>
				<br />
				<form
                    onSubmit={handleImgSubm}
					method="POST"
					enctype="multipart/form-data"
				>
					<input onChange={handleChange} type="file" name="file" />
					<input type="submit" value="submit!" />
				</form>
			</div>
		</div>
	);
}
