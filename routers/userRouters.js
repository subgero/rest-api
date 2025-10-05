// routes/userRoutes.js
import express from 'express';

const router = express.Router();

// At this time, we are going to return static data
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];

router.get('/', async (req, res) => {
    res.send(users);
});

export default router;