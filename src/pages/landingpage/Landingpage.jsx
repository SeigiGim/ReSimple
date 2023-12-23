import { useFetchEnterprises } from "../../services/useFetchEnterprises";
import { useFetchEmployees } from "../../services/useFetchEmployees";
import Enterprise from "../../components/enterprise/Enterprise";
import { Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LandingPage = () => {
	const { data: enterprisesData, loading: enterprisesLoading } =
		useFetchEnterprises();
	const { data: employeesData, loading: employeesLoading } =
		useFetchEmployees();
	const theme = useTheme();

	if (enterprisesLoading || employeesLoading) return "Cargando...";

	return (
		<Container
			maxWidth={false}
			sx={{ backgroundColor: theme.palette.background.default }}>
			<Grid container spacing={3}>
				{enterprisesData.map((enterprise) => (
					<Grid item xs={12} key={enterprise.ID_EMPRESA}>
						<Enterprise
							key={enterprise.ID_EMPRESA}
							enterprise={enterprise}
							employees={employeesData.filter(
								(employee) => employee.ID_EMPRESA === enterprise.ID_EMPRESA
							)}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default LandingPage;
