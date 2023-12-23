// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#af30c9", // Morado
		},
		secondary: {
			main: "#dc81f1", // Morado claro
		},
		background: {
			default: "#42084a", // Morado oscuro
			paper: "#7a2088", // Morado medio
		},
		text: {
			primary: "#f8e9fe", // Blanco
			secondary: "#f1d3fb", // Morado muy claro
		},
	},
});

export default theme;
