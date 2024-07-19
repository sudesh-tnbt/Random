let x = 10, a = 1664525, c = 1013904223, m = 4294967296


function LCG() {

    x = (a * x + c) % m

    return x
}

console.log(LCG())
