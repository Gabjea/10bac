import React from "react";

export default function VectorDef() {
	return (
		<div>
			<h1>VECTORI</h1>
			<div id="main">
				<p>
					<span id="sub-title">VECTORI LIBERI:</span>
					se caracterizeaza prin: - modul directie si sens. Se numește
					direcție a dreptei d mulțimea formată din dreapta d și din
					toate dreptele paralele cu d. Spunem că două segmente au
					aceeași direcție dacă dreptele lor suport sunt paralele sau
					coincid. O pereche ordonată de puncte (A,B) din plan se
					numește segment orientat.
					<br />
					<img src="./showimage.png" alt="" />
					<br />
					A- se numește originea sau punctul de aplicație B- se
					numește extremitatea segmentului orientat sau vârf. Lungimea
					segmentului [AB] se numește modulul segmentului orientat.
					<br />
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
					<span id="sub-title">Se numește vector</span> mulțimea
					tuturor segmentelor orientate echipolente cu un segment
					orientat dat. Se numește versor sau vector unitate, vectorul
					având lungimea egală cu 1. Doi vectori sunt egali dacă au
					aceeași mărime, direcție și sens. Doi vectori sunt opuși
					dacă au aceeași mărime și direcție, dar sensuri opuse.
				</p>
			</div>
		</div>
	);
}
