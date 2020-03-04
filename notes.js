const fs = require('fs');
const chalk = require('chalk');
const getnotes = () => {
    console.log('hbc');
}

const addnotes = (title,body) => {

    const notes = loadnotes();
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes);
    console.log(chalk.green.inverse('new note added'));
}

const savenotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}
const loadnotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
        
    } catch (e) {
        return []
    }
    
}
const removenotes = (title) =>
 {
    const notes = loadnotes();
    const notestokeep = notes.filter((notes) => notes.title!==title)
        
    
    savenotes(notestokeep)
    if(notes.length>notestokeep.length)
    {
        console.log(chalk.green.inverse('note removed'))
    }
    else
    console.log(chalk.red.inverse('no note found'))
}

const listnotes = () =>{
    const notes = loadnotes();
    console.log(chalk.blue.inverse('Your notes'));
    notes.forEach(e => {
        console.log(e.title);
    });
}

const readnotes = (title) =>{
    const notes =loadnotes();
    const notestoread = notes.find((notes) => notes.title===title)
    console.log(chalk.inverse(notestoread.title));
    console.log(notestoread.body);
}

module.exports = {
    getnotes:getnotes,
    addnotes:addnotes,
    removenotes:removenotes,
    listnotes:listnotes,
    readnotes:readnotes
}

