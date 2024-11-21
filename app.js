import express from "express"
import { getschools, createSchools, getSortedSchools} from "./Database.js"
const app = express()
app.use(express.json())


app.get("/getschool", async (req, res) => {
    const schools = await getschools()
    res.send(schools)
} )

app.post("/addschool", async (req, res) => {
    const { name, address, latitude, longitude } = req.body
    const school = await createSchools(name, address, latitude, longitude)
    res.json({message : "School is created successfully"});
})

app.get("/listSchools", async (req, res) => {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
        return res.status(400).json({ 
            error: "Latitude and longitude are required query parameters" 
        });
    }
    
    try {
        const schools = await getSortedSchools(parseFloat(latitude), parseFloat(longitude));
        res.json({
            message: "Here is your list of nearest schools",
            schools: schools
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching schools" });
    }
});

app.listen(3000, ()=> {
    console.log('server is running on port 3000')
})
