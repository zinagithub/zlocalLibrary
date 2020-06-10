const express = require('express');
const router = express.Router();

router.get('/users', function(req, res){
    res.send('Users page')
})

module.exports = router;