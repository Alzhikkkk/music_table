const express = require('express');
const router = express.Router();

router.use(require('./song'));
router.use(require('./genre'))



module.exports = router