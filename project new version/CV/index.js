// function myFunction(item) {
//   const nodeLi = document.createElement("li");
//   const textNode = document.createTextNode(item);
//   nodeLi.appendChild(textNode);
//   ul.appendChild(nodeLi);
// }

const listWorkUl = document.getElementById("listWork");
const startWorkUl = document.getElementById("startWork");
const endWorkUl = document.getElementById("endWork");

const listSchoolUl = document.getElementById("listSchool");
const startUl = document.getElementById("start");
const endUl = document.getElementById("end");

// const list = document.getElementById("list");
// const icon = document.getElementById("icon");

const handleWork = (data) => {
  data.work.forEach((item) => {
    // get name work
    const nameLi = document.createElement("li");
    const nameText = document.createTextNode(item.name);
    nameLi.appendChild(nameText);
    listWorkUl.appendChild(nameLi);
    // get start work
    const swLi = document.createElement("li");
    const swText = document.createTextNode(item.startWork);
    swLi.appendChild(swText);
    startWorkUl.appendChild(swLi);
    // get end work
    const ewLi = document.createElement("li");
    const ewText = document.createTextNode(item.endWork);
    ewLi.appendChild(ewText);
    endWorkUl.appendChild(ewLi);
  });
};
const handleShcool = (data) => {
  data.school.forEach((item) => {
    // get school name
    const nameLi = document.createElement("li");
    const nameText = document.createTextNode(item.name);
    nameLi.appendChild(nameText);
    listSchoolUl.appendChild(nameLi);
    // get start (school)
    const sLi = document.createElement("li");
    const sText = document.createTextNode(item.start);
    sLi.appendChild(sText);
    startUl.appendChild(sLi);
    // get end (school)
    const eLi = document.createElement("li");
    const eText = document.createTextNode(item.end);
    eLi.appendChild(eText);
    endUl.appendChild(eLi);
  });
};

fetch("../data/Data.json")
  .then((res) => res.json())
  .then((data) => {
    handleWork(data);
    handleShcool(data);
  })
  .catch((err) => {
    console.log("Error :", err);
  });

const onClickOnbtn = (id,iconid) => {
const list = document.getElementById(`${id}`);
const icon = document.getElementById(`${iconid}`);


  if (list.classList.contains("show")) {
    icon.className = "fa fa-arrow-up down";
    list.classList.remove("show") 
    list.classList.add("hide") 
  } else {
    icon.className = "fa fa-arrow-up up";
    list.classList.remove("hide") 
    list.classList.add("show") 

  }
};
