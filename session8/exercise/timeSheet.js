let timeSheetData = [
    {
        project: 'Learn front-end',
        task: 'Learn HTML',
        time_spent: 6,
    },
    {
        project: 'Learn front-end',
        task: 'Learn CSS',
        time_spent: 8,
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS Variables and Data Types',
        time_spent: 6,
    },
    {
        project: 'Learn git',
        task: 'Learn git basics',
        time_spent: 2,
    },
];
let tableBody = document.getElementById('tb_body');
let add_btn = document.getElementById('add_button');
let clear_btn = document.getElementById('clear_button');
let projectInput = document.getElementById('pj_input');
let timeInput = document.getElementById('time_input');
let taskInput = document.getElementById('task_input');
let thead = document.getElementById('thead');
thead.insertAdjacentHTML('beforeend', '<th>Actions</th>');
updateView();
add_btn.addEventListener('click', function (e) {
    if(add_btn.textContent == 'Update') {
        let i = add_btn.index;
        timeSheetData[i].project = projectInput.value;
        timeSheetData[i].task = taskInput.value;
        timeSheetData[i].time_spent = timeInput.value;
        add_btn.textContent = 'Add';
        updateView();
    } else {
        let newTimeSheet = {
            project: `${projectInput.value}`,
            task: `${taskInput.value}`,
            time_spent: Number(timeInput.value),
        };
        timeSheetData.push(newTimeSheet);
        updateView();
    }
});
clear_btn.addEventListener('click', function() {
    projectInput.value = '';
    taskInput.value = '';
    timeInput.value = '';
    add_btn.textContent = 'Add';
})
function updateView() {
    let listRow = document.getElementsByClassName('update');
    for(let i = 0; i < listRow.length; i+1) {
        listRow[i].remove();
    }
    for(let i = 0; i < timeSheetData.length; i++) {
        tableBody.insertAdjacentHTML('beforeend',
    `<tr class="update">
        <td>${timeSheetData[i].project}</td>
        <td>${timeSheetData[i].task}</td>
        <td>${timeSheetData[i].time_spent}</td>
        <td>
            <button onclick="removeLine(${i})">X</button>
            <button onclick="updateLine(${i})">U</button>
        </td>
    </tr>`);
    }
}
function removeLine(i) {
    timeSheetData.splice(i, 1);
    updateView();
}
function updateLine(i) {
    add_btn.textContent = 'Update';
    add_btn.index = i;
    projectInput.value = timeSheetData[i].project;
    taskInput.value = timeSheetData[i].task;
    timeInput.value = timeSheetData[i].time_spent;
}