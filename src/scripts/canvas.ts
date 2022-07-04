import './canvas.scss';
import { Pixel } from './pixel';

export class Canvas {

    static getMeshPixelId(rowId: number, colId: number): string {
        return `row${rowId}-col${colId}`;
    }

    private canvasElement: HTMLElement;

    constructor(root: HTMLElement) {
        const el = document.createElement('div');
        el.className = 'canvas-root';
        el.innerHTML = 'hello there from canvas el!';

        this.canvasElement = this.createHTMLMesh(el, 5, 6);

        root.appendChild(this.canvasElement);
    } 

    render(image: Pixel[][]): void {
        for (let rowId = 0; rowId < image.length; rowId++) {
            for (let colId = 0; colId < image[rowId].length; colId++) {
                const imagePixel = image[rowId][colId];
                const domPixel: HTMLElement | null = this.canvasElement.querySelector(`.${Canvas.getMeshPixelId(rowId, colId)}`);

                if (!domPixel) continue;

                domPixel.style.backgroundColor = `rgb(${imagePixel.getRGB().join(',')})`;
            }
        }
    }

    private createHTMLMesh(target: HTMLElement, width: number, height: number):HTMLElement {
        let mesh: HTMLElement = document.createElement('div');
        mesh.className = 'mesh';

        for (let rowId = 0; rowId < height; rowId++) {
            let colsInRow: HTMLElement = document.createElement('div');
            colsInRow.className = `row row${rowId}`;

            for (let colId = 0; colId < width; colId++) {
                const pixelEl = document.createElement('div');
                pixelEl.className = `pixel ${Canvas.getMeshPixelId(rowId, colId)}`;
                colsInRow.appendChild(pixelEl);
            }

            mesh.appendChild(colsInRow);
        }

        target.appendChild(mesh);
        return target;
    }
}