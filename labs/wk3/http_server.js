const http = require('http');
const students = require('./modules/students'); // local module
const employees = require('./modules/Employee')
const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost'; //127.0.0.1

// console.log(http);
const server = http.createServer((req, res) => {
    console.log(req.method) // GET, POST, PUT, DELETE
    console.log(req.url)
    // console.log(res)
    
    if(req.method !== 'GET'){
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if(req.url === '/'){ // http://localhost:3000/
            res.statusCode = 200; // OK 
            res.setHeader('Content-Type',  'text/html');
            res.end('Hello World!\n');    
        } else if(req.url === '/about'){ //http://localhost:3000/about
            res.statusCode = 200; // OK
            res.setHeader('Content-Type',  'text/html');
            res.end('<h1>About Us</h1><p>This is the about page.</p>');    
        } else if (req.url === '/students') { //http://localhost:3000/students
            res.statusCode = 200; // OK
            res.setHeader('Content-Type',  'application/json');
            const studentsList = students.getStudents(); // Call the function to get all student details
            res.end(JSON.stringify(studentsList)); // Convert JS object to JSON string
        } else if (req.url === '/employee') { //http://localhost:3000/employees
            res.statusCode = 200; // OK
            res.setHeader('Content-Type',  'application/json');
            const employeeList = employees.getEmployees(); // Call the function to get all employee details
            res.end(JSON.stringify(employeeList)); // Convert JS object to JSON string
        } else if (req.url === '/employee/names') { //http://localhost:3000/employees/names
            res.statusCode = 200; // OK
            res.setHeader('Content-Type',  'application/json');
            const employeeNamesList = employees.getEmployeeNames(); // Call the function to get names of all employees
            res.end(JSON.stringify(employeeNamesList)); // Convert JS object to JSON string
        } else if (req.url === '/employee/totalsalary') { //http://localhost:3000/employees/totalsalary
            res.statusCode = 200; // OK
            res.setHeader('Content-Type',  'application/json');
            const employeeNamesList = employees.getTotalSalary(); // Call the function to get Total Salary of employees
            res.end(JSON.stringify(employeeNamesList)); // Convert JS object to JSON string
        } else {
            res.statusCode = 404; // OK
            res.setHeader('Content-Type',  'text/html');
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist</p>');    
        }
    }
    
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}`);
});

