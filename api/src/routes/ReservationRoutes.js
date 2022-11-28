import { Router } from 'express';
import {
    createReservation,
    GetAllReservations,
    getReservationsByUserId,
    UpdateReservation,
    CancelReservation,
} from '../controllers/reservationController';
import {checkUserToken} from "../middleware";

const router = Router();
const { checkToken } = require('../middleware/adminMiddleware');

router.post('/create-reservation/:user_id/:car_id',checkUserToken, createReservation);
router.get('/get-all-reservations', checkToken, GetAllReservations);
router.get('/get-reservations-by-user-id/:user_id',checkUserToken, getReservationsByUserId);
router.put('/update-reservation/:user_id/:reservation_id',checkUserToken, UpdateReservation);
router.delete('/cancel-reservation/:user_id/:reservation_id',checkUserToken, CancelReservation);

export { router as ReservationRoutes };
