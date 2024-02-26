const url = new URL(import.meta.url)
const modelHash = url.searchParams.get("modelHash")
import(`./main-H4mxiCPL.js?modelHash=${modelHash}`)
