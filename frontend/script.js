const apiURL = "http://localhost:5000/employees";

fetch(apiURL)
.then(response => response.json())
.then(data => {

    const table = document.getElementById("employeeTable");

    data.forEach(emp => {

        table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.role}</td>
            </tr>
        `;

    });

})
.catch(error => console.log(error));
