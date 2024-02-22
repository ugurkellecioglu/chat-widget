const urlParams = new URLSearchParams(new URL(import.meta.url))
const modelHash = urlParams.get("modelHash")
console.log("modelHash", modelHash)
import(`./main-PLonMSs9.js?modelHash=${modelHash})`)
