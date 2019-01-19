# @aerosee/iotp-connect
Connects the DHT22 sensor to IBM's IoT Platform. To be used on a Raspberry Pi.

## Prerequisites

Run the `prereq.sh` script, it should prompt for the root password to install the required [BCM 2835](http://www.airspayce.com/mikem/bcm2835/) library.

```
chmod +x prereq.sh | ./prereq.sh
npm install
```

## IBM IoT Configuration

Create a new device type and a new device in the IBM IoT platform. Details here: https://console.bluemix.net/docs/services/IoT/iotplatform_task.html#iotplatform_subtask1.

Configure fields in the `config.json` file with the respective org, device type, device ID and token from the IBM IoT platform. 

## Usage

```
npm start
```