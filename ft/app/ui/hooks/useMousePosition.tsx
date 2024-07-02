import {MouseEventHandler} from "react";
import {setHeaderText} from "@/lib/setTextToElement";

const drawOnCanvas = (
    canvas: React.MutableRefObject<HTMLCanvasElement | null>
): [(event: React.MouseEvent<HTMLCanvasElement>) => void,
    (event: React.MouseEvent<HTMLCanvasElement>) => void,
    (event: React.MouseEvent<HTMLCanvasElement>) => void] => {

    var paint: boolean = false;
    var X: number = 0;
    var Y: number = 0;

    const mousePosition = (event: React.MouseEvent<HTMLCanvasElement>) => {

        return [event.clientX - (canvas?.current?.offsetLeft || 0),
            event.clientY - (canvas?.current?.offsetTop || 0)];
    }

    const currentPosition = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const [x, y] = mousePosition(event);
        X = x;
        Y = y;
    }

    const startPainting = (event: React.MouseEvent<HTMLCanvasElement>) => {
        paint = true;
        currentPosition(event);
    }

    const stopPainting = (event: React.MouseEvent<HTMLCanvasElement>) => {
        paint = false;
    }

    const sketch = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!paint) return;
        const ctx = canvas?.current?.getContext('2d')
        if(!ctx) return;

        setHeaderText("Drawing on Canvas with Mouse. X: " + X + " Y: " + Y);

        ctx.beginPath()
        ctx.strokeStyle = 'black';
        ctx.moveTo(X, Y);
        currentPosition(event);
        ctx.lineTo(X, Y);
        ctx.stroke();

    }


    return [startPainting, stopPainting, sketch];
};

export default drawOnCanvas;