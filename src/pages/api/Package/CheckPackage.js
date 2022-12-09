import initDB from "../../../helper/initDB";
import PackageHistory from "../../../helper/Modal/History/PackageHistory";





export default async (req,res) =>{

    const { ids } = req.body;


    const finPackageHistory = await PackageHistory({PackageOwner:ids})



    if (finPackageHistory.lenght == 0) {


        
    }else{



    }








    res.status(200).json("Done")









}


