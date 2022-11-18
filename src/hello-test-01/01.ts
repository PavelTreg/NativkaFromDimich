export function sum(a: number, b: number) {
    return a + b;
}
    export function sum2(c: number, b: number) {
        return c+b;
    }

    export function mult(a: number, b: number) {
    return a*b;
}
export function mult2(a: number, b: number) {
    return a * b;
}
export function splitIntoWorld (sentense:string) {
    const words = sentense.toLowerCase().split(" ")

    return words.filter(w => w !== '' && w!=='-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', '')
        )
}