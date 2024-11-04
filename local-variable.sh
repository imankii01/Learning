#!/bin/bash
packageName="nginx"
function install (){

    echo "executing ${FUNCNAME} - START"
    echo "installing ${1}"
    echo "executing ${packageName} in ${FUNCNAME}"
}
install "testing" ß