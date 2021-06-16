export class Pear {
    constructor(private pearType: String) {
        this.pearType = pearType;
    }

    public getType = () => {
        return this.pearType;
    }
}