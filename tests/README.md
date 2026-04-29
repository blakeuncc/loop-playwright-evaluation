# Loop Playwright Technical Evaluation
This project contains a data-driven Playwright test suite for validating task cards in the provided demo.

## Tech Stack
- JavaScript
- Playwright

## Project Overview
The test suite logs into the demo application using the provided credentials, navigates between the Web Application and Mobile Application sections, and validates that specific task cards appear in the expected columns with the correct tags.

## What Is Tested
- Login automation with the provided credentials
- Web Application task cards
- Mobile Application task cards
- Expected column placement
- Expected task tags

## Data-Driven Approach
The test cases are stored in an array of objects. Each object contains the project name, task title, expected column, and expected tags.
This keeps the test suite scalable and avoids duplicating test logic for each scenario. New test cases can be added by adding another object to the test data array.

## How to Install
npm install

## How to Run Tests
npx playwright test --project=chromium

## Browser Support
Tests were validated using Chromium. 
Firefox/WebKit may require additional environment setup depending on the local machine.
