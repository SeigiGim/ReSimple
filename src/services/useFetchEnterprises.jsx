import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchEnterprises = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://resimpleapi.up.railway.app/data-enterprises"
				);
				setData(response.data.EMPRESAS);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching enterprises", error);
			}
		};

		fetchData();
	}, []);

	return { data, loading };
};
