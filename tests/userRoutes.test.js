// __tests__/userRoutes.test.js
import request from 'supertest';
import app from '../index.js'; 
import mongoose from 'mongoose';
import User from '../models/user.model.js';
import Astrologer from '../models/astrologer.model.js';

describe('User Routes', () => {
    // Connect to the test database before all tests
    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost:27017/test_db");
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    beforeEach(async () => {
        // Clear all users and astrologers before each test
        await User.deleteMany({});
        await Astrologer.deleteMany({});
    });

    it('should create a user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('user');
        expect(response.body.user.name).toBe('John Doe');
    });

    it('should find an astrologer for the user', async () => {
        const astrologer = new Astrologer({ name: 'Astrologer 1', currentConnections: 0 });
        await astrologer.save();

        const user = new User({ name: 'Jane Doe', email: 'jane@example.com', password: 'password123' });
        await user.save();

        const response = await request(app)
            .post('/api/users/findAstrologer')
            .send({ userId: user._id });

        expect(response.statusCode).toBe(200);
        expect(response.body.assignedAstrologer).toHaveProperty('_id');
        expect(response.body.user.connection).toBeDefined();
    });
});
