const getEmployees = async () => {
	const entity = "enterprises";
	const baseUrl = `https://resimpleapi.up.railway.app/data-${entity}`;

	const resp = await fetch(baseUrl);

	const data = await resp.json(); // Convertir la respuesta a JSON

	console.log(data); // Mostrar los datos en la consola
};

getEmployees();
