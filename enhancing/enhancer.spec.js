const enhancer = require('./enhancer.js');
// test away!

test('run my test1 ',()=>{
    expect(1+1).toBe(3)
})

test('repair',()=>{
    const data={durability: 80}
    const solved = enhancer.repair(data)
    expect(solved).toEqual({durability:100})
    expect(solved).toEqual({durability:80})
})
