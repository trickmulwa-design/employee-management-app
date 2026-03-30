// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('employeeForm');
  const table = document.getElementById('contactsTable');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const employee = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        department: document.getElementById('department').value,
        position: document.getElementById('position').value
      };

      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      employees.push(employee);
      localStorage.setItem('employees', JSON.stringify(employees));

      alert('Employee added successfully!');
      form.reset();
    });
  }

  if (table) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.forEach((emp, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.phone}</td>
        <td>${emp.department}</td>
        <td>
          <button class="action-btn" onclick="viewDetails(${index})">Details</button>
          <button class="action-btn" onclick="editEmployee(${index})">Edit</button>
          <button class="action-btn delete" onclick="deleteEmployee(${index})">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
  }
});

function viewDetails(index) {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const emp = employees[index];
  alert(`Name: ${emp.name}\nEmail: ${emp.email}\nPhone: ${emp.phone}\nDepartment: ${emp.department}\nPosition: ${emp.position}`);
}

function editEmployee(index) {
  alert('Edit employee feature coming soon!');
}

function deleteEmployee(index) {
  if (confirm('Are you sure you want to delete?')) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    window.location.reload();
  }
}
