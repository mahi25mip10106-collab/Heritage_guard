const router = require("express").Router();
const supabase = require("../config/supabase");

router.get("/sos", (req, res) => {
    res.json({
        success: true,
        message: "TAVIS Route Working"
    });
});

router.post("/sos", async (req, res) => {

    try{

        const { latitude, longitude } = req.body;

        const { error } = await supabase
            .from("sos_logs")
            .insert([
                {
                    latitude,
                    longitude,
                    emergency_type: "Emergency SOS",
                    status: "Active"
                }
            ]);

        if(error) throw error;

        res.json({
            success: true,
            emergencyId: "SOS-" + Date.now(),
            status: "Recorded Successfully"
        });

    }catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

});

module.exports = router;