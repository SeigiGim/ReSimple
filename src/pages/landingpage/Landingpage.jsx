import { useFetchEnterprises } from "../../services/useFetchEnterprises";
import { useFetchEmployees } from "../../services/useFetchEmployees";
import Enterprise from "../../components/enterprise/Enterprise";

const LandingPage = () => {
	const { data: enterprisesData, loading: enterprisesLoading } =
		useFetchEnterprises();
	const { data: employeesData, loading: employeesLoading } =
		useFetchEmployees();

	if (enterprisesLoading || employeesLoading) return "Cargando...";

	return (
		<div>
			{enterprisesData.map((enterprise) => (
				<Enterprise
					key={enterprise.ID_EMPRESA}
					enterprise={enterprise}
					employees={employeesData.filter(
						(employee) => employee.ID_EMPRESA === enterprise.ID_EMPRESA
					)}
				/>
			))}
		</div>
	);
};

export default LandingPage;
