# @aerosee/iotp-connect
Node.js application that connects the DHT22 temperature and humidity sensor to the IBM IoT platform, using Raspberry Pi.

## Prerequisites
 * Create a new *device type* and a new *device* in the IBM IoT platform. Details here: https://cloud.ibm.com/docs/services/IoT?topic=iot-platform-getting-started#step1.
 * Configure the `config.json` file with the *organization*, *device type*, *device ID* and *token* from the IBM IoT platform. Set other config fields as needed. 

## Usage
```
npm install
npm start
```