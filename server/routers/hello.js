const express = require('express');

const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({data: "helloWorld"});
});

module.exports = router;