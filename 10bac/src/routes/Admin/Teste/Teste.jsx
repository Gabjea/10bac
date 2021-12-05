import React from "react";
import "./Teste.css";
import axios from "axios";
import globalVars from "../../../globalVars";
import { getCookie } from "../../../utils";
import { getUserDataFromJwtReq } from "../../../utils";

const Teste = () => {
	React.useEffect(() => {
		getUserDataFromJwtReq().then((data) => {
			if (data.role !== "admin") {
				window.location.replace("/");
			}
		});
	}, []);

	const [tests, setTests] = React.useState([]);

	React.useEffect(() => {
		//console.log(lessonID);
		axios
			.get(`${globalVars.apiPrefix}/admin/sub_bac`, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => {
					setTests(res.data);
					// console.log(res.data);
				},
				(err) => {
					window.location.assign("/stripe");
					console.error(err.status);
					alert("error!!!!");
				}
			)
			.catch((err) => {
				alert("catch err");
			});
	}, []);
	// nota: valoarea

	const giveMark = (idTest, nota) => {
		// console.log(nota);
		axios
			.post(
				`${globalVars.apiPrefix}/admin/sub_bac/${idTest}`,
				{
					nota,
				},
				{
					headers: {
						Authorization: getCookie("jwt"),
					},
				}
			)
			.then(
				(res) => {
					// setTests(res.data);
					// console.log(res.data);
					window.location.reload();
				},
				(err) => {
					console.error(err);
					alert("error!");
				}
			);
	};

	const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div className="TesteAdmin">
			<h2>Teste de corectat</h2>

			<br />
			<br />

			{tests.map((test) => {
				return (
					<div className="container">
						<div className="wrapper">
							<iframe
								src={test.sub_bac_link}
								style={{ width: "750px", height: "750px" }}
								title="english"
							></iframe>
							<img src={test.link} alt="" />
						</div>
						<div className="marks">
							{marks.map((mark) => (
								<span
									className="mark"
									onClick={() => giveMark(test._id, mark)}
								>
									{mark}
								</span>
							))}
						</div>
						<br />
						<br />
						<br />
					</div>
				);
			})}
		</div>
	);
};

export default Teste;
