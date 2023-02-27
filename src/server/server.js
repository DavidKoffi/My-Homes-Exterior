import express from "express";
import http from "http";
import path from "path";
import fs from "fs";
import multer from "multer";

const app = express();
const port = 3001;
import { SendEmail } from "./emailService.js";
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send(
//     '<form method="post" enctype="multipart/form-data">' +
//       '<p>Recipient: <input type="text" name="recipient"/></p>' +
//       '<p>Subject: <input type="text" name="subject"/></p>' +
//       '<p>Message: <input type="text" name="message"/></p>' +
//       '<p>Image: <input type="file" name="image" accept=".png,.jpg,.jpeg" multiple/></p>"' +
//       '<p><input type="submit" value="Upload"/></p>' +
//       "</form>"
//   );
// });

const upload = multer({
  dest: "./temp",
});

app.post(
  "/",
  upload.array("image" /* name attribute of <file> element in your form */),
  (req, res) => {
    // const arrOfName = [];
    // for (let i = 0; i < req.files?.length; i++) {
    //   uploadImage(req, res, i, arrOfName);
    // }

    // let attachments = [];
    // arrOfName.forEach((value) => {
    //   attachments.push({ path: value });
    // });
    let data = req.body;
    //console.log(req.body);

    SendEmail(
      "davidnkoffi10@gmail.com",
      "New Job",
      `Client name: ${data.firstName} ${data.lastName} \n 
        Client address: ${data.address} \n
        Client phone number: ${data.phoneNumber} \n
        Client email: ${data.email} \n
        Expected completion date: ______ \n
        Job type: ${data.service} \n
        additional info: ${data.additionalInfo}`,
      attachments
    );
    if (res.statusCode == 200) {
      console.log("success");
    }
    // res.status(200).contentType("text/plain").end("File uploaded!");
  }
);

function uploadImage(req, res, num, arrayOfNames) {
  //get the path temp of the file uploaded from the form
  const tempPath = req.files[num].path;
  // get the extension of the uploaded file
  const extension = path.extname(req.files[num].originalname).toLowerCase();
  //make sure extension is an image format
  if (extension === ".png" || extension === ".jpg" || extension === ".jpeg") {
    //create file path for the uploaded file
    const targetPath = path.join(
      __dirname,
      `/temp/${req.body.recipient}-image-${num}${extension}`
    );
    arrayOfNames.push(targetPath);
    // rename file to the target path/file name
    fs.rename(tempPath, targetPath, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }

      console.log("uploaded image successfully");
    });
  } else {
    // if non image is uploaded.
    fs.unlink(tempPath, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }
}