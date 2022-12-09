import User from "../../../helper/Modal/User";
import initDB from "../../../helper/initDB";
import bcrypt from "bcrypt";


initDB()
export default async (req,res) =>{


    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res
        .status(404)
        .json({ error: "You Have Not Provided All The Informations" });
    }
  
    if (identifier.includes(".com")) {
      const user = await User.findOne({ Email: identifier });
      if (!user) {
        return res.status(404).json({ error: "User Don't Exists" });
      }
  
      const doMatch = await bcrypt.compare(password, user.Password);
  
      if (doMatch) {
        res.status(201).json(user);
      } else {
        return res.status(401).json({ error: "email or password don't match" });
      }
    } else {
      const number = await User.findOne({ UserName: identifier });
      if (!number) {
        return res.status(404).json({ error: "User Don't Exists" });
      }
  
      const doMatch = await bcrypt.compare(password, number.Password);
  
      if (doMatch) {
        res.status(201).json(number);
      } else {
        return res.status(401).json({ error: "email or password don't match" });
      }
    }







}