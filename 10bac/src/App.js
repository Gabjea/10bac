import "./App.css";
import Nav from "./../src/routes/global/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./routes/Root/Root";

function App() {
	return (
		<div className="App">
            <Nav />
				<Routes>
					<Route exact path="/" element={<Root />} />
                    <Route exact path="/subiecte" element={<Root />} />
                    <Route exact path="/materii" element={<Root />} />
					<Route exact path="/profil" element={<Root />} />
                    <Route exact path="/istoric" element={<Root />} />
				</Routes>
		</div>
	);
}

export default App;
