// import "./main-PQrmMtBH.js";
const url = new URL(import.meta.url)
const modelHash = url.searchParams.get("modelHash")
import(`./main-PQrmMtBH.js?modelHash=${modelHash}`)
