import PropTypes from "prop-types";
import Area from "../area/Area";

const Enterprise = ({ enterprise }) => {
	const { NOMBRE_EMPRESA } = enterprise;

	return (
		<>
			<div>
				<h2>{NOMBRE_EMPRESA}</h2>
				{enterprise.areas.map((area) => (
					<Area key={area.ID_AREA} area={area} />
				))}
			</div>
		</>
	);
};

Enterprise.propTypes = {
	enterprise: PropTypes.shape({
		NOMBRE_EMPRESA: PropTypes.string,
		areas: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default Enterprise;
