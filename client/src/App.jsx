import './index.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './components/Menu'

function Bar(){
	return(
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" class='bg-transparent h-48'>
				<Toolbar variant="dense">
				<Menu/>

				<Typography variant="h6" color="inherit" component="div" class='text-4xl'>
					Speech Helper
				</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

function App() {
  return (
    <>
		<meta name="viewport" content="initial-scale=1, width=device-width" />
	  	<Bar/>
		<Menu />
    </>
  )
}

export default App
