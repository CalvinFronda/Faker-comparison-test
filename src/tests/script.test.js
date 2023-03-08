import generate from "../faker/script";

test("gen", () => {
    
    expect(generate().length).toBe(100000)
})