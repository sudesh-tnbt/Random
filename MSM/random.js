let seed = 42

function msm() {

    let result = (seed * seed).toString().slice(1, 3)

    seed = parseInt(result)

    return parseInt(result)
}

for (let i = 0; i < 10; i++) {
    console.log(msm())
}