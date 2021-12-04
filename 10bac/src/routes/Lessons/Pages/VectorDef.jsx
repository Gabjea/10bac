import React from "react";
import "./Lesson.css";
import Comments from "../../Comments/Comments";

export default function VectorDef() {
	return (
		<div className="Lesson">
			<h1>Vectori</h1>
			<br />

			<div id="main">
				<p>
					<h2 style={{ fontSize: "22px" }}>
						Vectori <span className="highlight">liberi</span>
					</h2>
					Se caracterizează prin modul, directie si sens. Se numește
					direcție a dreptei <span className="highlight">d</span>{" "}
					mulțimea formată din dreapta{" "}
					<span className="highlight">d</span> și din toate dreptele
					paralele cu <span className="highlight">d</span>. Spunem că
					două segmente au aceeași direcție dacă dreptele lor suport
					sunt paralele sau cu <span className="highlight">d</span>.
					Spunem că două segmente au aceeași direcție dacă dreptele
					lor suport sunt paralele sau coincid. O pereche ordonată de
					puncte (A,B) din plan se numește segment orientat.
					<br />
					<img src="./showimage.png" alt="" />
					<br />
					<span className="highlight">A</span> se numește originea sau
					punctul de aplicație, <span className="highlight">B</span>{" "}
					se numește extremitatea segmentului orientat sau vârf.
					Lungimea segmentului [<span className="highlight">AB</span>]
					se numește modulul segmentului orientat.
					<br />
					<span className="highlight">d</span>
					<img src="./showimage (1).png" alt="" />
					<br />
					<span id="sub-title">
						Două segmente orientate se numesc
					</span>{" "}
					echipolente dacă au aceeasi mărime (modul), direcție și
					sens.
					<br />
					<img src="./showimage (2).png" alt="" />
					<br />
					Se numește <span className="highlight">vector</span>{" "}
					mulțimea tuturor segmentelor orientate echipolente cu un
					segment orientat dat. Se numește{" "}
					<span className="highlight">versor</span> sau vector
					unitate, vectorul având lungimea egală cu 1. Doi vectori
					sunt egali dacă au aceeași mărime, direcție și sens. Doi
					vectori sunt opuși dacă au aceeași mărime și direcție, dar
					sensuri opuse.
				</p>
			</div>
			<br />
			<hr />
			<br />
			<Comments lessonID={window.location.href.split("/").reverse()[0]} />
		</div>
	);
}
