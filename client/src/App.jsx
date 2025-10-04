import './index.css'
import {AppBar, Box, Toolbar, Typography, IconButton, Button, TextField, List, ListItem, ListItemText, ListItemButton, CssBaseline} from '@mui/material';
import Menu from './components/Menu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Bar(){
	return(
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" class='bg-transparent'>
				<Toolbar variant="dense">
					<Menu/>
					<Typography variant="h5" color="inherit" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
						SpeakAble
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

function InputBox(props){
	return(
      <div class="flex-1 bg-slate-800 p-8 rounded-4xl shadow-2xl justify-between flex flex-col">
		<div>
			<TextField
				fullWidth
				label="Input"
				variant="outlined"
			/>
			<List>
			  <ListItem disablePadding>
				<ListItemButton>
				  <ListItemText primary="test" />
				</ListItemButton>
			  </ListItem>
			  <ListItem disablePadding>
				<ListItemButton component="a" href="#simple-list">
				  <ListItemText primary="test2" />
				</ListItemButton>
			  </ListItem>
			</List>
		</div>

		{props.mic &&
			<div class='self-center'>
				<Button variant="contained" disableRipple='true' sx={{textTransform: 'none'}}>
				  <MicNoneIcon />Record
				</Button>
			</div>
		}
      </div>
	);
}

function Body(){
  return (
    <div class="flex flex-col sm:flex-row w-full space-y-4 sm:space-x-10 sm:space-y-0 sm:p-12 p-8 mt-5 sm:h-7/10 h-9/10">
	  	<InputBox mic={1}/>
		<div class="self-center hidden sm:block">
			<IconButton>
			  <ArrowRightAltIcon/>
			</IconButton>
		</div>
		<div class="self-center sm:hidden">
			<IconButton>
			  <ArrowUpwardIcon/>
			</IconButton>
		</div>
	  	<InputBox/>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
		<meta name="viewport" content="initial-scale=1, width=device-width" />
	  <CssBaseline />
	  	<div class='h-screen'>
			<Bar/>
			<Body/>
		  </div>
    </ThemeProvider>
  );
}

export default App
