import {splitIntoWorld, sum, sum2} from "./01";
import {mult, mult2} from "./01";

test ('Correct sum', ()=> {

const a = 1;
const b = 2;
const c = 3;

    const result = sum (a,b);
    const result2 = sum2 (c,b);

    expect(result).toBe(3)
    expect(result2).toBe(5)
})

test ('Correct mult', ()=> {

    const a = 1;
    const b = 2;
    const c = 3;

    const result = mult (a,b);
    const result2 = mult2 (c,b);

    expect(result).toBe(2)
    expect(result2).toBe(6)
})

test ('splitIntoWorld to be correct',()=> {
// dats
    const sent1 = 'Hello my friend'
    const sent2 = 'JS - the best programing language'
//action
    const result1 = splitIntoWorld(sent1)
    const result2 = splitIntoWorld(sent2)
// expect result

expect(result1.length).toBe(3)
expect(result1[0]).toBe('hello')
expect(result1[1]).toBe('my')
expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programing')
    expect(result2[4]).toBe('language')
})
