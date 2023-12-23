/* eslint-disable react/prop-types */
import { useTheme } from "@mui/material/styles";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Avatar,
	Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CakeIcon from "@mui/icons-material/Cake";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const Employee = ({ employees }) => {
	const theme = useTheme();

	return (
		<Grid container spacing={2}>
			{employees.map((employee) => (
				<Grid item xs={24} sm={24} lg={24} key={employee.RUT_TRABAJADOR}>
					<Card
						sx={{
							backgroundColor: theme.palette.background.default,
							maxWidth: "100%",
						}}>
						<CardContent>
							<Box display="flex" alignItems="center" mb={2}>
								<Avatar
									sx={{
										width: 24,
										height: 24,
										marginRight: 1,
										backgroundColor: theme.palette.primary.main,
									}}>
									<PersonIcon fontSize="small" />
								</Avatar>
								<Typography variant="h6">
									Nombre: {employee.NOMBRE_TRABAJADOR}
								</Typography>
							</Box>
							<Box display="flex" alignItems="center" mb={2}>
								<Avatar
									sx={{
										width: 24,
										height: 24,
										marginRight: 1,
										backgroundColor: theme.palette.secondary.main,
									}}>
									<AssignmentIndIcon fontSize="small" />
								</Avatar>
								<Typography>RUT: {employee.RUT_TRABAJADOR}</Typography>
							</Box>
							<Box display="flex" alignItems="center" mb={2}>
								<Avatar
									sx={{
										width: 24,
										height: 24,
										marginRight: 1,
										backgroundColor: theme.palette.primary.main,
									}}>
									<CakeIcon fontSize="small" />
								</Avatar>
								<Typography>Edad: {employee.EDAD}</Typography>
							</Box>
							<Box display="flex" alignItems="center" mb={2}>
								<Avatar
									sx={{
										width: 24,
										height: 24,
										marginRight: 1,
										backgroundColor: theme.palette.secondary.main,
									}}>
									<WorkIcon fontSize="small" />
								</Avatar>
								<Typography>Cargo: {employee.CARGO}</Typography>
							</Box>
							<Box display="flex" alignItems="center" mb={2}>
								<Avatar
									sx={{
										width: 24,
										height: 24,
										marginRight: 1,
										backgroundColor: theme.palette.primary.main,
									}}>
									<SchoolIcon fontSize="small" />
								</Avatar>
								<Typography>Profesión: {employee.PROFESION}</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default Employee;
