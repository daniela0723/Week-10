//Add Button, variable declarations, and add task event
let add = document.getElementById("add");

add.addEventListener("click", () => {
  let table = document.getElementById("table");
  let task = document.getElementById("new-task").value;
  let taskDetails = document.getElementById("new-task-details").value;
  let date = document.getElementById("new-date").value;
  let startTime = document.getElementById("new-start-time").value;
  let endTime = document.getElementById("new-end-time").value;
  let row = document.createElement("tr");

  //Delete Button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-danger";
  deleteButton.id = "delete";

  deleteButton.addEventListener("click", () => {
    if (confirm(`Do you want to delete ${task}?`)) {
      row.remove();
    } else {
      return row;
    }
  });

  //Insert row by using template literals
  row.innerHTML = `
   
      <td>${task}</td>
      <td>${taskDetails}</td>
      <td>${date}</td>
      <td>${startTime}</td>
      <td>${endTime}</td>
      `;

  //Append row + delete button to the table
  row.appendChild(deleteButton);
  table.appendChild(row);
  clearForm();
});

//Reset Button
document.getElementById("reset").addEventListener("click", clearForm);

//Clear form after adding row to table for better UI
function clearForm() {
  document.getElementById("new-date").value = "";
  document.getElementById("new-task").value = "";
  document.getElementById("new-task-details").value = "";
  document.getElementById("new-start-time").value = "";
  document.getElementById("new-end-time").value = "";
}
