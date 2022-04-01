import express from 'express';
import * as authController from '../controllers/authController'
const router = express.Router();

router.route('/auth/login')
    .post(authController.loginUser)
    .get(authController.isMember)
router.route('/auth/login/code/check')
    .get(authController.checkLoginCode)
router.route('/auth/complete/register')
    .post(authController.completeRegister)
router.route('/auth/logout')
    .get(authController.logout)
    
export default router;