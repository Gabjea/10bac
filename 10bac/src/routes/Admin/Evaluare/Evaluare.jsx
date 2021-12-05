import React from "react";
const qLen = 9;

export default function Evaluare() {
	const formRef1 = React.createRef();
	const formRef2 = React.createRef();
	const formRef3 = React.createRef();
	const formRef4 = React.createRef();
	const formRef5 = React.createRef();
	const formRef6 = React.createRef();
	const formRef7 = React.createRef();
	const formRef8 = React.createRef();
	const formRef9 = React.createRef();

    const handleFormSubmit = event => {
        event.preventDefault();
        for (let i = 1; i <= qLen; i++) {
            const elem = document.querySelectorAll(`#f${i}`);
            console.log(elem.length);
            for (let j = 0; j < 4; j++) {
                
            }
        }
    }

	return (
		<div>
			<h1>Mk quizzes</h1>
			<br />
			<hr />
			<form action="" onSubmit={handleFormSubmit}>
				<hr />
				1.
				<input type="text" id="f1" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				2.
				<input type="text" id="f2" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				3.
				<input type="text" id="f3" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				4.
				<input type="text" id="f4" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				5.
				<input type="text" id="f5" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				6.
				<input type="text" id="f6" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				7.
				<input type="text" id="f7" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				8.
				<input type="text" id="f8" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
				<hr />
				9.
				<input type="text" id="f9" />
				<br />
				variant1: <input type="text" />
				<br />
				variant2: <input type="text" />
				<br />
				variant3: <input type="text" />
				<br />
				varianta corecta:
				<select name="ok" id="var-ok">
					<option value="0">1</option>
					<option value="1">2</option>
					<option value="2">3</option>
				</select>
				<hr />
                <br />
                <input type="submit" value="submit!" />
			</form>
		</div>
	);
}
