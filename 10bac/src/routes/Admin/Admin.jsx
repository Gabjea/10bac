import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../utils";
import globalVars from "../../globalVars";
import axios from "axios";
import { getCookie } from "../../utils";
import { getUserDataFromJwtReq } from "../../utils";

const Admin = (props) => {
	React.useEffect(() => {
		if (!isLoggedIn()) {
			window.location.assign("/autentificare");
			return;
		}
	}, []);

	React.useEffect(() => {
        getUserDataFromJwtReq().then(data => {
            if (data.role !== 'admin') {
                window.location.replace('/');
            }
        })
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

	return (
		<div className="Lessons">
			<div className="top">
				<h2>Administrator</h2>

				<p className="description">
					Mai jos ai o listă cu acțiunile pe care le poti lua dacă
					ești administrator.
				</p>
			</div>

			<div className="table">
				<div className="top-row">
					<p>Acțiuni</p>
				</div>
				<Link to={`/admin/teste`}>
					<div className={`row even`}>
						<p className="left">Teste de corectat</p>

						{/* <p className="right">{lesson[1]}</p> */}
					</div>
				</Link>
				<Link to={`/admin/quiz`}>
					<div className={`row`}>
						<p className="left">Adaugă test de evaluare</p>

						{/* <p className="right">{lesson[1]}</p> */}
					</div>
				</Link>
				<Link to={`/admin/subiecte`}>
					<div className={`row even`}>
						<p className="left">Adaugă subiect de bacalaureat</p>

						{/* <p className="right">{lesson[1]}</p> */}
					</div>
				</Link>
				<Link to={`/admin/evenimente`}>
					<div className={`row even`}>
						<p className="left">Adaugă eveniment</p>

						{/* <p className="right">{lesson[1]}</p> */}
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Admin;
