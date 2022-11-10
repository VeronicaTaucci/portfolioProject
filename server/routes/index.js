const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => { //get= the request type // arg1 = '/' path: http://localhost:3000// , arg2 = cb/handler (req = info from request, res = send response back to client)
    res.render('mainPage')
})
router.post('/social-media-links', (req, res) => { //get= the request type // arg1 = '/' path: http://localhost:3000// , arg2 = cb/handler (req = info from request, res = send response back to client)
    console.log(req.body)
    res.redirect('/')
})


module.exports = router;