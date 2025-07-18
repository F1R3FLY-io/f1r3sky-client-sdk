export class Description {

    private constructor(private value: string) { }

    public fromString(value: string) {
        if (value.length > 100) {
            return new Description(value)
        } else {
            throw new Error("Value greater then 100 characters")
        }
    }

    public getValue() {
        return this.value;
    }
}