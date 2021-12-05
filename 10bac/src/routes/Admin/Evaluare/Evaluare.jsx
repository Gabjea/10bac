import React from "react";
import globalVars from "./../../../globalVars";
import { getCookie } from "../../../utils";
import axios from "axios";
const qLen = 9;

export default function Evaluare() {
	const handleFormSubmit = (event) => {
		console.log("hail!");
		event.preventDefault();
		const materieElem = document.querySelector("#materie_id");
		const capitolElem = document.querySelector("#capitol_id");
		const quizNameElem = document.querySelector("#nume-quiz");

		if (!materieElem.value || !capitolElem.value || !quizNameElem.value) {
			alert("smth is null!");
			return;
		}

		let reqObj = {
			materie_id: Number(materieElem.value),
			capitol_id: Number(capitolElem.value),
			name: quizNameElem.value,
			intrebari: [],
		};
		for (let i = 1; i <= qLen; i++) {
			const elem = document.querySelectorAll(`#f${i} > input`);
			const sel = document.querySelector(`#f${i} > select`);
			if (
				!elem[0].value ||
				!elem[1].value ||
				!elem[2].value ||
				!elem[3].value
			) {
				alert("smth is null!");
				return;
			}

			reqObj.intrebari.push({
				nume: elem[0].value,
				raspunsuri: [
					{
						nume: elem[1].value,
					},
					{
						nume: elem[2].value,
					},
					{
						nume: elem[3].value,
					},
				],
				raspuns_corect: elem[sel.value].value,
			});
		} //*/
		//console.log(reqObj);
		const url = `${globalVars.apiPrefix}/admin/quiz`;
		axios
			.post(url, reqObj, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => {
					window.location.assign("/");
				},
				(err) => {
					alert("error");
					console.error(err);
				}
			);
	};

	return (
		<div>
			<h1>Mk quizzes</h1>
			<br />
			<form action="" onSubmit={handleFormSubmit}>
				<input id="materie_id" type="number" placeholder="materie_id" />
				<input id="capitol_id" type="number" placeholder="capitol_id" />
				<input id="nume-quiz" type="text" placeholder="nume-quiz" />
				<div className="qq" id="f1">
					<hr />
					1.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f2">
					<hr />
					2.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f3">
					<hr />
					3.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f4">
					<hr />
					4.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f5">
					<hr />
					5.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f6">
					<hr />
					6.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f7">
					<hr />
					7.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f8">
					<hr />
					8.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<div className="qq" id="f9">
					<hr />
					9.
					<input type="text" />
					<br />
					variant1: <input type="text" />
					<br />
					variant2: <input type="text" />
					<br />
					variant3: <input type="text" />
					<br />
					varianta corecta:
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<hr />
				</div>
				<input type="submit" value="submit!" />
			</form>
		</div>
	);
}
