import './canvas.scss';

export class Canvas {
    private canvasElement: HTMLElement;

    constructor(root: HTMLElement) {
        const el = document.createElement('div');
        el.className = 'canvas-root';
        el.innerHTML = 'hello there from canvas el!';

        this.canvasElement = this.createHTMLMesh(el, 5, 6);

        root.appendChild(this.canvasElement);
    } 

    private createHTMLMesh(target: HTMLElement, width: number, height: number):HTMLElement {
        let mesh: HTMLElement = document.createElement('div');
        mesh.className = 'mesh';

        for (let rowId = 0; rowId < height; rowId++) {
            let colsInRow: HTMLElement = document.createElement('div');
            colsInRow.className = `row row${rowId}`;

            for (let colId = 0; colId < width; colId++) {
                const pixelEl = document.createElement('div');
                pixelEl.className = `pixel row${rowId}-col${colId}`;
                colsInRow.appendChild(pixelEl);
            }

            mesh.appendChild(colsInRow);
        }

        target.appendChild(mesh);
        return target;
    }
}