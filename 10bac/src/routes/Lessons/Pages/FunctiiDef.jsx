import React from "react";

export default function FunctiiDef() {
	return (
		<div id="main">
			<h1>Functii</h1>
			<p>
            <span id="sub-title">NOȚIUNEA DE FUNCȚIE -definiție, domeniu de definiție, codomeniu, lege de corespondență,
                valoarea funcției f într-un punct x:</span> <br/>
            Fie două mulțimi nevide A și B. Dacă printr-un procedeu facem ca fiecărui element din mulțimea A să îi
            corespundă un singur element din mulțimea B, spunem că am definit o funcție de la A la B și notăm:

            f:A{'->'}B (citim „funcția f definită pe mulțimea A cu valori în mulțimea B”);
            Mulțimea A se numește DOMENIU DE DEFINIȚIE;
            Mulțimea B se numește CODOMENIU sau mulțimea în care funcția ia valori;
            y=f(x) se numește LEGEA DE CORESPONDENȚĂ.
            OBS: Dacă x∈A, elementul f(x)∈B se numește imaginea lui x prin funcția f sau VALOAREA funcției f în punctul
            x.

            EXEMPLU: EX. 1) Fie f:{'-1,0,1'}{'->'}{'1,2,3'}, f(x)=x+2. Precizați domeniul de definiție, codomeniul și calculați
            valoarea funcției în punctul x=0.
            <br/>
            <span id="sub-title">MODURI DE DEFINIRE A UNEI FUNCȚII (diagramă, tabel, formulă):
            </span><br/>
            Funcțiile pot fi descrise în diverse moduri:

            a. printr-o DIAGRAMĂ

            EXEMPLU: f:{'10,20,30,40'}{'->'}{'15,25,35,45'}
            <br/>
            <img src="./diagrama.png" alt=""/> <br/>
            b. printr-un TABEL

            EXEMPLU: f:{'-2,-1,0,1,2'}{'->'}{'5,6,7,8,9'}

            <br/><img src="./tabel.png" alt=""/><br/>
            c. printr-o FORMULĂ

            EXEMPLU: f:{'0,1,2'}{'->'}R, f(x)=-2x+5.
            <br/>
            <span id="sub-title">FUNCȚIA NUMERICĂ: </span> <br/>
            Funcția NUMERICĂ are DOMENIUL DE DEFINIȚIE și CODOMENIUL submulțimi ale lui R adică MULȚIMI DE NUMERE.

            EXEMPLU: f:{'1,2,3'}{'->'}{'5,9,13'} este o funcție numerică.
            </p>
		</div>
	);
}
