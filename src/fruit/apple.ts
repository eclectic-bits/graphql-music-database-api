export class Apple {
    constructor(private appleType: String) {
        this.appleType = appleType;
    }

    public getType = () => {
        return this.appleType;
    }
}