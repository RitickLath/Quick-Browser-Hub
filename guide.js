let input = document.getElementById("links");
let add_more = document.getElementById("add_more");
let download_btn = document.getElementById("download_btn");
let sites_Array = [];
let sites = "";
let file_text = "";

// making a list of sites by giving add more click event
add_more.addEventListener("click", function () {
  let val = "" + input.value;
  sites_Array.push(val);
  input.value = "";
});

let downaded_once = true;
download_btn.addEventListener("click", function (e) {
  //e.preventDefault();
  // Check if the input value is not empty before pushing it to the array
  const val = input.value.trim(); // Remove leading and trailing spaces
  if (val !== "") {
    sites_Array.push(val);
  }
  //   sites_Array.push(input.value);

  for (let i = 0; i < sites_Array.length; i++) {
    sites = sites + `start ${sites_Array[i]}\n`;
  }
  file_text = `echo off \n${sites}`;

  if (downaded_once) {
    const blob = new Blob([file_text], { type: "application/bat" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "your_site.bat";
    a.click();
    URL.revokeObjectURL(url);
    downaded_once = false;
  }
});
