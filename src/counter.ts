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

    get(): number {
        //
        // Wrong Code!
        return 0;
    }
}
