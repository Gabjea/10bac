import React from "react";
import Comments from "../../Comments/Comments";

const InfoMoara = () => {
	return (
		<div className="Lesson">
			<h1>Ioan Slavici - Moara cu noroc</h1>
			<br />
			<div id="main">
				<p>
					Nuvela Moara cu noroc, scrisă de Ioan Slavici, a fost
					publicată în anul 1881, în volumul „Novele din popor”. Opera
					este considerată o nuvelă psihologică, de factură realistă,
					accentul fiind pus pe construcția personajelor și conflictul
					interior al acestora. De asemenea, textul scoate în evidență
					consecințele nefaste pe care le au dorința de îmbogățire și
					depășirea condiției sociale cu orice preț, având astfel un
					rol moralizator.
				</p>
				<p>
					Fiind o operă inclusă în programa pentru examenul de
					Bacalaureat, trebuie să ai în vedere toate detaliile
					importante, iar pentru a-ți facilita pregătirea, echipa
					Liceunet a elaborat acest eBook. Vei găsi o prezentare a
					celor mai semnificative momente care compun nuvela, vei afla
					care sunt trăsăturile de caracter ale lui Ghiță, Ana, Pintea
					sau bătrâna și cum evoluează relația de familie după ce
					Ghiță se împrietenește cu Lică Sămădăul, conflictele
					nuvelei, dar și cum evidențiază autorul lumea satului
					ardelenesc. De asemenea, vei putea citi o fișă de lectură a
					operei, un rezumat pe momentele subiectului, detalii despre
					perspectiva narativă, dar vei găsi și care sunt pașii pentru
					scrierea unui comentariu sau a unui eseu care respectă
					baremul de la examenul de Bacalaureat. Totodată, pentru a-ți
					fi mai ușor să reții detaliile semnificative, ți-am pregătit
					un material care conține cele mai semnificative secvențe ale
					nuvelei.
				</p>
			</div>
			<br />
			<hr />
			<br />
			<Comments lessonID={window.location.href.split("/").reverse()[0]} />
		</div>
	);
};

export default InfoMoara;
