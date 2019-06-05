const iotClient = require('ibmiotf');
const dhtSensor = require('node-dht-sensor').promises;
const config = require('./config');
const { createLogger, format, transports } = require('winston');

const deviceClient = new iotClient.IotfDevice(config.iot);

const { combine, timestamp, prettyPrint } = format;
const logger = createLogger({
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console()
  ]
});

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
        logger.info(data);
      },
      err => {
        logger.error('Sensor read error', err);
      })
  }, config.interval);
});

deviceClient.on('error', function (err) {
  logger.error('IoT error', err);
});
