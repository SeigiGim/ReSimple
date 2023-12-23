/* eslint-disable react/prop-types */
import { useTheme } from "@mui/material/styles";
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
import Area from "../area/Area";

// En tu componente Enterprise
const Enterprise = ({ enterprise, employees }) => {
	const theme = useTheme();

	return (
		<Grid item xs={12}>
			<Card sx={{ backgroundColor: theme.palette.background.paper }}>
				<CardContent>
					<Accordion sx={{ backgroundColor: theme.palette.background.default }}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography
								variant="h3"
								sx={{ color: theme.palette.text.primary }}>
								{enterprise.NOMBRE_EMPRESA}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Grid container spacing={2}>
								{enterprise.AREAS.map((area) => (
									<Area
										key={area.ID_AREA}
										area={area}
										employees={employees.filter(
											(employee) => employee.ID_AREA === area.ID_AREA
										)}
									/>
								))}
							</Grid>
						</AccordionDetails>
					</Accordion>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Enterprise;
