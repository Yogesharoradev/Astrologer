/**
 * @swagger
 * tags:
 *   - name: Astrologers
 *     description: Endpoints related to astrologers
 *   - name: Users
 *     description: Endpoints related to users
 */

/**
 * @swagger
 * /astrologers:
 *   post:
 *     summary: Create a new astrologer
 *     description: This endpoint creates a new astrologer with the provided details.
 *     tags:
 *       - Astrologers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the astrologer.
 *               topAstrologer:
 *                 type: boolean
 *                 description: Indicates if the astrologer is a top astrologer.
 *               flowMultiplier:
 *                 type: integer
 *                 description: A multiplier for the astrologer's connection flow.
 *     responses:
 *       201:
 *         description: Successfully created astrologer.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /astrologers/{id}/toggle:
 *   patch:
 *     summary: Toggle the top astrologer status
 *     description: This endpoint toggles the `topAstrologer` status of an astrologer.
 *     tags:
 *       - Astrologers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the astrologer to toggle.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully toggled astrologer status.
 *       404:
 *         description: Astrologer not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint creates a new user with the provided details.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *     responses:
 *       201:
 *         description: Successfully created user.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /users/findAstrologer:
 *   post:
 *     summary: Find an astrologer for a user
 *     description: This endpoint finds an astrologer for a specific user based on current connections.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user who needs an astrologer.
 *     responses:
 *       200:
 *         description: Successfully assigned astrologer.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     connection:
 *                       type: string
 *                 assignedAstrologer:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /users/distribute-users:
 *   post:
 *     summary: Distribute users among astrologers
 *     description: This endpoint distributes users to astrologers based on the defined algorithm.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *     responses:
 *       200:
 *         description: Users distributed successfully.
 *       500:
 *         description: Error distributing users.
 */
