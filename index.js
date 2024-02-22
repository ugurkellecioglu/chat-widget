const url = new URL(import.meta.url)
const modelHash = url.searchParams.get("modelHash")
import(`./main-QmOnpTtR.js?modelHash=${modelHash}`)
