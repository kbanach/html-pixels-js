import { Canvas } from "./canvas";
import { Pixel } from "./pixel";

const personJumpingImg = [
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
].map((row) =>
    row.map((pxl) =>
        new Pixel().setRGB(pxl ? 0 : 255, pxl ? 0 : 255, pxl ? 0 : 255)
    )
);

const personStanding = [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
].map((row) =>
    row.map((pxl) =>
        new Pixel().setRGB(pxl ? 0 : 255, pxl ? 0 : 255, pxl ? 0 : 255)
    )
);



export class Render {
    private readonly canvas: Canvas;

    currentImage = personJumpingImg;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
    }

    render() {
        this.canvas.render(this.currentImage);

        if (this.currentImage === personJumpingImg) {
            this.currentImage = personStanding;
        } else {
            this.currentImage = personJumpingImg;
        }

        setTimeout(() => {
            this.render();
        }, 200)
    }
}