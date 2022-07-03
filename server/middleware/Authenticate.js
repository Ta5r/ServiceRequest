import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

const Authenticate = async (req, res, next) => {
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFSUQiOjkwODc5LCJpYXQiOjE2NTY4MjM4MzZ9.OZ64w49V-PVIKK79R5QjcCrdxDlj-cXcB0n4NPGikHs";
  try {
    const text = ""+req.headers.cookie;
    let len = text.length;
    let resultStr = text.slice(8, len);
    // const token = resultStr;
    console.log("TOKEN __  :  " + token);
    const SECRET_KEY = "OWMRWLERTJFSNCYJANCSFGHASXZRWQURCVSFDDHJ";
    const verifyToken = jwt.verify(token, SECRET_KEY);

    console.log(verifyToken._id);
    const rootUser = await User.findOne({
      EID: verifyToken.EID,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    next();
  } catch (err) {
    res.status(401).send("UnAuthorized : No Token provided");
    console.log(err);
  }
};
export default Authenticate;