export class Counter {
    private cnt: number = 0;

    increase(): number {
        this.cnt++;
        return this.cnt;
    }

    decrease(): number {
        this.cnt--;
        return this.cnt;
    }

    multiply(n: number): number {
        this.cnt *= n;
        return this.cnt;
    }

    get(): number {
        return this.cnt;
    }
}
