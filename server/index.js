const five = require('johnny-five');
const board = new five.Board({
    port: "COM6"
});

board.on("ready", () => {
    const WebSocket = require('ws')
    const ws = new WebSocket.Server({ port: 8080 })

    const led = new five.Led.RGB({
        pins: {
            red: 6,
            green: 5,
            blue: 3
        },
        isAnode: true
    })

    ws.on('connection', ws => {
        ws.on('message', message => {
            console.log(`Received message => ${message}`)
            led.color(`${message}`);
            led.on();
        })
    });
})

console.log("WebSocket server is running on port 8080")