import { useEffect, useState } from 'react';
import './App.css';
import { Box, Button, Input } from '@mui/material';
import Canvas from './components/Canvas';
const socket = new WebSocket('ws://localhost:8080');

function App() {
	const [uploadedFile, setUploadedFile] = useState<any>();

	useEffect(() => {
		socket.onmessage = function (event) {
			const data = JSON.parse(event.data);
			console.log(data)
			if (data.type === 'notification') {
				alert(data.message); // Exibir a notificação
			}
		};
	}, [socket])



	// useEffect(() => {
	// 	console.log(uploadedFile);
	// }, [uploadedFile])

	const handleOnChange = async (e: any) => {
		const file = e.target.files[0];
		const filereader = new FileReader();
		filereader.readAsDataURL(file);
		filereader.onload = (_e: any) => {
			// console.log(filereader.result);
			setUploadedFile(filereader.result);
			// const downloadLink = document.createElement("a");
			// downloadLink.href = `${filereader.result}`;
			//       downloadLink.download = file.name;
			//       downloadLink.click();
			//       downloadLink.remove();
		};
		// setUploadedFile(file);
	}

	return (
		<Box className="App">
			<Button component="label">
				upload file
				<Input type='file'
					sx={{ clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)', height: 1, overflow: 'hidden', position: 'absolute', bottom: 0, left: 0, whiteSpace: 'nowrap', width: 1, }}
					onChange={handleOnChange} />
			</Button>
			<Canvas image={uploadedFile} />
		</Box>
	);
}

export default App;
