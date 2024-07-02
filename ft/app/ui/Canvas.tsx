import React, {useRef} from "react";
import drawOnCanvas from "./hooks/useMousePosition";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [start, stop, sketch] = drawOnCanvas(canvasRef);

    return (
        <>
                <canvas
                    id={"canvas"}
                    className={"object-none  bg-slate-300"}
                    ref={canvasRef}
                    width="400"
                    height="350"
                    style={{border: "2px solid black"}}
                    onMouseDown={event => {
                        start(event);
                    }}
                    onMouseUp={event => {
                        stop(event);
                    }}
                    onMouseMove={event => {
                        sketch(event);
                    }}
                ></canvas>

                <button
                    onClick={() => {
                        if (canvasRef.current) {
                            const ctx = canvasRef.current.getContext("2d");
                            ctx?.clearRect(0, 0, 400, 350);
                        }
                    }}
                >
                    CLEAR
                </button>
        </>
    );
}