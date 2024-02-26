// import "./main-cjji2_90.js";
const url = new URL(import.meta.url)
const modelHash = url.searchParams.get("modelHash")
import(`./main-cjji2_90.js?modelHash=${modelHash}`)
