import generate from "../faker/script";

test("gen", () => {
    console.log(generate())
    expect(generate().length).toBe(100)
})