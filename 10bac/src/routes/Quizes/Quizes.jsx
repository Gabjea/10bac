import React from "react";
import "./Quizes.css";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../utils";
import globalVars from "../../globalVars";
import axios from "axios";
import { getCookie } from "../../utils";

const Quizes = (props) => {
	React.useEffect(() => {
		if (!isLoggedIn()) {
			window.location.assign("/autentificare");
			return;
		}
	}, []);

	const lessonsMath = [
		["Definitie", "Operatii", "Test de evaluare vectori"], // Vectori
		["Notiuni"], // Functii
	];

	const lessonsRomanian = [
		["Informatii generale Moara cu noroc", "Comentariu Moara cu noroc"], // Moara cu noroc
		["Informatii generale Plumb", "Comentariu Plumb"], // Plumb
	];

	const chaptersMath = [
		["Vectori", 2],
		["Funcții", 2],
	];

	const chaptersRomanian = [
		["Ioan Slavici - Moara cu noroc", 2],
		["George Bacovia - Plumb", 2],
	];

	let lessons = [],
		id = window.location.href.split("/").reverse()[0] * 1,
		idMaterie = window.location.href.split("/").reverse()[1] * 1,
		chapters = [];

	if (idMaterie === 1) {
		lessons = lessonsMath;
		chapters = chaptersMath;
	}

	if (idMaterie === 2) {
		lessons = lessonsRomanian;
		chapters = chaptersRomanian;
	}

	const [questions, setQuestions] = React.useState([]);
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
					setQuestions(res.data);
					setQuizId(res.data[0]._id);
					//console.log(res.data[0].intrebari);
				},
				(err) => {
					window.location.replace("/stripe");
					console.error(err);
				}
			);
	}, []);

	return (
		<div className="Lessons">
			<div className="top">
				<h2>Teste de evaluare disponibile</h2>

				<p className="description">
					Alege din lista de mai jos un test pe care dorești să-l
					rezolvi.
				</p>
			</div>

			<div className="table">
				<div className="top-row">
					<p>Titlul testului</p>
				</div>

				{questions.map((question, index) => {
					return (
						<Link to={`/quiz/${index + 1}`}>
							<div
								className={`row ${
									index % 2 === 0 ? "even" : ""
								}`}
							>
								<p className="left">
									<span>
										{index + 1}.{"  "}
									</span>{" "}
									{question.name}
								</p>

								{/* <p className="right">{lesson[1]}</p> */}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Quizes;
