# Quadb

1.Clone this repository in your local computer (https://github.com/laxman83/Quadb.git)<br />
2.Change the location of terminal to the cloned repository folder<br />
3.Enter npm install command in the terminal for installing dependencies<br />
(we are using the following dependencies<br />
	--Expressjs<br />
	--body-parser<br />
	--axios<br />
	--cors<br />
	--pg<br />
	--serve<br />
)<br />
4.For connecting to the postgres database please change the database crediantial & host in config/db.js file.<br />
5.For importing data from the https://api.wazirx.com/api/v2/tickers  api please run the npm run data:import command.<br />
 (if anycase you want to remove data then please run the npm run data:destroy command)<br />
6.Now start the server using node server.js command.<br />
(the above steps is for starting backend server)<br />
7.For starting the front end server use the serve command.<br />
8.Open localhost url (http://localhost:5000) in the browser<br />
