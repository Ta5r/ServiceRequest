const express = require("express");
const router = express.Router();
const Complaint = require("../model/complaintSchema");
const Admin = require("../model/adminSchema");
const User = require("../model/userSchema");

const complaintsHandler = new Map(
  [
    ["testa","JE"],
    ["testb","SSE"],
    ["testc","JE"],
    ["testd","SSE"],
    ["teste","JE"],
    ["testf","JE"],
    ["testg","JE"],
    ["testh","SSE"],
    ["testi","JE"],
    ["testj","JE"],
    ["testk","SSE"],
    ["testl","JE"],
    ["testm","JE"],
    ["testn","SSE"],
    ["testo","JE"],
    ["testp","JE"],
    ["testq","SSE"],
    ["testr","JE"],
    ["tests","JE"],
    ["testt","SSE"],
    ["testu","JE"],
    ["testv","JE"],
    ["testw","SSE"],
    ["testx","JE"],
    ["testy","JE"],
    ["testz","SSE"],
  ]
);

const sup = "ollooo";

router.get("/", (req, res) => {
  res.send("Ola Tanay");
  console.log(complaintsHandler.get("testa"));
});

// GET method route
router.post("/admin/register", async (req, res) => {
  const {
    AID,
    name,
    email,
    phone,
    password,
    cpassword,
    sector,
    department,
    designation,
  } = req.body;
  try {
    const admin = new Admin({
      AID,
      name,
      email,
      phone,
      password,
      cpassword,
      sector,
      department,
      designation,
    });
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    console.log(err);
  }
});
router.get("/admin/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (admin) {
      if (password == admin.password) {
        console.log("Successfull signin");
        res.send("Successfull signin");
      } else {
        console.log("Wrong Password");
        res.send("Wrong Password");
      }
    } else {
      res.send("INVALID EMAIL");
    }
  } catch (err) {
    console.log(err);
  }
});
router.get("/admin/requests/", async (req, res) => {
  const sector = req.body.sector.toUpperCase();
  console.log("Sector = " + sector);
  try {
    const complaintsPending = await Complaint.find({ sector });
    complaintsPending.map((reqs) => {
      console.log(reqs.timestamp);
    });
  } catch (err) {
    console.log(err);
  }
  res.send("GET request to the homepage");
});

// POST method route
router.post("/user/register", async (req, res) => {
  const {
    EID,
    name,
    email,
    designation,
    phone,
    sector,
    block,
    qrtr,
    password,
    cpassword,
  } = req.body;

  try {
    const user = new User({
      EID,
      name,
      email,
      designation,
      phone,
      sector,
      block,
      qrtr,
      password,
      cpassword,
    });

    await user.save();

    res.send("USER registered successfully");
  } catch (error) {
    console.log(error);
  }
});
router.get("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password == user.password) {
        console.log("Successfull signin");
        console.log(user);
        res.send("Successfull signin");
      } else {
        console.log("Wrong Password");
        res.send("Wrong Password");
      }
    } else {
      res.send("INVALID EMAIL");
    }
  } catch (err) {
    console.log(err);
  }
});

function findMinReq(tasks){
console.log("Find Min Funciton starts ");
console.log(tasks);
const min = Math.min(...tasks);
console.log("minimum occupied admin is on "+min+" tasks");
const index = tasks.indexOf(min);
console.log(index); 
console.log("Find Min Funciton ends ");
return index;

}
router.post("/user/request", async (req, res) => {
  const {
    EID,
    name,
    designation,
    phone,
    sector,
    block,
    qrtr,
    category,
    subcategory,
    description,
  } = req.body;
  const timestamp = Date();
  const status = "pending";
  var asgnTO_ID = "";
  var asgnTO_name = "";
  var asgnTO_desig = "";
  var asgnTO_contact = "";
  const feedback = "";
  const completedTime = "";

  const post_to_assign_task = complaintsHandler.get(subcategory);

  try {
    const admin = await Admin.find({
      $and: [{ sector }, { department: category },{designation:post_to_assign_task}],
    });
    var tasks = [];
    for (var i = 0; i < admin.length; i++) {
      console.log(admin[i].id);
      try{
        const complaint_for_adminID = await Complaint.find({asgnTO_ID:admin[i].AID});

        tasks[i] = complaint_for_adminID.length;
        console.log(tasks[i]);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    const admin_id_with_min_req = findMinReq(tasks);
    console.log("to assign to "+admin[admin_id_with_min_req].name);
    asgnTO_ID=admin[admin_id_with_min_req].AID;
    asgnTO_name=admin[admin_id_with_min_req].name;
    asgnTO_desig=admin[admin_id_with_min_req].designation;
    asgnTO_contact=admin[admin_id_with_min_req].phone;

  } catch (err) {
    console.log(err);
  }

  try {
    const complaint = new Complaint({
      EID,
      name,
      designation,
      phone,
      sector,
      block,
      qrtr,
      category,
      subcategory,
      description,
      timestamp,
      status,
      asgnTO_ID,
      asgnTO_name,
      asgnTO_desig,
      asgnTO_contact,
      feedback,
      completedTime,
    });

    await complaint.save();

    res.status(201).json({ message: "complaint registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
