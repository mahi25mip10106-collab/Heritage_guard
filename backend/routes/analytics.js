const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.get("/", async (req, res) => {

    try{

        const { data, error } = await supabase
            .from("analytics")
            .select("*")
            .limit(1);

        if(error) throw error;

        res.json({
            success:true,
            data:data[0]
        });

    }catch(err){

        res.status(500).json({
            success:false,
            error:err.message
        });

    }

});

module.exports = router;