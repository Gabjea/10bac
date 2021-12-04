import React from "react";
import "./Tests.css";
import globalVars from "./../../globalVars";
import axios from "axios";
import { getCookie, getUserDataFromJwtReq } from "./../../utils";

const Tests = () => {
	const [subDatas, setSubDatas] = React.useState(null);

	React.useEffect(() => {
		const url = `${globalVars.apiPrefix}/user/subs_bac`;
		axios
			.get(url, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => {
					setSubDatas(res.data);
				},
				(err) => {
					alert("error!");
					console.error(err);
				}
			);
	}, []);

	return (
		<div className="Tests">
			<h2>Modele de subiecte pentru examenul de bacalaureat</h2>
			<br />
			<br />

			{subDatas &&
				subDatas.map((subData) => {
					return (
						<div>
							<h2>{subData.name}</h2>
							<iframe
								src={subData.link}
								style={{ width: "800px", height: "800px" }}
								title="english"
							></iframe>
						</div>
					);
				})}
		</div>
	);
};

export default Tests;
