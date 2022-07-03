import { Canvas } from "./scripts/canvas";

const target = document.querySelector('body');

if (!target) {
    throw new Error('Element "body" not found');
}

const canvas = new Canvas(target);