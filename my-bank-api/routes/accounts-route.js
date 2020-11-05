import exepress from 'express';
import {controller} from '../controllers/accounts-controller.js'

const router = exepress.Router();

router.get('/', controller.get);
router.get('/balance/:ag/:acc', controller.getBalance);
router.get('/avgAg/:ag', controller.avgAg);
router.get('/minBalance/:qtyClient', controller.minBalance);
router.get('/maxBalance/:qtyClient', controller.maxBalance);
router.post('/', controller.post);
router.post('/postMany', controller.postMany);
router.patch('/updateBalanceInc/:ag/:acc/:dep', controller.patchBalanceInc);
router.patch('/updateBalanceDcm/:ag/:acc/:dep', controller.patchBalanceDcm);
router.patch('/transaction/:ogAcc/:desAcc/:transValue', controller.transaction);
router.put('/privateAg', controller.putPrivate);
router.delete('/deleteOne/:ag/:acc/', controller.deleteOne);


router.use((err, req, res, next) => {
    res.status(400).send({error: err.message});
})

export { router };