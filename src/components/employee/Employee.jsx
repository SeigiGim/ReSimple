/* eslint-disable react/prop-types */
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

const Employee = ({ employees }) => (
	<Grid container spacing={2}>
		{employees.map((employee) => (
			<Grid item xs={12} sm={6} key={employee.RUT_TRABAJADOR}>
				<Card>
					<CardContent>
						<Box display="flex" alignItems="center">
							<Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
								<PersonIcon fontSize="small" />
							</Avatar>
							<Typography variant="h6" noWrap>
								Nombre: {employee.NOMBRE_TRABAJADOR}
							</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
								<AssignmentIndIcon fontSize="small" />
							</Avatar>
							<Typography noWrap>RUT: {employee.RUT_TRABAJADOR}</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
								<CakeIcon fontSize="small" />
							</Avatar>
							<Typography noWrap>Edad: {employee.EDAD}</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
								<WorkIcon fontSize="small" />
							</Avatar>
							<Typography noWrap>Cargo: {employee.CARGO}</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
								<SchoolIcon fontSize="small" />
							</Avatar>
							<Typography noWrap>Profesión: {employee.PROFESION}</Typography>
						</Box>
					</CardContent>
				</Card>
			</Grid>
		))}
	</Grid>
);

export default Employee;
