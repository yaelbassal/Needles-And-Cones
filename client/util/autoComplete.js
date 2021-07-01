const journalInfo = [
  {
    treeName: 'eastern-white-pine',
    entryName: 'entry_name_1',
    entryNote: 'entry_note_1'
  },
  {
    treeName: 'pitch-pine',
    entryName: 'entry_name_2',
    entryNote: 'entry_note_2'
  },
  {treeName: 'red-pine', entryName: 'entry_name_3', entryNote: 'entry_note_3'},
  {
    treeName: 'japanese-black-pine',
    entryName: 'entry_name_4',
    entryNote: 'entry_note_4'
  },
  {
    treeName: 'austrian-pine',
    entryName: 'entry_name_5',
    entryNote: 'entry_note_5'
  },
  {treeName: 'jack-pine', entryName: 'entry_name_6', entryNote: 'entry_note_6'},
  {treeName: 'mugo-pine', entryName: 'entry_name_7', entryNote: 'entry_note_7'},
  {
    treeName: 'scotch-pine',
    entryName: 'entry_name_8',
    entryNote: 'entry_note_8'
  }
]

function autoComplete(selectedTree) {
  let result = []

  for (let i = 0; i < journalInfo.length; i++) {
    if (journalInfo[i].treeName === selectedTree) {
      result.push(journalInfo[i].entryName)
      result.push(journalInfo[i].entryNote)
    }
  }

  return result
}

export {autoComplete}
