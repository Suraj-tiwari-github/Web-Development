const suraj=require('./suraj')
//* where suraj.js is a js file which is located in the same directory.
const gautam=require('./gautam');
const sanjana=require('./sanjana');

//* here we are creating arrays of all the file and printing them.
const home=[suraj,gautam,sanjana];

module.exports=home;
//* when node takes the file from the directory it will take index.js file and we are exporting all the 3 files in one go.