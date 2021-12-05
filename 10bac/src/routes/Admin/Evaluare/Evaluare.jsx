import React from "react";
import "./Evaluare.css";
import globalVars from "./../../../globalVars";
import { getCookie } from "../../../utils";
import axios from "axios";
import { getUserDataFromJwtReq } from "../../../utils";
const qLen = 9;

export default function Evaluare() {
    React.useEffect(() => {
        getUserDataFromJwtReq().then(data => {
            if (data.role !== 'admin') {
                window.location.replace('/');
            }
        })
    }, []);
    
    const handleFormSubmit = (event) => {
		// console.log("hail!");
		event.preventDefault();
		const materieElem = document.querySelector("#materie_id");
		const capitolElem = document.querySelector("#capitol_id");
		const quizNameElem = document.querySelector("#nume-quiz");

		if (!materieElem.value || !capitolElem.value || !quizNameElem.value) {
			// alert('smth is null!');
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
				// alert('smth is null!');
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
		<div className="EvaluareAdmin">
			<h1>Adaugă un test de evaluare (quiz)</h1>
			<br />
			<p>
				Pentru a adăuga un nou test de rezolvat te rugăm să completezi
				formularul de mai jos
			</p>
			<br />
			<form action="" onSubmit={handleFormSubmit}>
				<input
					id="materie_id"
					type="number"
					placeholder="ID-ul materiei"
				/>
				<input
					id="capitol_id"
					type="number"
					placeholder="ID-ul capitolului"
				/>
				<input
					id="nume-quiz"
					type="text"
					placeholder="Numele testului"
				/>
				<div className="qq" id="f1">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 1</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f2">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 2</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f3">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 3</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f4">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 4</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f5">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 5</b>
					</p>
					<input type="text" />
					<br />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f6">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 6</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f7">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 7</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f8">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 8</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<div className="qq" id="f9">
					<br />
					<br />
					<p className="highlight">
						<b>Întrebarea 9</b>
					</p>
					<input type="text" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 1" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 2" />
					<br />
					<input type="text" placeholder="Varianta de răspuns 3" />
					<br />
					<b>Selectează varianta corectă:</b>
					<br />
					<br />
					<select name="ok" id="var-ok">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<br />
					<br />
				</div>
				<input type="submit" value="Trimite" />
			</form>
		</div>
	);
}
