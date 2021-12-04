import React from "react";
import "./Quiz.css";
import axios from "axios";
import globalVars from "./../../../../globalVars";
import { getCookie } from "./../../../../utils";

const Quiz = () => {
	const [questions, setQuestions] = React.useState(null);
	const [quizID, setQuizId] = React.useState(null);

	React.useEffect(() => {
		const url = `${globalVars.apiPrefix}/user/quizzes`;
		axios
			.get(url, {
				headers: {
					Authorization: getCookie("jwt"),
				},
			})
			.then(
				(res) => {
					setQuestions(res.data[0].intrebari);
					setQuizId(res.data[0]._id);
					//console.log(res.data[0].intrebari);
				},
				(err) => {
					alert("error!");
					console.error(err);
				}
			);
	}, []);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(document.querySelector("form"));
		let userAnswers = {
			answers: [],
		};
		for (let i = 0; i < questions.length; i++) {
			const userAns = formData.get(`${i}`);
			if (userAns === null) {
				alert("esti obligat sa raspunzi la tot!");
				return;
			}
			userAnswers.answers.push({ answer: userAns });
		}
        console.log(userAnswers);
		const url = `${globalVars.apiPrefix}/user/quiz/${quizID}`;
		axios.post(url, userAnswers, {
			headers: {
				Authorization: getCookie("jwt"),
			},
		}).then(res => {
            alert(`${res.data.message}`);
            window.location.assign('/');
        }, err => {
            alert('eroare');
            console.error(err);
        })
	};

	let qInd = 0;
	return (
		<div className="Quiz">
			<h1>Test de evaluare vectori</h1>
			<br />
			<br />
			<p className="question">
				<form onSubmit={handleFormSubmit}>
					{questions &&
						questions.map((question) => {
							return (
								<div>
									<span className="highlight">
										<b>{question.nume} </b>
									</span>
									<br />
									<input
										type="radio"
										name={String(qInd)}
										value={question.raspunsuri[0].nume}
									/>
									<label for="ans1">
										{question.raspunsuri[0].nume}
									</label>
									<br />
									<input
										type="radio"
										name={String(qInd)}
										value={question.raspunsuri[1].nume}
									/>
									<label for="ans2">
										{question.raspunsuri[1].nume}
									</label>
									<br />
									<input
										type="radio"
										name={String(qInd++)}
										value={question.raspunsuri[2].nume}
									/>
									<label for="ans3">
										{question.raspunsuri[2].nume}
									</label>
									<br />
									<br />
									<br />
								</div>
							);
						})}
					<input type="submit" value="Submit" />
				</form>
			</p>
		</div>
	);
};

export default Quiz;
