const journalInfo = [
  {
    treeName: 'eastern-white-pine',
    entryNote: 'entry_note_1'
  },
  {
    treeName: 'pitch-pine',
    entryNote: 'entry_note_2'
  },
  {treeName: 'red-pine', entryNote: 'entry_note_3'},
  {
    treeName: 'japanese-black-pine',
    entryNote: 'entry_note_4'
  },
  {
    treeName: 'austrian-pine',
    entryNote: 'entry_note_5'
  },
  {treeName: 'jack-pine', entryNote: 'entry_note_6'},
  {treeName: 'mugo-pine', entryNote: 'entry_note_7'},
  {
    treeName: 'scotch-pine',
    entryNote: 'entry_note_8'
  }
]

//autoComplete function returns an object with the name of the key in the journal props object for a given input value's notes. These keys are needed to reference a dropdown selection's values in the journal component.

function autoComplete(val) {
  let autoCompleteKey = {}

  for (let i = 0; i < journalInfo.length; i++) {
    //entry note key for a selected tree is inserted into the autoCompleteKeys object as a value.
    if (journalInfo[i].treeName === val) {
      autoCompleteKey.entryNote = journalInfo[i].entryNote
    }
  }
  //example of a return {entryNote: "entry_note_2"}
  return autoCompleteKey
}

export {autoComplete}
