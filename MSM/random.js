
function msm() {

    let result = (seed * seed).toString().padStart(4, '0').slice(1, 3)

    seed = parseInt(result)

    return parseInt(result)
}

for (let i = 0; i < 10; i++) {
    console.log(msm())
}