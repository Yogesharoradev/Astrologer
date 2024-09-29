<!-- I made the documentation on swagger ui tooo http://localhost:5000/api-docs -->

Astrologers

1. /astrologers (POST)

Summary: Create a new astrologer.

Description: This endpoint creates a new astrologer with the provided details.

Request Body:

name: String, required. The name of the astrologer.

topAstrologer: Boolean, optional. Indicates if the astrologer is a top astrologer.

flowMultiplier: Integer, required. A multiplier for the astrologer's connection flow.

Responses:
201: Successfully created astrologer.
400: Bad request.
500: Internal server error.

2. /astrologers/{id}/toggle (PATCH)

Summary: Toggle the top astrologer status.

Description: This endpoint toggles the topAstrologer status of an astrologer.

Parameters:

id: String, required. The ID of the astrologer to toggle.

Responses:
200: Successfully toggled astrologer status.
404: Astrologer not found.
500: Internal server error.

Users

3. /users (POST)

Summary: Create a new user.

Description: This endpoint creates a new user with the provided details.

Request Body:

name: String, required. The name of the user.

email: String, required. The email of the user.

password: String, required. The password for the user account.

Responses:
201: Successfully created user.
400: Bad request.
500: Internal server error.

4. /users/findAstrologer (POST)

Summary: Find an astrologer for a user.

Description: This endpoint finds an astrologer for a specific user based on current connections.

Request Body:

userId: String, required. The ID of the user who needs an astrologer.

Responses:
200: Successfully assigned astrologer.
user.connection: String. The ID of the assigned astrologer.
assignedAstrologer: Object. The assigned astrologer's details.
404: User not found.
500: Internal server error.


5. /assign-user (POST)

Summary: Assign a user to an astrologer.

Description: This endpoint assigns a user to an astrologer based on their current connections and flow multiplier. 
The system automatically distributes the user to the astrologer with the least effective load.

Request Body:
userId: String, required. The ID of the user who needs an astrologer.

Responses:
200: Successfully assigned astrologer.
user.connection: String. The ID of the assigned astrologer.
assignedAstrologer: Object. The assigned astrologer's details.
_id: String. The astrologer's ID.
name: String. The astrologer's name.
currentConnections: Integer. The updated number of current connections for the astrologer.
flowMultiplier: Number. The astrologer's flow multiplier, which affects their user load.

400: Bad request (e.g., missing userId).
404: User not found.
500: Internal server error.