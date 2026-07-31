const router = require("express").Router();
const supabase = require("../config/supabase");

router.post("/chat", async (req, res) => {
    try {

        const { prompt } = req.body;

        const replies = {
            fort: "This fort was built in the medieval period and is known for its strategic architecture.",
            temple: "This temple is an important cultural heritage site with centuries of history.",
            museum: "The museum preserves local history, artifacts, and traditions."
        };

        let reply = "Welcome to Daastaan AI. Ask me about any heritage site.";

        const q = (prompt || "").toLowerCase();

        if (q.includes("fort")) reply = replies.fort;
        if (q.includes("temple")) reply = replies.temple;
        if (q.includes("museum")) reply = replies.museum;

        // Save chat in database
        await supabase
            .from("chat_history")
            .insert([
                {
                    question: prompt,
                    answer: reply
                }
            ]);

        res.json({
            success: true,
            reply
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

module.exports = router;