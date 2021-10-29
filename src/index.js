const { SkynetClient } = require("skynet-js");
const skynetClient = new SkynetClient();

const inputElement = document.getElementById("file");

inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  const file = this.files[0];

  console.log("File size", file.size);

  console.time("upload");
  skynetClient.uploadFile(file).then(() => {
    console.timeEnd("upload");
  });
}
