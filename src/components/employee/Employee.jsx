/* eslint-disable react/prop-types */
const Employee = ({ employees }) => (
	<div>
		<h4>Empleados</h4>
		{employees.map((employee) => (
			<div key={employee.RUT_TRABAJADOR}>
				<p>Nombre: {employee.NOMBRE_TRABAJADOR}</p>
				<p>RUT: {employee.RUT_TRABAJADOR}</p>
				<p>Edad: {employee.EDAD}</p>
				<p>Cargo: {employee.CARGO}</p>
				<p>Profesión: {employee.PROFESION}</p>
			</div>
		))}
	</div>
);

export default Employee;
