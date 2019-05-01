#!/usr/bin/env bash

source .env

GH_TOKEN=$GH_TOKEN NPM_TOKEN=$NPM_TOKEN npx semantic-release --ci false