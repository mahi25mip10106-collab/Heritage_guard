const router = require("express").Router();
const supabase = require("../config/supabase");

router.get("/", (req, res) => {
    res.json({
        module: "PARAMPARA",
        status: "running"
    });
});

router.post("/recommend", async (req, res) => {

    try {

        const { category } = req.body;

        const places = {
            food: "Local Heritage Restaurant",
            culture: "Traditional Cultural Center",
            monument: "Historic Fort",
            shopping: "Handicraft Market"
        };

        const place = places[category] || "Heritage Museum";

        await supabase
            .from("recommendations")
            .insert([
                {
                    category,
                    place
                }
            ]);

        res.json({
            success: true,
            recommendation: place
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

module.exports = router;