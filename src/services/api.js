import axios from "axios";

const fetchData = async (url) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error(`Error fetching data from ${url}`, error);
		return null;
	}
};

export const fetchEmployees = () =>
	fetchData("https://resimpleapi.up.railway.app/data-employees");

export const fetchEnterprises = async () => {
	const response = await fetchData(
		"https://resimpleapi.up.railway.app/data-enterprises"
	);

	return response.EMPRESAS;
};
