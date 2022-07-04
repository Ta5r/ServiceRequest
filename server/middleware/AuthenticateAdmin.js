import jwt from "jsonwebtoken";
import Admin from "../model/adminSchema.js";

const AuthenticateAdmin = async (req, res, next) => {
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTY5MTI2MTh9.nC55R2XJSzgx3t2i7hnLuTHKJNXnmR23B3OOMziyfGg";
  try {
    // const text = ""+req.headers.cookie;
    // let len = text.length;
    // let resultStr = text.slice(8, len);
    // const token = resultStr;
    console.log("ADMIN TOKEN __  :  " + token);
    const SECRET_KEY = "OWMRWLERTJFSNCYJANCSFGHASXZRWQURCVSFDDHJ";
    const verifyToken = jwt.verify(token, SECRET_KEY);
    
    console.log("is");
    console.log(verifyToken._id);
    console.log("was");
    const rootAdmin = await Admin.findOne({
      AID: verifyToken.AID,
      "tokens.token": token,
    });
    if (!rootAdmin) {
      throw new Error("Admin not found");
    }
    req.token = token;
    req.rootAdmin = rootAdmin;
    next();
  } catch (err) {
    res.status(401).send("UnAuthorized : No Token provided");
    console.log(err);
  }
};
export default AuthenticateAdmin;