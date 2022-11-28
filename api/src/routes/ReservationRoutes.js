import { Router } from 'express';
import {
    createReservation,
    GetAllReservations,
    getReservationsByUserId,
    UpdateReservation,
    CancelReservation,
} from '../controllers/reservationController';

const router = Router();
const { checkToken } = require('../middleware/adminMiddleware');

router.post('/create-reservation/:user_id/:car_id', createReservation);
router.get('/get-all-reservations', checkToken, GetAllReservations);
router.get('/get-reservations-by-user-id/:user_id', getReservationsByUserId);
router.put('/update-reservation/:user_id/:reservation_id', UpdateReservation);
router.delete('/cancel-reservation/:user_id/:reservation_id', CancelReservation);

export { router as ReservationRoutes };
