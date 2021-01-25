# Book-Shelf-App
Programming task for Buutti Oy. Basic CRUD application with Express backend, React frontend and MongoDB database. 

### Instructions to start app locally

Download the app as a zip folder from github.

### 1. Set up database
If you have Brew installed you can skip the first command, and if you have Brew and MongoDB installed you have to use only the last three commands of phase 1.

App is using MongoDB, so if your computer does not have MongoDB installed we need to install it. MongoDB can be installed by using Brew. If you dont have Brew installed you can do it by running command
#### /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Once Brew is installed run command
#### brew tap mongodb/brew
Now you can install mongodb-community by running command
#### brew install mongodb-community@4.4
Once the install is complete you can run MongoDB by command
#### brew services start mongodb-community@4.4
Now you can start MongoDB shell in your terminal with command
#### mongo
To switch database type following command to MongoDB shell
#### use bookshelf

Now the database should be up and running.
Now we need to set up the server and client.

### 2. Set up client and server

Navigate to the downloaded project folder in your terminal. It should be called Book-Shelf-App-master

Run command
#### npm install
Navigate to client folder and run command
#### npm install
Now navigate back to the project main folder "Book-Shelf-App-master" and run command
#### npm run dev

### Now project should be up and running!




