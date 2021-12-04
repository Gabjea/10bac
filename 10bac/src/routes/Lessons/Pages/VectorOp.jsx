import React from "react";

export default function VectorOp() {
	return (
		<div>
			<div id="main">
				<p>
					Operații:
					<br />-<span id="sub-title">adunarea:</span>
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp; - cu regula paralelogramului:{" "}
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-se aduc
					vectorii în aceeași origine <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-se
					construiește un paralelogram care are două laturi exact cei
					doi vectori
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-rezultantă
					este suma celor doi vectori <br />
					&nbsp;&nbsp;&nbsp;&nbsp;-cu regula triunghiului: <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -se așează
					vectorii unul în continuarea celuilalt
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -se unește
					prima origine cu ultima extremitate
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-vectorul
					obținut este suma lor
					<br />- <span id="sub-title">scăderea</span>: <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- se
					folosește faptul că
					<img src={"./image003.png"} alt="" />
					deci orice scădere devine o adunare <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-înmulțirea
					cu scalar: este un vector cu aceeași direcție , de α ori mai
					mare ,cu același sens dacă α e pozitiv și cu sens opus dacă
					e negativ.
				</p>
			</div>
		</div>
	);
}
