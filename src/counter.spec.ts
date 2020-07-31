import { describe, it } from "mocha";
import { Counter } from "./counter";
import assert from "assert";

describe("Count", function () {
    it("If nothing has been done, it must be returned 0.", function () {
        const counter = new Counter();
        assert.equal(counter.get(), 0);
    });

    it("If the counter has been increased 10 times, it must be returned +10.", function () {
        const counter = new Counter();
        for (let i = 0; i < 10; i++) {
            counter.increase();
        }
        assert.equal(counter.get(), +10);
    });

    it("If the counter has been decreased 10 times, it must be returned -10.", function () {
        const counter = new Counter();
        for (let i = 0; i < 10; i++) {
            counter.decrease();
        }
        assert.equal(counter.get(), -10);
    });
});
