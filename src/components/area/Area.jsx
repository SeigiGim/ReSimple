/* eslint-disable react/prop-types */
import Employee from "../employee/Employee";

const Area = ({ area, employees }) => (
	<div key={area.ID_AREA}>
		<h3>{area.NOMBRE_AREA}</h3>
		<Employee employees={employees} />
	</div>
);

export default Area;
