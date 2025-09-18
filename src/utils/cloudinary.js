const v2 = require("cloudinary");
const fs = require("fs");

v2.config({
  cloud_name: "",
  api_key: "",
  api_secret: "", // Click 'View API Keys' above to copy your API secret
});

const uploadonCloudinary = async (localFiePath) => {
  try {
    if (!localFiePath) return null;
    else {
      const response = await v2.uploader.upload(localFiePath, {
        resource_type: "auto",
      });
      console.log("File uploaded successfully", response.url);
      fs.unlinkSync(localFiePath);
      return response;
    }
  } catch (error) {
    fs.unlinkSync(localFiePath);
    return null;
  }
};

module.exports = uploadonCloudinary;
