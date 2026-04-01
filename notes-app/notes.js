import fs from 'fs'
import chalk from 'chalk'

//reading a note
export const readNote = (title) => {
    const notes = loadNotes();

    const noteToRead = notes.find((note)=> {
        return note.title === title
    })

    if(noteToRead ){
        console.log(chalk.red(noteToRead.title))
        console.log(noteToRead.body)
    } 
    else {
        console.log('No note found')
    }
}

//add Note
export const addNotes = (title, body) => {
    const notes = loadNotes()
    const dupNote = notes.filter((note)=>{
        return note.title === title
    })

    if(dupNote.length === 0 ){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
        console.log('new note added')
    }

    else {
        console.log('note title taken')
    }
    console.log(notes)

    // fs.writeFileSync('notes.json',)
}

//Get existing notes
export const loadNotes = () => {
    try{
        const notes = JSON.parse(fs.readFileSync('notes.json').toString())
        return notes
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

//remove a note
export const removeNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(n => n.title === title);
    console.log('title to be removed: ', title)
    if (note) {
        const updatesNotes = notes.filter((note) => {
            return note.title !== title
        })
        saveNotes(updatesNotes);
        console.log(chalk.bgGreen(title, ' removed!'))

    } else {
        console.log(chalk.bgRed('title doesnt exist'))
    }

}
