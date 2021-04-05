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
 