import React from "react";
import "./Quiz.css";
import axios from "axios";
import globalVars from "./../../../../globalVars";
import { getCookie } from "./../../../../utils";

const Quiz = () => {
	const [questions, setQuestions] = React.useState(null);

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
					setQuestions(() => res.data[0].intrebari);
					console.log("====================================");
					//console.log(res.data[0].intrebari);
					console.log("====================================");
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
        let userAnswers = [];
        for (let i = 0; i < 9; i++) {
            const userAns = formData.get(`${i}`);
            userAnswers.push(userAns);
        }
        console.log(userAnswers);
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
