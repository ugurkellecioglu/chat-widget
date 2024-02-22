const url = new URL(import.meta.url)

console.log("url", url)

const modelHash = url.searchParams.get("modelHash")

console("modelHash", modelHash)

import(`./main-odPP3p5S.js?modelHash=${modelHash})`)
