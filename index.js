const { invoke } = window.__TAURI__.tauri;

function rust_hello() {
    invoke("hello");
}