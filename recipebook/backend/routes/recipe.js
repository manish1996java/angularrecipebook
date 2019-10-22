const router = require('express').Router();
const reciperoute = require('../controllers/recipe');

router.post('/save',reciperoute.save);

router.delete('/delete/:id',reciperoute.delete);

router.put('/edit/:id',reciperoute.edit);

router.get('/fetch',reciperoute.fetch);

module.exports = router;