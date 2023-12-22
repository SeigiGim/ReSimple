import { useEffect, useState } from "react";
import { fetchEmployees, fetchEnterprises } from "../../services/api";
import { groupData } from "../../services/groupData";
import { Enterprise } from "../../components";
const Landingpage = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const employees = await fetchEmployees();
			const enterprises = await fetchEnterprises();

			const agrupedData = groupData(employees, enterprises);

			setData(agrupedData);
		};
		fetchData();
	}, []);

	return (
		<>
			<div>
				{Object.values(data).map((enterprise) => (
					<Enterprise
						key={enterprise.id}
						enterprise={enterprise}
						employees={data[enterprise.id].areas}
					/>
				))}
			</div>
		</>
	);
};

export default Landingpage;
