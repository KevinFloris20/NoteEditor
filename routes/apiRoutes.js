//constss
// const express = require("express");
const router = require("express").Router();
const storage = require("../db/db");

// module.exports = function(app) {
    router.get("/notes",(req,res)=>{
        res.json(storage)
    });

    router.post("/notes",(req,res)=>{
        
        var newnote = req.body;
        newnote.id = newnote.title + Math.floor(Math.random()*100).toString();
        storage.push(newnote);
        
    });

    router.delete("/notes/:id", (req,res)=>{
        const rm = req.params.id;
        console.log(rm);
        for( var i = 0; i < storage.length; i++){                  
            if (storage[i].id === rm) { 
                console.log(rm);
                storage.splice(i, 1); 
                i--;
            }
        }
    });

module.exports = router;
    // app.use(express.static(__dirname + '../public'));
// }



// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on table-data, waitinglist, etc.
// // ===============================================================================

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");


// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------

//   app.get("/api/tables", function(req, res) {
//     res.json(tableData);
//   });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

//   app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
