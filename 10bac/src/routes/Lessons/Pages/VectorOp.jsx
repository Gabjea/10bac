import React from "react";
import "./Lesson.css";
import Comments from "../../Comments/Comments";

export default function VectorOp() {
	return (
		<div className="Lesson">
			<div id="main">
				<h1>Operații cu vectori</h1>
				<br />
				<p>
					<h2>
						<span className="highlight">Adunarea</span>
					</h2>
					<b>
						<span className="highlight">1. </span>Cu regula
						paralelogramului
					</b>
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
					<span className="highlight">&#8226;</span> se aduc vectorii
					în aceeași origine <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
					<span className="highlight">&#8226;</span> se construiește
					un paralelogram care are două laturi exact cei doi vectori
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
					<span className="highlight">&#8226;</span> rezultantă este
					suma celor doi vectori <br />
					<br />
					<b>
						<span className="highlight">2. </span>Cu regula
						triunghiului
					</b>
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
					<span className="highlight">&#8226;</span> se așează
					vectorii unul în continuarea celuilalt
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
					<span className="highlight">&#8226;</span> se unește prima
					origine cu ultima extremitate
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
					<span className="highlight">&#8226;</span> vectorul obținut
					este suma lor
					<br />
					<br />
					<h2>
						<span className="highlight">Scăderea</span>
					</h2>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="highlight">&#8226;</span> se folosește
					faptul că orice scădere devine o adunare <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="highlight">&#8226;</span> înmulțirea cu
					scalar: este un vector cu aceeași direcție , de α ori mai
					mare ,cu același sens dacă α e pozitiv și cu sens opus dacă
					e negativ.
				</p>
			</div>
			<br />
			<hr />
			<br />
			<Comments lessonID={window.location.href.split("/").reverse()[0]} />
		</div>
	);
}
