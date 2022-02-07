const db = require("./db/index");
const inquirer = require("inquirer");
const { connection } = require("./db/index");
const cTable = require("console.table");

const startApp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "taskName",
        message: "What do you want to do?",
        choices: [
          "View all employees",
          "Add employee",
          "Update employee role",
          "View all roles",
          "Add role",
          "View all departments",
          "Add department",
          "Quit",
        ],
      },
    ])
    .then((answer) => {
      if (answer.taskName === "View all employees") {
        viewAllEmployees();
      }

      if (answer.taskName === "Add employee") {
        addEmployee();
      }

      if (answer.taskName === "Update employee role") {
        updateEmployeeRole();
      }

      if (answer.taskName === "View all roles") {
        viewAllRoles();
      }

      if (answer.taskName === "Add role") {
        addRole();
      }

      if (answer.taskName === "View all departments") {
        viewAllDepartments();
      }

      if (answer.taskName === "Add department") {
        addDepartment();
      }

      if (answer.taskName === "Quit") {
        viewAllEmployees();
      }
    });
};

const viewAllEmployees = () => {
  const sql = `SELECT employee.id, 
                employee.first_name, 
                employee.last_name, 
                roles.title, 
                department.name AS department, 
                roles.salary, 
                CONCAT (manager.first_name, " ", manager.last_name) AS manager
                FROM employee
                LEFT JOIN roles ON employee.roles_id = roles.id
                LEFT JOIN department ON roles.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.table("List of current employees: ", rows);
    startApp();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeFirstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "employeeLastName",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        choices: [
          {
            name: "Sales Lead",
            value: "SALES_LEAD",
          },
          {
            name: "Salesperson",
            value: "SALESPERSON",
          },
          {
            name: "Lead Engineer",
            value: "LEAD_ENGINEER",
          },
          {
            name: "Software Engineer",
            value: "SOFTWARE_ENGINEER",
          },
          {
            name: "Account Manager",
            value: "ACCOUNT_MANAGER",
          },
          {
            name: "Accountant",
            value: "ACCOUNTANT",
          },
          {
            name: "Legal Team Lead",
            value: "LEGAL_TEAM_LEAD",
          },
          {
            name: "Lawyer",
            value: "LAWYER",
          },
        ],
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employee (employee.id, employee.first_name, employee.last_name, employee.role) VALUES (?, ?, ?, ?)`;
    });
};

const viewAllRoles = () => {
  const sql = "SELECT * FROM roles";
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.table("List of all currrent roles: ", res);
    startApp();
  });
};

const viewAllDepartments = () => {
  const sql = "SELECT * FROM department";
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.table("List of all departments:", res);
    startApp();
  });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO department (name)
                  VALUES (?)`;
      connection.query(sql, answer.dpartmentName, (err, res) => {
        if (err) throw err;
        console.log("New department added: ", res);
        viewAllDepartments();
        startApp();
      });
    });
};

startApp();
