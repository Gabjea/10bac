import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faFileAlt,
	faUser,
	faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getUserDataFromJwtReq } from "./../../../utils";

const Nav = () => {
	const navLinks = [
		["Materii", faBookOpen],
		["Subiecte", faFileAlt],
		["Istoric", faHistory],
		["Profil", faUser],
	];

	const [userProfilePic, setUserProfilePic] = React.useState("");
	const [userName, setUserName] = React.useState("");

	React.useEffect(() => {
		getUserDataFromJwtReq()
			.then((data) => {
				const { profile_pic, name, surname } = data;
				setUserProfilePic(profile_pic);
                console.log('====================================');
                console.log(profile_pic);
                console.log('====================================');
				setUserName(name + ' ' + surname);
			})
			.catch((err) => {
				console.error(err);
				alert("error!");
			});
	}, []);

	return (
		<div className="Nav">
			<div className="top">
				<img
					src={userProfilePic}
					alt="profilePic"
					className="profile-picture"
				/>
				<span className="name">{userName}</span>
			</div>
			<div className="bottom">
				{navLinks.map((navLink) => {
					return (
						// Router aici

						<Link to={`/${navLink[0].toLocaleLowerCase()}`}>
							<div className="link">
								<div className="link-container">
									<FontAwesomeIcon
										icon={navLink[1]}
										size="2x"
										className="icon"
									/>
									<div className="link-name">
										{navLink[0]}
									</div>
								</div>
							</div>
						</Link>
					);
				})}
				<h1>
					10bac<span>.ro</span>
				</h1>
			</div>
		</div>
	);
};

export default Nav;
