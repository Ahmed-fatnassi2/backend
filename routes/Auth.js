const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" auth"});
});
// router.post("/", (req, res)=>{
//     res.send({data:" auth"});
// });

module.exports = router;