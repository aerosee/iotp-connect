# @aerosee/iotp-connect
Node.js application that connects the DHT22 temperature and humidity sensor to the IBM IoT platform, using Raspberry Pi.

## Prerequisites

 * Clone the repo and run `./prereq.sh`. It should prompt you for the root password to install the required [BCM 2835](http://www.airspayce.com/mikem/bcm2835/) library.
 Alternatively, download and install it using the instructions from that page.
 * Run `npm install`.
 * Create a new *device type* and a new *device* in the IBM IoT platform. Details here: https://console.bluemix.net/docs/services/IoT/iotplatform_task.html#iotplatform_subtask1.
 * Configure the `config.json` file with the *organization*, *device type*, *device ID* and *token* from the IBM IoT platform. Set other config fields as needed. 

## Usage

```
npm start
```