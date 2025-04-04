import app from "./App.js";
import cloudinary from "cloudinary";
cloudinary.v2.config({ //based on config file
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(process.env.PORT, () => {
    console.log(`Server at port ${process.env.PORT}`);
  });
  