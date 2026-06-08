
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        name : "Sujal",
        id: "1"
    });
})

app.listen(PORT, () => {
    console.log("Server running on PORT ", PORT);
})
