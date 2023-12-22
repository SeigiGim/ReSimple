import { PropTypes } from "prop-types";

const Employee = ({ employee }) => {
	const { NOMBRE_TRABAJADOR, RUT_TRABAJADOR, EDAD, CARGO, PROFESION } =
		employee;

	return (
		<>
			<div>
				<h2>Nombre: {NOMBRE_TRABAJADOR}</h2>
				<p>Rut: {RUT_TRABAJADOR}</p>
				<p>Edad: {EDAD}</p>
				<p>Cargo: {CARGO}</p>
				<p>Profesion: {PROFESION}</p>
			</div>
		</>
	);
};

Employee.propTypes = {
	employee: PropTypes.shape({
		NOMBRE_TRABAJADOR: PropTypes.string,
		RUT_TRABAJADOR: PropTypes.string,
		EDAD: PropTypes.number,
		CARGO: PropTypes.string,
		PROFESION: PropTypes.string,
	}).isRequired,
};

export default Employee;
