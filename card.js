alert("Thank you for reviwing my application");
let grade = document.querySelector("#secondGrade");

grade.addEventListener("click", () => {
  grade.innerHTML = "Hello There";
  grade.style.color = "#green";
  let details = document.querySelector(".card-text1");
  details.innerHTML = "xandreix93@gmail.com </br> Tel:+447424131617";
  details.style.color = "#50C878";
  let aboutMe = document.querySelector(".card-text2");
  aboutMe.innerHTML =
    "I am really driven by results, for me, programming fascinated me in the aspects of all the programs and applications you can make with it.";
  aboutMe.style.color = "#50C878";
  let firstHeader = document.querySelector("#firstHeader");
  firstHeader.innerHTML = "OpenToWork";
  firstHeader.style.color = "#50C878";
  let secondHeader = document.querySelector("#secondHeader");
  secondHeader.innerHTML = 8;
  secondHeader.style.color = "#50C878";
  let studies = document.querySelector("#btnInfo");
  studies.innerHTML = "I have studied";
  studies.style.color = "#50C878";
  let grade2 = document.querySelector("#grade");
  grade2.innerHTML = "BSc Computing Sciences";
  let student = document.querySelector("#studentName");
  student.innerHTML = "Andrei Sbirciog";
  let profile = document.querySelector("#profile");
  profile.style.transform = "scale(0)";
  let cap = document.querySelector("#cap2");
  cap.style.color = "black";
  let cap1 = document.querySelector("#cap");
  cap1.style.backgroundColor = "transparent";
});
