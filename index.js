const iotClient = require("ibmiotf");
const dhtSensor = require('node-dht-sensor');
const config = require('/config');

const interval = 5000; // milliseconds

let deviceClient = new iotClient.IotfDevice(config);

deviceClient.connect();

deviceClient.on('connect', function () {
    let event = 0;
    setInterval(function function_name () {
        event++;
        dhtSensor.read(22, 4, function(err, temperature, humidity) {
            if (!err) {
                const data = { eventNumber: event,
                    temperature: temperature.toFixed(1),
                    humidity: humidity.toFixed(1)
                };
                deviceClient.publish('data', 'json', data, 2);
            }
        });
    }, interval);
});
