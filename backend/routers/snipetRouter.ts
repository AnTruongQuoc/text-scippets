import express from 'express';
import * as snipetController from '../controllers/snipetController'
const router = express.Router();

router.route('/snipet/all/:pageNumber')
    .get(snipetController.getSnipets)
router.route('/snipet')
    .get(snipetController.getSnipet)
    .post(snipetController.createSnipet)
    .delete(snipetController.deleteSnipet)
    .put(snipetController.updateSnipet)
    
export default router;