#!/bin/bash

function install(){
    #### installation code
echo "installation code1"
echo "installation code5"
echo "installation code4"
echo "installation code3"
echo "installation code2"

}
install
configuration(){
    # configuration code
 echo "configcode1"
 echo "configcode2"
 echo "configcode3"

}
configuration


function deploy(){
    # deploy code
    echo "${0}"
    echo "${1}"
    echo "${FUNCNAME}"

echo "deploy code1"
echo "deploy code2"
echo "deploy code3"
}
deploy "webapplication"