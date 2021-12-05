import "./App.css";
import Nav from "./../src/routes/global/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Root from "./routes/Root/Root";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Profile from "./routes/Profile/Profile";
import Subject from "./routes/Subject/Subject";
import Lessons from "./routes/Lessons/Lessons";
import { isLoggedIn } from "./utils";
import InfoMoara from "./routes/Lessons/Pages/InfoMoara";
import EseuMoara from "./routes/Lessons/Pages/EseuMoara";
import InfoPlumb from "./routes/Lessons/Pages/InfoPlumb";
import EseuPlumb from "./routes/Lessons/Pages/EseuPlumb";
import VectorDef from "./routes/Lessons/Pages/VectorDef";
import VectorOp from "./routes/Lessons/Pages/VectorOp";
import FunctiiDef from "./routes/Lessons/Pages/FunctiiDef";
import Tests from "./routes/Tests/Tests";
import Quiz from "./routes/Lessons/Pages/Quiz/Quiz";
import Quizes from "./routes/Quizes/Quizes";
import Admin from "./routes/Admin/Admin";
import Teste from "./routes/Admin/Teste/Teste";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import History from "./routes/History/History";
import Evaluare from "./routes/Admin/Evaluare/Evaluare";
import Subiecte from "./routes/Admin/Subiecte/Subiecte";
import Evenimente from "./routes/Admin/Evenimente/Evenimente";
import Stripe from "./routes/Stripe/Stripe";
import NotFoundPg from "./routes/NotFoundPg/NotFoundPg";

const App = () => {
	const [navbarOpened, setNavbarOpened] = useState(true);
	const toggleNavbar = () => {
		setNavbarOpened(!navbarOpened);
	};

	return (
		<div className="App">
			<div className="header">
				<FontAwesomeIcon
					icon={faBars}
					className="hamburger"
					onClick={toggleNavbar}
				/>
				<h1>10bac</h1>
			</div>
			<Nav opened={navbarOpened} />

			<div
				className="content"
				style={{ width: isLoggedIn() ? "80%" : "100%" }}
			>
				<Routes>
					<Route exact path="/" element={<Root />} />
					<Route path="/materii" element={<Root />} />
					<Route
						path="/lectii/:id_materie/:id_capitol"
						element={<Lessons />}
					/>
					<Route path="/materie/:id" element={<Subject />} />
					<Route path="/subiecte" element={<Tests />} />
					<Route path="/istoric" element={<History />} />
					<Route path="/inregistrare" element={<Register />} />
					<Route path="/autentificare" element={<Login />} />
					<Route path="/profil" element={<Profile />} />
					<Route
						path="/lectie/informatii-generale-moara-cu-noroc"
						element={<InfoMoara />}
					/>
					<Route
						path="/lectie/comentariu-moara-cu-noroc"
						element={<EseuMoara />}
					/>
					<Route
						path="/lectie/informatii-generale-plumb"
						element={<InfoPlumb />}
					/>
					<Route
						path="/lectie/comentariu-plumb"
						element={<EseuPlumb />}
					/>
					<Route path="/lectie/definitie" element={<VectorDef />} />
					<Route path="/lectie/operatii" element={<VectorOp />} />
					<Route path="/lectie/notiuni" element={<FunctiiDef />} />
					<Route path="/quiz/:id" element={<Quiz />} />
					<Route path="/teste" element={<Quizes />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/admin/teste" element={<Teste />} />
					<Route path="/admin/quiz" element={<Evaluare />} />
					<Route path="/admin/subiecte" element={<Subiecte />} />
					<Route path="/admin/evenimente" element={<Evenimente />} />
					<Route path="/stripe" element={<Stripe />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
