import "./app.css";
import { fetchEmployees } from "./services/api";
import { fetchEnterprises } from "./services/api";

const App = () => {
	console.log(fetchEmployees());
	console.log(fetchEnterprises());
	return <div>App</div>;
};

export default App;
