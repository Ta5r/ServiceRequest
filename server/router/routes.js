import "dotenv/config";
import express from "express";
const router = express.Router();
import Complaint from "../model/complaintSchema.js";
import Admin from "../model/adminSchema.js";
import User from "../model/userSchema.js";
import authenticate from "../middleware/Authenticate.js";
import authenticateadmin from "../middleware/AuthenticateAdmin.js";

// const ACCESS_KEY = "QWERTYUIOP1234567890ASDFGHJKL";
const complaintsHandler = new Map([
  ["testa", "JE"],
  ["testb", "SSE"],
  ["testc", "JE"],
  ["testd", "SSE"],
  ["teste", "JE"],
  ["testf", "JE"],
  ["testg", "JE"],
  ["testh", "SSE"],
  ["testi", "JE"],
  ["testj", "JE"],
  ["testk", "SSE"],
  ["testl", "JE"],
  ["testm", "JE"],
  ["testn", "SSE"],
  ["testo", "JE"],
  ["testp", "JE"],
  ["testq", "SSE"],
  ["testr", "JE"],
  ["tests", "JE"],
  ["testt", "SSE"],
  ["testu", "JE"],
  ["testv", "JE"],
  ["testw", "SSE"],
  ["testx", "JE"],
  ["testy", "JE"],
  ["testz", "SSE"],
]);
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

router.get("/admin/dashboard", authenticateadmin, async (req, res) => {
  console.log("Hello from get / admin / dashboard ");
  console.log(req.rootAdmin);
  res.send(req.rootAdmin);
})

router.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;
  var tokenAdmin;
  try {
    const admin = await Admin.findOne({ email });
    if (admin) {
      if (password == admin.password) {
        console.log("Successfullsignin");

        console.log(admin);
        await JSON.stringify(admin);
        var token = await admin.generateAdminAuthToken();
        console.log("Tokenn /routes/ -> " + token);
        console.log(admin);
        res.send({admin,token});
        
        // const tasks_to_do = await Complaint.find({
        //   $and: [{ asgnTO_ID: admin.AID }, { status: "pending" }],
        // });

        // console.log("Tasks for you : ");
        // console.log(tasks_to_do);
        // console.log("E N D");
        // res.send(tasks_to_do);
        res.status(200).send("Success");
      } else {
        console.log("Wrong Password");
        res.status(400).send({ message: "Wrong Password"});
      }
    } else {
      res.status(402).send({message:"INVALID EMAIL"});
    }
  } catch (err) {
    console.log(err);
  }
});
router.post('/admin/close', async (req, res)=>{
  const id=req.body.id;
  console.log("Closing request  ID - "+id);
  const nowTime = new Date();
  console.log(nowTime);
  const result = await Complaint.updateOne({_id:id},{ 
    $set:{
      status:"COMPLETED",
      completedTime:nowTime
    }
  })
  res.json(result);
});//close admin req
router.post("/admin/requests/", async (req, res) => {
  const AID = req.body.AID;
  var complaintsPending='';
  console.log("AID = " + AID);
  try {
     complaintsPending = await Complaint.find({ asgnTO_ID:AID });
    complaintsPending.map((reqs) => {
      console.log(reqs);
    });
  } catch (err) {
    console.log(err);
  }
  res.json(complaintsPending);
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
router.post("/user/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  var token;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password == user.password) {
        console.log("Successfullsignin");
        console.log(user);
        await JSON.stringify(user);
        token = await user.generateAuthToken();
        console.log("Tokenn /routes/ -> " + token);
        // res.cookie("jwtoken", token);
        console.log(user);
        res.send({user,token});
      } else {
        console.log("Wrong Password");
        res.status(401).send("Wrong Password");
      }
    } else {
      res.status(401).send("INVALID EMAIL");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/user/dashboard", authenticate, function (req, res) {
  console.log("Hello from GET / user / dashboard");
  console.log(req.rootUser);
  res.send(req.rootUser);
});

router.get("/user/dashboard/requestform", authenticate, function (req, res) {
  console.log("Hello from GET / user / serviceform");
  console.log(req.rootUser);
  res.send(req.rootUser);
});

function findMinReq(tasks) {
  console.log("Find Min Funciton starts ");
  console.log(tasks);
  const min = Math.min(...tasks);
  console.log("minimum occupied admin is on " + min + " tasks");
  const index = tasks.indexOf(min);
  console.log(index);
  console.log("Find Min Funciton ends ");
  return index;
}

router.get("/user/show/:EID", async (req, res) => {
  // const { EID } = req.body;
  const EID = req.params.EID;
  try {
    const complaints = await Complaint.find({ EID });
    console.log(complaints);
    // console.log(JSON.stringify(complaints));
    res.send(JSON.stringify(complaints));
  } catch (error) {
    console.log("Error Occured");
    console.log(err);
  }
});

router.post("/user/dashboard/request", async (req, res) => {
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

  console.log(EID);
  console.log(name);
  console.log(designation);
  console.log(phone);
  console.log(sector);
  console.log(block);
  console.log(qrtr);
  console.log(category);
  console.log(subcategory);
  console.log(description);

  const timestamp = Date();
  const status = "PENDING";
  var asgnTO_ID = "";
  var asgnTO_name = "";
  var asgnTO_desig = "";
  var asgnTO_contact = "";
  const feedback = "";
  const completedTime = "";

  const post_to_assign_task = complaintsHandler.get(subcategory);
  console.log("post ot assign task : " + post_to_assign_task);

  try {
    const admin = await Admin.find({
      $and: [
        { sector },
        { department: category },
        { designation: post_to_assign_task },
      ],
    });
    var tasks = [];
    for (var i = 0; i < admin.length; i++) {
      console.log(admin[i].id);
      try {
        const complaint_for_adminID = await Complaint.find({
          asgnTO_ID: admin[i].AID,
        });

        tasks[i] = complaint_for_adminID.length;
        console.log(tasks[i]);
      } catch (err) {
        console.log(err);
      }
    }
    const admin_id_with_min_req = findMinReq(tasks);
    console.log("to assign to " + admin[admin_id_with_min_req].name);

    asgnTO_ID = admin[admin_id_with_min_req].AID;
    asgnTO_name = admin[admin_id_with_min_req].name;
    asgnTO_desig = admin[admin_id_with_min_req].designation;
    asgnTO_contact = admin[admin_id_with_min_req].phone;
    // working fine
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

export default router;


//cookie : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJmZDkxNGM4MmUxMjExYTNjN2YxODUiLCJpYXQiOjE2NTY3ODI0NjF9.K1A4glG4Vch0VU8YQj_ZyX6aAhuQEXO7R08yUJEWCFQ
//db     : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFSUQiOjkwODc2LCJpYXQiOjE2NTY5MTYwNTB9.xmrQAqRUqN5E5tnqDCOBpQg0uVzlb5Mhagq2StrEk1g