import './index.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from './components/Menu'
import TextField from '@mui/material/TextField';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // For mobile
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'; // For desktop

function Bar(){
	return(
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" class='bg-transparent '>
				<Toolbar variant="dense">
					<Menu/>
					<Typography variant="h6" color="inherit" component="div" class='text-xl'>
						Speech Helper
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

function Body(){
  return (
    <div class="flex flex-col sm:flex-row w-full space-y-4 sm:space-x-10 sm:space-y-0 sm:p-12 p-8 mt-8 h-full">
      <div class="flex-1 h-full bg-gray-300 p-8 h-full">
        <TextField
          fullWidth
		  label="Input"
          variant="outlined"
        />
      </div>

		<div class="">
			<IconButton 
				aria-label="swap content" 
				className="rounded-full border border-gray-300 shadow-lg"
				style={{ zIndex: 20 }} 
			>
				<ArrowDownwardIcon className="text-gray-600 text-3xl sm:hidden" />
			  <ArrowRightAltIcon className="text-gray-600 text-3xl hidden sm:block" />
			</IconButton>
		</div>

      <div class="flex-1 h-full">
        <TextField
          fullWidth
          multiline
		  label="Output"
          rows={10}
          variant="outlined"
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <>
		<meta name="viewport" content="initial-scale=1, width=device-width" />
	  	<div class=''>
			<Bar/>
			<Body/>
	  	</div>
    </>
  );
}

export default App
