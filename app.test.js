const { add, sub, multiply, divide } = require("./app");

describe("App.js test", ()=> {
    it("should add",()=>{
        expect(add(2, 2)).toBe(4);
    });
    it("should subtract",()=>{
        expect(sub(2,2)).toBe(0);
        expect()
    });
    it("should multiply",()=>{
        expect(multiply(2,2)).toBe(4);
    });
    it("should divide",()=>{
        expect(divide(2,2)).toBe(1);
    });
});