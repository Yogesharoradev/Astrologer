// tests/astrologerRoutes.test.js
import request from 'supertest';
import app from '../index.js'; 
import mongoose from 'mongoose';
import Astrologer from '../models/astrologer.model.js'; 


beforeAll(async () => {
    const uri = "mongodb://localhost:27017/test_db"
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});


beforeEach(async () => {
    await Astrologer.deleteMany({});
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Astrologer Routes', () => {
    describe('POST /api/astrologers', () => {
        it('should create a new astrologer', async () => {
            const astrologerData = {
                name: 'John Doe',
                topAstrologer: false,
                currentConnections: 0,
                flowMultiplier: 1, 
            };

            const response = await request(app)
                .post('/api/astrologers')
                .send(astrologerData);

            expect(response.statusCode).toBe(201); 
            expect(response.body).toHaveProperty('_id'); 
            expect(response.body.name).toBe(astrologerData.name);
        });
    });

    describe('PATCH /api/astrologers/:id/toggle', () => {
        it('should toggle the topAstrologer status of an astrologer', async () => {
            
            const astrologer = await Astrologer.create({
                name: 'Jane Smith',
                topAstrologer: false,
                currentConnections: 0,
                flowMultiplier: 1,
            });

            const response = await request(app)
                .patch(`/api/astrologers/${astrologer._id}/toggle`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('_id', astrologer._id.toString());
            expect(response.body.topAstrologer).toBe(true); 
        });

        it('should return 404 if astrologer not found', async () => {
            const invalidId = '60d5ec49a8e8e21f4c6f3c73'; 

            const response = await request(app)
                .patch(`/api/astrologers/${invalidId}/toggle`);

            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty('message', 'Astrologer not found');
        });
    });
});
