const { tauri } = require("@tauri-apps/api");

const { invoke } = tauri.invoke;

function rust_hello() {
    invoke("hello");
}