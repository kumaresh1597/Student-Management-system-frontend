

const students = []; 

//   let tableElements = document.getElementsByClassName("inputs")[0];
//   console.log(tableElements);
//   console.log(tableElements["name"]);

  let idx = 1;

  function addStudents(){

    let tableElements = document.getElementsByClassName("inputs")[0];
    const name = tableElements["name"].value;
    const age = tableElements["age"].value;
    const grade = tableElements["gpa"].value;
    const degree = tableElements["degree"].value;
    const email = tableElements["email"].value;

    let newStudent = {
      ID: idx,
      name: name,
      age: age,
      grade: grade,
      degree: degree,
      email: email
}

  console.log(newStudent);

   students.push(newStudent);

    let table = document.getElementById("table");

    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${idx}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${age}</td>
            <td>${grade}</td>
            <td>
            <div class = "degree-cell">
            <div>
            ${degree}
            </div>
            <div>
            <img src="./images/edit 1.png" alt="img1" height="15px" onclick="editData(${idx})">
            <img src="./images/trash-2 1.png" alt="img2" height="15px" onclick="removeData(${idx})">
            </div>
            </div>
            </td>
    `;
    idx++;
     table.appendChild(row);
  }


  function removeData(idx){
    let tbody = document.getElementById("table");
    for(let i=1;i<tbody.children.length;i++){
      if(tbody.children[i].children[0].textContent == idx){

        tbody.children[i].remove();
      }
    }
    students.pop(idx-1);
  }

 

  function editData(index){
   
    let obj = students[index-1];

    let tableElements = document.getElementsByClassName("inputs")[0];
    tableElements["name"].value = obj.name;
    tableElements["age"].value = obj.age;
    tableElements["gpa"].value = obj.grade;
    tableElements["degree"].value = obj.degree;
    tableElements["email"].value = obj.email;

    let button = document.querySelector(".btn");
    button.textContent = "Edit Student";
    button.addEventListener("dblclick",editInDOM(index));
  }

  function editInDOM(index){
    let tableElements = document.getElementsByClassName("inputs")[0];
    let tbody = document.getElementById("table");
    // console.log(tbody);
    for(let i=1;i<tbody.children.length;i++){
      if(tbody.children[i].children[0].textContent == index){

        for(let j=1;j<tbody.children[i].children.length;j++){
          tbody.children[i].children[j].textContent = tableElements.children[j-1].value;
        }
      }
    }
  }