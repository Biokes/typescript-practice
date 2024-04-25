let shape = require("./Rectangle");
test("test rectangle method", ()=>{
    const rectangle = new shape("name", 4, 6)
    expect(rectangle.getArea()).toBe(24);
})