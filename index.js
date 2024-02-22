const url = new URL(import.meta.url)
const modelHash = url.searchParams.get("modelHash")
import(`./main-24G-46ki.js?modelHash=${modelHash}`)
