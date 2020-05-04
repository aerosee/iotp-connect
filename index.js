import dhtSensor from 'node-dht-sensor';
import dotenv from 'dotenv';
import { DeviceClient, DeviceConfig } from '@wiotp/sdk';
import { createLogger, format, transports } from 'winston';

dotenv.config();

const deviceConfig = DeviceConfig.parseEnvVars();
const deviceClient = new DeviceClient(deviceConfig);

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.prettyPrint()
  ),
  transports: [
    new transports.Console()
  ]
});

const SENSOR_ID = 22;
const GPIO = 4;
const QOS = 2;
const INTERVAL = 60; // seconds

deviceClient.connect();

deviceClient.on('connect', () => {
  logger.info('Connected to the IBM IoT platform');
  setInterval(() => {
    dhtSensor.promises.read(SENSOR_ID, GPIO).then(
      res => {
        const data = {
          temperature: res.temperature.toFixed(1),
          humidity: res.humidity.toFixed(1)
        };
        deviceClient.publishEvent('data', 'json', data, QOS);
        logger.info(data);
      },
      err => logger.error('Error reading sensor data', err));
  }, INTERVAL * 1000);
});

deviceClient.on('error', err => logger.error('Error connecting to the IBM IoT platform', err));
