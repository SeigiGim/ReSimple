export const groupData = (employees, enterprises) => {
	return enterprises.reduce((acc, enterprise) => {
		acc[enterprise.id] = {
			...enterprise,
			areas: employees.filter(
				(employee) => employee.enterpriseId === enterprise.id
			),
		};
		return acc;
	}, {});
};
