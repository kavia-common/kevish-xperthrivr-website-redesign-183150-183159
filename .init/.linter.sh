#!/bin/bash
cd /home/kavia/workspace/code-generation/kevish-xperthrivr-website-redesign-183150-183159/kevish_xperthrivr_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

