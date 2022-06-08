async function range(start, end) {
    for(let j = start; j<= end; i++) {
        yield Promise.resolve(j)
}
}

(async () => {
    const gen = range(1, 3)
    for await (const item of gen) {
        console.log(item)
    }
})()

console.log("Hello, World!");
