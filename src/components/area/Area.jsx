/* eslint-disable react/prop-types */
import Employee from "../employee/Employee";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Area = ({ area, employees }) => {
	return (
		<Grid item xs={12} sm={6}>
			<Card>
				<CardContent>
					<Typography variant="h4">{area.NOMBRE_AREA}</Typography>
					{employees.length === 0 ? (
						<Typography>Sin empleados</Typography>
					) : (
						<Employee employees={employees} />
					)}
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Area;
