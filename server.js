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
          "Update Employee Role",
          "View all Roles",
          "Add role",
          "View all Departments",
          "Add department",
          "Quit",
        ],
      },
    ])
    .then((answer) => {
      if (answer.taskName === "VIEW_ALL_EMPLOYEES") {
        viewAllEmployees();
      }

      if (answer.taskName === "ADD_EMPLOYEE") {
        addEmployee();
      }

      if (answer.taskName === "UPDATE_EMPLOYEE_ROLE") {
        updateEmployeeRole();
      }

      if (answer.taskName === "VIEW_ALL_ROLES") {
        viewAllRoles();
      }

      if (answer.taskName === "ADD_ROLE") {
        addRole();
      }

      if (answer.taskName === "VIEW_ALL_DEPARTMENTS") {
        viewAllDepartments();
      }

      if (answer.taskName === "ADD_DEPARTMENT") {
        addDepartment();
      }

      if (answer.taskName === "QUIT") {
        viewAllEmployees();
      }
    });
};

const viewAllEmployees = () => {
  const sql = `SELECT employee.id, 
                employee.first_name, 
                employee.last_name, 
                role.title, 
                department.name AS department, 
                role.salary, 
                CONCAT (manager.first_name, " ", manager.last_name) AS manager
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.table("List of current employees: ", rows);
    startApp();
  });
};

addEmployee = () => {
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

startApp();
