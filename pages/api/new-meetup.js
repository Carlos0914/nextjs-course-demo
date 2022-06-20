import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            "mongodb+srv://admin:o9R3m2eL7MB4Hr2f@cluster0.g2b9g.mongodb.net/meetups?retryWrites=true&w=majority"
        );
        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;
