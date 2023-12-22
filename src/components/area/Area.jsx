import PropTypes from "prop-types";
import Employee from "../employee/Employee";

const Area = ({ area }) => {
	const { NOMBRE_AREA } = area;

	return (
		<>
			<div>
				<h3>{NOMBRE_AREA}</h3>
				{area.employees.map((employee) => (
					<Employee key={employee.RUT_TRABAJADOR} employee={employee} />
				))}
			</div>
		</>
	);
};

Area.propTypes = {
	area: PropTypes.shape({
		NOMBRE_AREA: PropTypes.string,
		employees: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default Area;
