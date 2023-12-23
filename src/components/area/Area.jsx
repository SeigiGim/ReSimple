/* eslint-disable react/prop-types */
import Employee from "../employee/Employee";

const Area = ({ area, employees }) => {
	return (
		<div key={area.ID_AREA}>
			<h3>{area.NOMBRE_AREA}</h3>
			{employees.length === 0 ? (
				<p>Sin empleados</p>
			) : (
				<Employee employees={employees} />
			)}
		</div>
	);
};

export default Area;
