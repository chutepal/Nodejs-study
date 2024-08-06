# NodeJS

NodeJS is a runtime environment for executing javascript code. It contains a javascript engine that executes a javascript code  i.e. V8 engine

## REPL
To execute small nodejs code in terminal, run 'node' in terminal window. It will create the REPL(Read Eval Print Loop) environment to execute nodejs code.

## Underscore(_)
'_' is a special variable that stores the result of previous expression.
Example: > 20+10
         30
         > _
         30
         > _ - 5
         25
         > _
         25

## GET USER INPUT
To get input from user, use 'readline' module.
NodeJS file: getUserInp.js    

## Read/Write file
Use fs module
Synchronous: readWriteFileSync.js  
Asynchronous: readWriteFileAsync.js  
