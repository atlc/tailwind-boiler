import * as express from "express";
import db from "./db";

const router = express.Router();

router.get("/api/dookie", async (req, res) => {
    try {
        const items = await db.dookie.all();
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to get all dookie items", error: error.message || error });
    }
});

router.post("/api/dookie", async (req, res) => {
    const { strang } = req.body;
    try {
        await db.dookie.create(strang);
        res.status(201).json({ message: "Nice :)" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to get all dookie items", error: error.message || error });
    }
});

export default router;
