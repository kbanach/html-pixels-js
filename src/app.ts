import { Canvas } from "./scripts/canvas";
import { Render } from "./scripts/render";

const target = document.querySelector('body');

if (!target) {
    throw new Error('Element "body" not found');
}

const canvas = new Canvas(target);
const render = new Render(canvas);

render.render();