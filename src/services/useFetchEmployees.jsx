import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchEmployees = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(
					"https://resimpleapi.up.railway.app/data-employees"
				);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching employees", error);
			}
		};

		fetchData();
	}, []);

	return { data, loading };
};
