#!/usr/bin/env bash
PROXY_ARG=""
PROXY=""

export http_proxy=
export https_proxy=

usage="$(basename "$0") [-h] [-e -p (noproxy || http://proxy:port)] -- build all Selenium images

where:
    -h  show this help text
    -e  print all commands
    -p  omit the usage of a proxy by setting 'noproxy' or set a new proxy value"



while getopts ":ep:" opt; do
    case $opt in
        h) echo "$usage"
        exit
        ;;
        p)
            if [[ $OPTARG = "noproxy" ]]; then
                PROXY_ARG="--build-arg http_proxy= --build-arg https_proxy=";
                PROXY=""
                export http_proxy=
                export https_proxy=
            else
                PROXY_ARG="--build-arg http_proxy=$OPTARG --build-arg https_proxy=$OPTARG";
                echo "setting the proxy to $OPTARG";
                PROXY=$OPTARG
                export http_proxy=$OPTARG;
                export https_proxy=$OPTARG;
            fi
            ;;
        e)
          echo "dont build the images just print the commands"
          PRINT_STATEMENTS=true
          ;;
        \?)
          echo "Invalid option: -$OPTARG" >&2
          echo "$usage"
          exit 1
          ;;
        :)
          echo "Option -$OPTARG requires an argument." >&2
          echo "$usage"
          exit 1
          ;;
    esac
done



#build docker images
BUILD_BASE="docker build ${PROXY_ARG} -t framework_tester ."
COMMANDS+=("${BUILD_BASE}")

if [[ $PRINT_STATEMENTS = "true" ]]; then
    for i in "${COMMANDS[@]}"
    do
        echo $i
    done;
else
    eval "$CLEANUP_START"
    for i in "${COMMANDS[@]}"
    do
        eval $i;

        if [ $? -ne 0 ]; then
          exit 1;
        fi
    done;
    eval "$CLEANUP_END";
fi
