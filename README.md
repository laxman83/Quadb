# Quadb

1.Clone this repository in your local computer (https://github.com/laxman83/Quadb.git)
2.Change the location of terminal to the cloned repository folder
3.Enter npm install command in the terminal for installing dependencies
(we are using the following dependencies
	--Expressjs
	--body-parser
	--axios
	--cors
	--pg
	--serve
)
4.For connecting to the postgres database please change the database crediantial & host in config/db.js file.
5.For importing data from the https://api.wazirx.com/api/v2/tickers  api please run the npm run data:import command.
 (if anycase you want to remove data then please run the npm run data:destroy command)
6.Now start the server using node server.js command.
(the above steps is for starting backend server)
7.For starting the front end server use the serve command.
8.Open localhost url (http://localhost:5000) in the browser
