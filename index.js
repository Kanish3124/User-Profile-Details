import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.render("index.html");
});


app.post("/submit", upload.single("profileImage"), (req, res) => {
  const { username, mail, department, projectLinks, description } = req.body;
  const profileImagePath = "/uploads/" + req.file.filename;

  res.render("profile", {
    username,
    mail,
    department,
    projectLinks,
    description,
    profileImagePath,
  }); 
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
