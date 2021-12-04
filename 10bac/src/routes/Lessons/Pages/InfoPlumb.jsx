import React from "react";
import Comments from "../../Comments/Comments";

export default function InfoPlumb() {
	return (
		<div className="Lesson">
			<h1>Plumb</h1>
			<br />
			<div id="main">
				Plumb este o poezie scrisă de George Bacovia în 1900, finisată
				în 1902 și publicată în 1916 în revista „Versuri”, sub
				pseudonimul George Andoni. Discursul poetic este conceput sub
				forma unui monolog tragic în care poetul exprimă o stare
				sufletească de disperare, și lipsă a oricărei speranțe. Poezia
				produce o puternică impresie la citirea ei de către autor în
				1903 la salonul literar al lui Alexandru Macedonski.
				<br />
				<span id="sub-title">Context</span>
				<br />
				Poezia a fost scrisă pentru prima dată în 1900. La vremea aceea,
				poetul, în vârstă de 19-20 de ani, era în cursul de a aplica la
				Școala Militară din Iași, de unde se retrase după un trimestru.
				Un an mai târziu se înscrise la gimnaziul din Bacău. Acesta luă
				cunoștința cu Alexandru Macedonski în 1902 și se formă artistic
				între anii 1903–1904 în mediul simbolist, frecventând cenaclul
				poetului. Rezultatul, volumul de poezii Plumb (1916), reprezintă
				rodul selecții dintre 50 de poeme, selecție determinată de o
				anumită fizionomie poetică care coincidea, în mare măsură, cu
				norma estetică dominantă la începutul secolului XX. George
				Bacovia dorise să devină un simbolist, un urmaș al lui
				Macedonski și al lui Tradem (pseudonimul lui Traian Demetrescu)
				și un emul al lui Edgar Allan Poe, Charles Baudelaire, Paul
				Verlaine și Maurice Rollinat.
			</div>
			<br />
			<hr />
			<br />
			<Comments lessonID={window.location.href.split("/").reverse()[0]} />
		</div>
	);
}
