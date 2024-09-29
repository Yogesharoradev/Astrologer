# Test Cases Documentation

## Overview

This document describes the test cases implemented to validate the functionality of the Astrologer Connection application.

## Testing Framework

- **Framework Used:** Jest
- **Description:** Jest is a JavaScript testing framework used to ensure the reliability of the application.

## Test Cases

### 1. Create User

- **Test Name:** `should create a user successfully`
- **Description:** Tests the user creation endpoint for valid input.
- **Expected Outcome:** Should return a status of 201 and the created user object.

### 1. Create Astrologer

- **Test Name:** `should create a astrologer successfully`
- **Description:** Tests the astrologer creation endpoint for valid input.
- **Expected Outcome:** Should return a status of 201 and the created astrologer object.

### 2. Find Astrologer

- **Test Name:** `should assign an astrologer to a user`
- **Description:** Tests the find astrologer functionality to ensure users are assigned correctly.
- **Expected Outcome:** Should return the assigned astrologer with updated connection count.



### 3. Toggle Top Astrologer

- **Test Name:** `should toggle the top astrologer status`
- **Description:** Tests the toggle function to switch the `topAstrologer` status.
- **Expected Outcome:** Should return the astrologer with the updated top status.


### 4. distribite-astrologer

- **Test Name:** `should distribute the top astrologer as their wish`
- **Description:** Tests the  function to give astrologer a chance how many users they want.
- **Expected Outcome:** if astrologer has high multiplier than he will get more user 


