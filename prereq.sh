#! /bin/sh

LIB_VERSION=1.58

curl -O "http://www.airspayce.com/mikem/bcm2835/bcm2835-${LIB_VERSION}.tar.gz"
tar zxvf bcm2835-${LIB_VERSION}.tar.gz
cd bcm2835-${LIB_VERSION}
./configure
make
sudo make check
sudo make install
cd ..
rm bcm2835-${LIB_VERSION}.tar.gz
rm -rf bcm2835-${LIB_VERSION}
