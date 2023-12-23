/* eslint-disable react/prop-types */
import { useTheme } from "@mui/material/styles";
import Employee from "../employee/Employee";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Area = ({ area, employees }) => {
	const theme = useTheme();

	return (
		<Grid item xs={12} sm={6} sx={{ width: "100%" }}>
			<Card sx={{ backgroundColor: theme.palette.background.paper }}>
				<CardContent>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography
								variant="h4"
								sx={{ color: theme.palette.text.primary }}>
								{area.NOMBRE_AREA}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{employees.length === 0 ? (
								<Typography sx={{ color: theme.palette.text.secondary }}>
									Sin empleados
								</Typography>
							) : (
								<Employee employees={employees} />
							)}
						</AccordionDetails>
					</Accordion>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Area;
