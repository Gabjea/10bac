import React from "react";
import "./Lesson.css";
import Comments from "../../Comments/Comments";

export default function FunctiiDef() {
	return (
		<div className="Lesson">
			<h1>Funcții</h1>
			<br />
			<p>
				<h2>
					Noțiunea de <span className="highlight">funcție</span>
				</h2>
				<span className="highlight">
					<b>
						Definiție, domeniu de definiție, codomeniu, lege de
						corespondență, valoarea funcției f într-un punct x
					</b>
				</span>{" "}
				<br />
				<br />
				Fie două mulțimi nevide <span className="highlight">
					A
				</span> și <span className="highlight">B</span>. Dacă printr-un
				procedeu facem ca fiecărui element din mulțimea{" "}
				<span className="highlight">A</span> să îi corespundă un singur
				element din mulțimea <span className="highlight">B</span>,
				spunem că am definit o funcție de la{" "}
				<span className="highlight">A</span> la{" "}
				<span className="highlight">B</span> și notăm:{" "}
				<span className="highlight">f : A {"->"} B</span> (citim
				„funcția f definită pe mulțimea{" "}
				<span className="highlight">A</span>
				cu valori în mulțimea <span className="highlight">B</span>”);
				<br />
				<br />
				Mulțimea <span className="highlight">A</span> se numește{" "}
				<span className="highlight">domeniu de definiție</span>;
				Mulțimea <span className="highlight">B</span> se numește
				codomeniue sau mulțimea în care funcția ia valori;
				<span className="highlight">y = f(x)</span> se numește{" "}
				<span className="highlight">legea de corespondență</span>. Dacă
				x ∈ A, elementul f(x) ∈ B se numește imaginea lui x prin funcția
				f sau <span className="highlight">valoarea</span> funcției f în
				punctul x.
				<br />
				<br />
				<span className="highlight">
					<b>
						Moduri de definire a unei funcții (diagramă, tabel,
						formulă)
					</b>
				</span>{" "}
				<br />
				<br />
				<b>Funcțiile pot fi descrise în diverse moduri:</b>
				<br />
				<br />
				<span className="highlight">
					<b>a.</b>
				</span>{" "}
				Pintr-o diagramă, de exemplu: f : {"{10, 20, 30, 40}"}
				{" -> "}
				{"15, 25, 35, 45"}
				<br />
				<br />
				<span className="highlight">
					<b>b.</b>
				</span>{" "}
				Printr-un tabel, de exemplu: f : {"{ -2, -1, 0, 1, 2 }"}
				{" -> "}
				{"{ 5, 6, 7, 8, 9 }"}
				<br />
				<img src="./tabel.png" alt="" />
				<br />
				<span className="highlight">
					<b>c.</b>
				</span>{" "}
				Printr-o formulă, de exemplu: f : {"{ 0, 1, 2 }"}
				{" -> "}R, f(x) = -2x + 5.
			</p>
			<br />
			<hr />
			<br />
			<Comments lessonID={window.location.href.split("/").reverse()[0]} />
		</div>
	);
}
