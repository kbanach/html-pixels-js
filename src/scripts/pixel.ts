export class Pixel {
    private red: number; 
    private green: number; 
    private blue: number; 

    private getColorValue(colorValue: number): number {
        return Math.floor(Math.min(Math.max(colorValue, 0), 255))
    }

    setRGB(red: number, green: number, blue: number): Pixel {
        this.red = this.getColorValue(red);
        this.green = this.getColorValue(green);
        this.blue = this.getColorValue(blue);

        return this;
    }

    getRGB(): [number, number, number] {
        return [
            this.red,
            this.green,
            this.blue,
        ];
    }
}