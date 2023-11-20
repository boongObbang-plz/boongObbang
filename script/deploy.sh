#!/usr/bin/env bash

cd /var/www
sh ~/init_docker.sh

docker-compose up -d
