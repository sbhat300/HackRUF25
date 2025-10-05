import './index.css'
import {useState, useEffect} from 'react'
import {Divider, AppBar, Box, Toolbar, Typography, IconButton, Button, TextField, List, ListItem, ListItemText, ListItemButton, CssBaseline} from '@mui/material';
import Menu from './components/Menu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Logo from './images/SpeakAbleLogoNoText.png'
import {useReactMediaRecorder} from "react-media-recorder";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Bar(props){
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

function InputBox(props){
	const [input, setInput] = useState("")
	const [hist, setHist] = useState([])
	useEffect(() => {
		setHist([]);
		if(props.sessionId == 0){
			return;
		}
		const get = () => {
			fetch('http://127.0.0.1:8000/db/get-conversation/'+props.sessionId, {
				headers: {
					"Accept": "application/json",
				},
				method: "GET",
			})
			.then(response => response.json())
			.then(data => {
				if(data.messages.length == 0){
					return;
				}
				for(const i of data.messages){
					if(i.role == 'user'){
						setHist(hist => [i.message, ...hist])
					}
					else{
						props.setRep(props.rep => [i.message, ...props.rep]);
					}
				}
			})
		}	
		get();
	}, [props.sessionId]);
	
	const createSession = async () => {
		const id = "91bec6df-8c2e-49f6-a9b5-61ffa677267d";
		props.setSessionId(id)
		return id
		//fetch('http://127.0.0.1:8000/db/create-conversation/', {
			//headers: {
				//"Accept": "application/json",
			//},
			//method: "POST",
		//})
		//.then(response => response.json())
		//.then(data => {
			//if(data.message == false){
				//console.log("create conversation error");
			//}
			//else{
				//props.setSessionId(data.conversation_id);
			//}
		//});
	}

	const keyDown = async (event) => {
		if(event == 'Enter'){
			let id = 0;
			if(props.sessionId == 0){
				id = await createSession();
				console.log(id);
			}
			setHist(hist => [input, ...hist])
			fetch('http://127.0.0.1:8000/audio/generate_from_gemini/', {
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				method: "POST",
				body: JSON.stringify({
				  "prompt": input,
				  "conversation_id": id
				}),
			})
			.then(response => response.json())
			.then(data => {
				if(data.message == false){
					console.log("update conversation error");
				}
			});
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
				{hist.map((item, index) =>
				  <ListItem disablePadding key={index}>
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

function OutputBox(props){
	return(
      <div class="flex-1 bg-slate-800 p-8 rounded-4xl shadow-2xl justify-between flex flex-col">
		<div>
			<div class='focus:outline-none mt-5 pl-3 pb-5 border-b-2 w-full border-slate-500'>
              Response
            </div>
			<Divider/>
			<div class='m-h-full'>
				<List sx={{ height: "100%", maxHeight: 250, overflow: 'auto' }}>
					{props.rep.map((item, index) =>
					  <ListItem disablePadding key={index}>
						<ListItemButton component="a" href="#simple-list"
						onClick={() => setInput(item)}>
						  <ListItemText primary={item} />
						</ListItemButton>
					  </ListItem>
					)}
				</List>
			</div>
		</div>
      </div>
	);
}

function Body(props){
	const [rep, setRep] = useState([])

  return (
    <div class="flex flex-col sm:flex-row w-full space-y-4 sm:space-x-10 sm:space-y-0 sm:p-12 p-8 mt-5 sm:h-7/10 h-9/10">
	  	<InputBox sessionId={props.sessionId} setSessionId={props.setSessionId} rep={rep} setRep={setRep}/>
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
	  	<OutputBox rep={rep} setRep={setRep}/>
    </div>
  );
};

function App() {
	const [sessionId, setSessionId] = useState(0);
	const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({video:false})
  return (
    <ThemeProvider theme={darkTheme}>
		<meta name="viewport" content="initial-scale=1, width=device-width" />
	  <CssBaseline />
	  	<div class='h-screen'>
			<Bar sessionId={sessionId} setSessionId={setSessionId}/>
			<Body sessionId={sessionId} setSessionId={setSessionId}/>
		  </div>
    </ThemeProvider>
  );
}

export default App
