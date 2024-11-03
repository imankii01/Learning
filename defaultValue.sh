#!/bin/bash
read -p "Please enter your name: " name
name=${name: -World}
echo "Hello ${name^}"

yourname=${unsetvariable:-mansih}
echo $yourname

myname=""
mytestname=${myname:-kali}
echo "${mytestname}"
