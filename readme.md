Go WebAssembly Lib

### How To Use

```javascript
const {Go} = require('go-wasm')

const start = async function start() {
    const go = new Go()
    const result = await WebAssembly.instantiate(fs.readFileSync('./lib.wasm'), go.importObject)
    await go.run(result.instance)
}

start();
```
