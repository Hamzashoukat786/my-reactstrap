import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<>
			<div className="App">
				<Button color="primary">primary</Button>{" "}
				<Button color="secondary">secondary</Button>{" "}
				<Button color="success">success</Button>{" "}
				<Button color="info">info</Button>{" "}
				<Button color="warning">warning</Button>{" "}
				<Button color="danger">danger</Button>{" "}
			</div>
		</>
	);
}

export default App;
