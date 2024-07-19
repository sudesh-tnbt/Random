let seed = 10;

function msm() {

    let result = (seed ^ 2).toString().slice(1, 3)

    seed = parseInt(result)

    return parseInt(result)
}

console.log(msm())