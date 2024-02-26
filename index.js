const url = new URL(import.meta.url)
const modelHash = url.searchParams.get("modelHash")
import(`./main-v2FA9FE9.js?modelHash=${modelHash}`)
