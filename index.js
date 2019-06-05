const iotClient = require('ibmiotf');
const dhtSensor = require('node-dht-sensor').promises;
const config = require('./config');

const deviceClient = new iotClient.IotfDevice(config.iot);

deviceClient.connect();

deviceClient.on('connect', function () {
  setInterval(function () {
    dhtSensor.read(config.sensor, config.gpio).then(
      res => {
        const data = {
          temperature: res.temperature.toFixed(1),
          humidity: res.humidity.toFixed(1)
        };
        deviceClient.publish('data', 'json', data, config.qos);
      },
      err => {
        console.error('Sensor read error', err);
      })
  }, config.interval);
});

deviceClient.on('error', function (err) {
  console.error('IoT error', err);
});
