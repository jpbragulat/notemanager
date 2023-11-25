# Requirements

Readme
Requirements
	- Relational Database: PostgresSQL 15 
	- Node 18.6.1 
 	- .net Core Framework 6.0
  - server deploy folder /var/www/

# Steps
	1) run the script deploy.sh for deploying the entire solution.
  2) If Script fails follow this steps:
    1. Create PG db and tables: Create a new db and import tables and structures from nmdb.sql
    2. execute "npm install" inside "frontend" folder.
    3. execute "dotnet run" inside "backend" folder.
    4. To run the frontend execute npm run --> after init to access frontend app browse to http://localhost:4200
	  5. ejecutar npm install (given size node packages...) in the folder frontend
 	  6. Enter the backend folder and execute: dotnet run.
    7. To run the frontend execute npm run --> after init to access frontend app browse http://localhost:4200
