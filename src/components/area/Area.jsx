/* eslint-disable react/prop-types */
import { useTheme } from "@mui/material/styles";
import Employee from "../employee/Employee";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Area = ({ area, employees }) => {
	const theme = useTheme();

	return (
		<Grid item xs={12} sm={6} sx={{ width: "100%" }}>
			<Card sx={{ backgroundColor: theme.palette.background.paper }}>
				<CardContent>
					<Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
						{area.NOMBRE_AREA}
					</Typography>
					{employees.length === 0 ? (
						<Typography sx={{ color: theme.palette.text.secondary }}>
							Sin empleados
						</Typography>
					) : (
						<Employee employees={employees} />
					)}
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Area;
