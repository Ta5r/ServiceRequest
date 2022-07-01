const { json } = require("express");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("<br>Hello World from RDSO");
});

router.post("/register", async (req, res) => {

});

router.post("/test",async(req,res)=>{
    console.log(req.body);
    res.send("got something");
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
});

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('Ola Tanay');
});

// GET method route
router.get('/admin/requests', (req, res) => {
    res.send('GET request to the homepage')
  });

  // POST method route
  router.post('/user/request', async (req, res) => {
  const date = Date();
    const {EID, name, desig, sec,block,qrtr,cat,subcat,desc} = req.body;
    res.send('POST request to the homepage');
  });

    module.exports = router;