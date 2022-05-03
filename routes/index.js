const router = require('express').Router();

router.use('/member', require('./member'))
router.use('/teacher', require('./teacher'))

module.exports = router;