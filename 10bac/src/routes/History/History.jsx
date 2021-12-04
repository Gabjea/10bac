import React from "react";
import axios from "axios";
import globalVars from "./../../globalVars";
import { getCookie } from "./../../utils";

export default function History() {
	const [notes, setNotes] = React.useState(null);

	React.useEffect(() => {
		const url = `${globalVars.apiPrefix}/user/note`;
		axios.get(url, {
			headers: {
				Authorization: getCookie("jwt"),
			},
		}).then(res => {
            setNotes(res.data);
        }, err => {
            alert('error');
            console.error(err);
        })
	}, []);

	return (
		<div>
			<h1>History</h1>
			<br />
			{notes && notes.map(note => {
                return (
                    <div>
                        <hr />
                            <p>test:{note.test_title}</p>
                            <p>nota:{note.nota}</p>
                            <p>data:{note.date}</p>
                        <hr />
                    </div>
                );
            })}
		</div>
	);
}
