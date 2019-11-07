# Burger

Burger is a web-based app where users can keep track of burgers they'd like to eat.  It utilizes CRUD methods to operate on a database on the backend to store the information filled out on the webpage.  Burger is a full stack app that utilizes Node/Express/MySQL on the backend to interact with the front-end site.  The front-end utilizes jQuery and BootStrap.   

# Getting Started

## Prerequisites for development

1.  MySQL instance installed on your local machine or a MySQL instance deployed to a remote server (i.e. JawsDB on Heroku)
2.  Node and NPM installed on your local machine

## Installing

Follow the instructions in this section to get the app setup to run on your machine.

1.  Clone the git project to your machine (example below is using ssh)
    ``` bash
    git clone git@github.com:chrisducey01/Burger.git
    ```

2.  Install the node module dependencies from the package.json file
    ``` bash
    npm install
    ```

3.  Create a .env file in the top level directory.  This will contain the variables to connect to your MySQL database.
    a.  If you are using a local instance of MySQL, you will need the following variables included in your .env file.  You will need to update, at minimum the LOCAL_DB_USER and LOCAL_DB_PASSWORD values to the db account you have setup in MySQL (replace everything to the right of the equals sign, including the carats <>):
    ```
    # MySQL DB Variables
    LOCAL_DB_USER=<user id>
    LOCAL_DB_PASSWORD=<password>
    LOCAL_DB_NAME=burgers_db
    LOCAL_DB_HOST=localhost
    LOCAL_DB_PORT=3306
    ```
    b.  If you are hosting your app on Heroku, use the JawsDB add-on that will create a MySQL instance for your app.  The `JAWSDB_URL` variable will be set on Heroku and is referenced in the `config/connection.js` file.  It will be used when present, else it will fall back to the LOCAL_DB variables.  You can get the value for `JAWSDB_URL` in your  Heroku app.
        1.  Go to your app and click on the `Resources` tab.
        2.  In the `Add-ons` section, find the JawsDB entry and click on the link.  This will open a new browser tab and take you to the JawsDB website which will provide you with the connection string you can use to setup a connection in MySQL Workbench (or another MySQL tool).
        ``` bash
        JAWSDB_URL='mysql://<username>:<password>@g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/<dbname>'
        ```

4.  Locate the schema.sql file in the db folder of the project.  Execute all comamands if using a local MySQL instance to create the database and table definitions.  Skip the top section with the `CREATE DATABASE` statement if hosting a JawsDB MySQL instance on Heroku since the database will have already been created for you.

5.  Locate the seed.sql file in the db folder of the project.  Execute the sql commands to populate the tables created in step 4 with sample data.

# Running the app

There is a start script in the package.json file that starts up the server and connects to the MySQL database.  If you're deploying the app to Heroku, part of the deployment will automatically call this script to start the server.  If you're running this on a local machine, navigate to the project folder and run the command:
``` bash
npm start
```

## Demo

There is a demo of this app available on Heroku.  You can interact with the app and see the full functionality.  Some examples of the app's functionality:
1.  Add a burger in the input text box and click submit.  The new burger will be inserted into the database via a POST request and the page will refresh and show the new burger under the  "Burgers to Eat" column.
2.  For a burger in the  "Burgers to Eat" column, click on the button with the fork and knife icon.  This will "eat the burger" and move it to the "Burgers You've Eaten" column.  Behind the scenes, the entry in the database will be updated to indicate it was eaten by a PUT request to the burgers API.
3.  For a burger in the "Burgers You've Eaten" column, click on the button with the left arrow icon.  This will move it back to the "Burgers to Eat" column.  The entry for this burger will be updated in the database using a PUT request.
4.  For either column, click on the button with the trash icon for any burger.  That will remove it from the page and also its entry from the database using a DELETE request.
5.  You can validate the input validation by trying to add a burger that already exists, or by trying to insert an empty value.  Both requests will fail and you will be prompted with an error message below the text box.

[Visit Demo Site](https://peaceful-forest-77987.herokuapp.com/)

## Authors
* **Christopher Ducey** - *Initial work* - [chrisducey01](https://github.com/chrisducey01)
