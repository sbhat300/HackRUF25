import './index.css'
import {useState, useEffect} from 'react'
import {Divider, AppBar, Box, Toolbar, Typography, IconButton, Button, TextField, List, ListItem, ListItemText, ListItemButton, CssBaseline} from '@mui/material';
import Menu from './components/Menu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
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
	const update = async() => {
		console.log(input);
		if(input == ""){
			return;
		}
		console.log(input);
		fetch('http://127.0.0.1:8000/audio/generate_from_gemini/', {
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"

			},
			method: "POST",
			body: JSON.stringify({
			  "prompt": input,
			  "conversation_id": props.sessionId
			}),
		})
		.then(response => response.json())
		.then(data => {
			if(data.message == false){

				console.log("update conversation error");
			}
		});
		setInput("");
		console.log(123);
	}

	const refresh = async () => {
		console.log(456)
		setHist([]);
		props.setRep([]);
		fetch('http://localhost:8000/db/get-conversation/'+props.sessionId, {
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
					props.setRep(rep => [i.message, ...rep]);
				}
			}
		})
	}
	
	useEffect(() => {
		if(props.sessionId == 0){
			return;
		}
		console.log(props.sessionId);
		update()
		.then(refresh())
		.then(setInput(""));
	}, [props.sessionId]);

	const createSession = async () => {
		fetch('http://127.0.0.1:8000/db/create-conversation/', {
			headers: {
				"Accept": "application/json",
			},
			method: "POST",
		})
		.then(response => response.json())
		.then(data => {
			if(data.message == false){
				console.log("create conversation error");
			}
			else{
				props.setSessionId(data.conversation_id);
				return data.conversation_id;
			}
		});
	}

	const keyDown = async (event) => {
		if(event == 'Enter'){
			if(props.sessionId == 0){
				console.log("test: "+input);
				createSession();
			}
			else{
				update()
				.then(refresh())
				.then(setInput(""));
			}
		}
	}

	const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({type: 'audio/mp4'})

	const [audioBlob, setAudioBlob] = useState(null);

	useEffect(() => {
    if (!mediaBlobUrl) return;
    
    fetch(mediaBlobUrl)
        .then(response => response.blob())
        .then(async (blob) => {
            let sessionId = props.sessionId;
            if (sessionId === 0) {
                sessionId = "91bec6df-8c2e-49f6-a9b5-61ffa677267d";
                props.setSessionId(sessionId);
            }
            
            const formData = new FormData();
            formData.append('data', '{"conversation_id":"91bec6df-8c2e-49f6-a9b5-61ffa677267d"}');
            formData.append('file', blob, 'recording.wav');
            
            try {
                const response = await fetch('http://127.0.0.1:8000/audio/generate-from-gemini-voice/', {
                    method: "POST",
                    body: formData
                });
                
                const data = await response.json();
                console.log('Response:', data);
				console.log()
            } catch (error) {
                console.error('Error:', error);
            }
        })
        .catch(error => console.error('Blob fetch error:', error));
}, [mediaBlobUrl]);


	return(
      <div class="flex-1 bg-slate-800 p-8 rounded-4xl shadow-2xl justify-between flex flex-col order-3 md:order-none ">
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
			<audio src={mediaBlobUrl} controls autoPlay />
			<Button onClick={startRecording} variant="contained" disableRipple='true' sx={{textTransform: 'none'}}>
			  <MicNoneIcon />Record
			</Button>
			<Button onClick={stopRecording} variant="contained" disableRipple='true' sx={{textTransform: 'none'}}>
			  Stop
			</Button>
		</div>
      </div>
	);
}

function OutputBox(props){
	function speak(){
		console.log(props.rep);
		if(props.rep.length == 0){
			return;
		}
		const ctx = new AudioContext();
		let audio;
		fetch('http://127.0.0.1:8000/audio/tts/?prompt='+props.rep[0], {
			headers: {
				"Accept": "application/json",
			},
			method: "GET",
		})
		.then(response => response.arrayBuffer())
		.then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
		.then(decodedAudio => {
			audio = decodedAudio;
			  const playSound = ctx.createBufferSource();
			  playSound.buffer = audio;
			  playSound.connect(ctx.destination);
			  playSound.start(ctx.currentTime);

		})
	}

	return(
      <div class="flex-1 bg-slate-800 p-8 rounded-4xl shadow-2xl justify-between flex flex-col order-1 md:order-none ">
		<div class='h-full mb-5'>
			<div class='focus:outline-none mt-5 pl-3 pb-5 border-b-2 w-full border-slate-500'>
				{props.rep.length==0 ? 'AI Response' : props.rep[0]}
            </div>
			<Divider/>
			<div class='m-h-full'>
				<List sx={{ height: "100%", maxHeight: 250, overflow: 'auto' }}>
					{props.rep.slice(1).map((item, index) =>
					  <ListItem disablePadding key={index}>
						<ListItemButton component="a" href="#simple-list">
						  <ListItemText primary={item} />
						</ListItemButton>
					  </ListItem>
					)}
				</List>
			</div>
		</div>
		<div class='self-center'>
			<Button variant="contained" disableRipple='true' sx={{textTransform: 'none'}} onClick={() => speak()}>
			  <VolumeUpIcon />Speak
			</Button>
		</div>

      </div>
	);
}

function Body(props){
	const [rep, setRep] = useState([])

  return (
    <div class="flex flex-col sm:flex-row w-full space-y-4 sm:space-x-10 sm:space-y-0 sm:p-12 p-8 mt-5 sm:h-7/10 h-9/10">
	  	<InputBox sessionId={props.sessionId} setSessionId={props.setSessionId} rep={rep} setRep={setRep}/>
		<div class="self-center hidden sm:block order-2 md:order-none ">
			<IconButton size='large'>
			  <ArrowRightAltIcon/>
			</IconButton>
		</div>
		<div class="self-center sm:hidden order-2 md:order-none ">
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
