/* eslint-disable react/prop-types */
import Area from "../area/Area";

const Enterprise = ({ enterprise, employees }) => (
	<div key={enterprise.ID_EMPRESA}>
		<h2>{enterprise.NOMBRE_EMPRESA}</h2>
		{enterprise.AREAS.map((area) => (
			<Area
				key={area.ID_AREA}
				area={area}
				employees={employees.filter(
					(employee) => employee.ID_AREA === area.ID_AREA
				)}
			/>
		))}
	</div>
);

export default Enterprise;
