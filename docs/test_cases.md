# Test Cases Documentation

## Overview

This document describes the test cases implemented to validate the functionality of the Astrologer Connection application.

## Testing Framework

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
- **Expected Outcome:** Should return the astrologer with the updated top status and return 200 status on success.


### 4.  assign-user

- **Test Name:** `should assign a user based on astrologers' flow multiplier`
- **Description:**  Tests the function that assigns a user to an astrologer according to the astrologers' flow multiplier and current connections..
- **Expected Outcome:** The astrologer with a higher flow multiplier and fewer effective connections will get more users assigned to them.




