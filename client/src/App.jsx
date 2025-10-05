import './index.css'
import {useState} from 'react'
import {Divider, AppBar, Box, Toolbar, Typography, IconButton, Button, TextField, List, ListItem, ListItemText, ListItemButton, CssBaseline} from '@mui/material';
import Menu from './components/Menu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Logo from './images/SpeakAbleLogoNoText.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Bar(){
	return(
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', backgroundImage: 'none' }}>
        <Toolbar variant="dense">
          <Menu />
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5,}}>
            <img src={Logo} style={{ height: '40px' }} alt="SpeakAble Logo" />
            <Typography variant="h5" color="inherit" component="span" sx={{ fontWeight: 'bold' }}>
              SpeakAble
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
	);
}

function InputBox(){
	const [input, setInput] = useState("")
	const [hist, setHist] = useState([])
	const keyDown = (event) => {
		if(event == 'Enter'){
			setHist(hist => [input, ...hist])
			setInput("");
		}
	}

	return(
      <div class="flex-1 bg-slate-800 p-8 rounded-4xl shadow-2xl justify-between flex flex-col">
		<div class='h-full mb-5'>
			<input
			class='focus:outline-none focus:border-b-gray-300 mt-5 pl-3 pb-5 border-b-2 w-full border-slate-500'
			placeholder="Press Enter To Input"
			value={input}
			onChange={t=>setInput(t.target.value)}
			onKeyDown={k=>keyDown(k.key)}
			/>
			<div class='m-h-full'>
				<List sx={{ height: "100%", maxHeight: 250, overflow: 'auto' }}>
				{hist.map(item =>
				  <ListItem disablePadding>
					<ListItemButton component="a" href="#simple-list"
					onClick={() => setInput(item)}>
					  <ListItemText primary={item} />
					</ListItemButton>
				  </ListItem>
				)}
				</List>
			</div>
		</div>
		<div class='self-center'>
			<Button variant="contained" disableRipple='true' sx={{textTransform: 'none'}}>
			  <MicNoneIcon />Record
			</Button>
		</div>
      </div>
	);
}

function OutputBox(){
	return(
      <div class="flex-1 bg-slate-800 p-8 rounded-4xl shadow-2xl justify-between flex flex-col">
		<div>
			<div class='focus:outline-none mt-5 pl-3 pb-5 border-b-2 w-full border-slate-500'>
              Response
            </div>
			<Divider/>
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
      </div>
	);
}

function Body(){
  return (
    <div class="flex flex-col sm:flex-row w-full space-y-4 sm:space-x-10 sm:space-y-0 sm:p-12 p-8 mt-5 sm:h-7/10 h-9/10">
	  	<InputBox/>
		<div class="self-center hidden sm:block">
			<IconButton size='large'>
			  <ArrowRightAltIcon/>
			</IconButton>
		</div>
		<div class="self-center sm:hidden">
			<IconButton size='large'>
			  <ArrowUpwardIcon/>
			</IconButton>
		</div>
	  	<OutputBox/>
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
