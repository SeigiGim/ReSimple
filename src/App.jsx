import { ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/landingpage/Landingpage";
import theme from "./theme"; // Importa tu tema

function App() {
	return (
		<ThemeProvider theme={theme}>
			<LandingPage />
		</ThemeProvider>
	);
}

export default App;
