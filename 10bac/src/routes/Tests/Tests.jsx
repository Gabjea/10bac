import React from "react";
import "./Tests.css";
import globalVars from "./../../globalVars";
import axios from "axios";
import { getCookie } from "./../../utils";

const Tests = () => {
	const [subDatas, setSubDatas] = React.useState(null);
	const [pic, setPic] = React.useState(null);

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
					window.location.replace("/stripe");
					console.error(err);
				}
			);
	}, []);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const { fid } = event.target.dataset;
		const url = `${globalVars.apiPrefix}/user/sub_bac/${fid}`;
		console.log(url);
		//console.log();
		const formData = new FormData();
		console.log(pic);
		formData.append("file", pic);
		axios
			.post(url, formData, {
				headers: {
					Authorization: getCookie("jwt"),
					"Content-Type": "multipart/form-data",
				},
			})
			.then(
				(res) => {
					alert("success!");
				},
				(err) => {
					window.location.replace("/stripe");
					console.error(err);
				}
			);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setPic(event.target.files[0]);
		console.log(event.target.files[0]);
	};

	return (
		<div className="Tests">
			<h2>Modele de subiecte pentru examenul de bacalaureat</h2>
			<p>
				Te încurajăm să rezolvi subiectele și să încarci câte o
				fotografie cu rezolvările pentru a fi corectate de profesorii
				noștri.
			</p>
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
							<br />
							<form
								onSubmit={handleFormSubmit}
								method="POST"
								enctype="multipart/form-data"
								data-fid={subData._id}
							>
								<label for="file" className="file-label">
									<input
										onChange={handleChange}
										type="file"
										name="file"
										id="file"
									/>
									Încarcă o fotografie
								</label>
								<br />
								<br />
								<button type="submit">Trimite</button>

								<br />
								<br />
							</form>
						</div>
					);
				})}
		</div>
	);
};

export default Tests;
