import { Box } from '@mui/material';
import { useEffect, useRef } from 'react'

interface ICanvasProps {
  image: string
}

const Canvas = ({ image, ...props }: ICanvasProps) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!image) return

    const canvas = canvasRef.current;
    if (canvas == null) return;

    const context = canvas.getContext('2d');
    if (context == null) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.addEventListener("load", () => {
      context.drawImage(img, 0, 0);
    });

    img.src = image;

  }, [image])

  useEffect(() => {
    console.log(image)
  }, [image])

  return (
    <div>
      <Box>
        <canvas className='front-layer' ref={canvasRef} width={"635px"} height={"880px"} {...props}/>
        <canvas className='background-layer' ref={canvasRef} width={"635px"} height={"880px"} />

      </Box>
    </div>
  )
}

export default Canvas