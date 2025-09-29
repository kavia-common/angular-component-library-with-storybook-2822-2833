#!/bin/bash
cd /home/kavia/workspace/code-generation/angular-component-library-with-storybook-2822-2833/angular_custom_library_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

