# @aerosee/iotp-connect

Node.js application that connects the DHT22 temperature and humidity sensor to the IBM IoT platform, using Raspberry Pi.

## Prerequisites

* Connect the DHT22 sensor to Raspberry PI.
* npm, see [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).
* Create a new *device type* and a new *device* in the IBM IoT platform. Details here: [https://cloud.ibm.com/docs/services/IoT?topic=iot-platform-getting-started#byb](https://cloud.ibm.com/docs/services/IoT?topic=iot-platform-getting-started#byb).
* Copy the `.env.template` file to a new file named `.env` and populate it with the *organization*, *device type*, *device ID* and *token* from the IBM IoT platform.

## Usage

Adapt configuration values from the `index.js` file as needed then run the commands:

``` shell
npm install
npm start
```
