const iotClient = require("ibmiotf");
const dhtSensor = require('node-dht-sensor');
const config = require('./config');

const interval = 10000; // milliseconds
const deviceClient = new iotClient.IotfDevice(config.iot);

deviceClient.connect();

deviceClient.on('connect', function () {
    setInterval(function () {
        dhtSensor.read(config.sensor, config.gpio, function(err, temperature, humidity) {
            if (!err) {
                const data = { temperature: temperature.toFixed(1),
                    humidity: humidity.toFixed(1)
                };
                deviceClient.publish('data', 'json', data, config.qos);
            } else {
                console.error("Sensor read error: " + err);
            }
        });
    }, interval);
});

deviceClient.on("error", function (err) {
    console.error("IoT error: " + err);
});