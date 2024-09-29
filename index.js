import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.lib.js';
import astrologerRoutes from './routers/astrologer.router.js';
import userRoutes from './routers/user.router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/api/astrologers', astrologerRoutes);
app.use('/api/users', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
