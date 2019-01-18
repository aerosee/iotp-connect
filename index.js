const iotClient = require("ibmiotf");
const dhtSensor = require('node-dht-sensor');
const config = require('./config');

const interval = 10000; // milliseconds
const deviceClient = new iotClient.IotfDevice(config);

deviceClient.connect();

deviceClient.on('connect', function () {
    setInterval(function function_name () {
        dhtSensor.read(22, 4, function(err, temperature, humidity) {
            if (!err) {
                const data = { temperature: temperature.toFixed(1),
                    humidity: humidity.toFixed(1)
                };
                deviceClient.publish('data', 'json', data, 2);
            }
        });
    }, interval);
});
