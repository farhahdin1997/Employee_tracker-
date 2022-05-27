USE tracker_db;

INSERT INTO departments(department_name) VALUES 
("Management"),
("Service Control"),
("Software Support"),
("HR"),
("Client Accounts"),
("Developments"),
("Projects");

INSERT INTO roles(title, salary, department_id) VALUES
("Lead", 180000, 1),
("Monitor", 100000, 2),
("Software Analyst", 110000, 3),
("HR Rep", 90000, 4),
("Accountant", 90000, 5),
("Software Engineer", 100000, 6);

INSERT INTO employees(first_name, last_name, role_id) VALUES
("Mike", "Tyson", 1),
("Aisha", "Din", 4),
("Humza", "Manzoor", 2),
("Bilal", "Manzoor", 3),
("Isma", "Bibi", 6),
("Katie", "Tompson", 5);

