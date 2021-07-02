import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchJournal, updateJournalEntry} from '../store/journal'
import {autoComplete} from '../util/autoComplete'

/**
 * COMPONENT
 */
class Journal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTree: '',
      entryNotes: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkAutoComplete = this.checkAutoComplete.bind(this)
  }

  componentDidMount() {
    this.props.getJournal()
  }

  handleChange(event) {
    const journalFromProps = this.props.journal[0]
    const name = event.target.name
    const value = event.target.value

    let stateUpdates

    if (name === 'selectedTree') {
      stateUpdates = this.checkAutoComplete(value)
    }

    //if a user has selected from a dropdown option, update this.state.selectedTree and this.state.entryNotes. Allows for a dynamic form with autocompletion.
    if (stateUpdates) {
      let note = journalFromProps[stateUpdates.entryNote]

      this.setState({
        [name]: value,
        //if "note" is null or undefined, set the state to an empty string. It is not the best practice to have state as null or undefined.
        entryNotes: note ? note : ''
      })
      //otherwise....a user is updating the notes section. Only update the entryNotes part of state.
    } else {
      this.setState({[name]: value})
    }
  }

  checkAutoComplete(val) {
    let result

    result = autoComplete(val)

    return result
  }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      await this.props.updateJournalEntry(this.state)
      this.setState({
        selectedTree: '',
        entryNotes: ''
      })
      //added getJournal() thunk to update state. Look into why it is not working without it. updateJournalEntry() should be doing the same.
      await this.props.getJournal()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const journal = this.props.journal[0]

    return (
      <div className="journal-outer-container">
        {/* journal content */}
        <div className="journal-container">
          <header>
            <h2>My Tree Journal</h2>
          </header>
          <main>
            {journal ? (
              <div className="entries-container">
                <section>
                  <h3>Eastern White Pine</h3>
                  <p>
                    <strong>Notes: </strong>
                    {journal.entry_note_1}
                  </p>
                </section>
                <section>
                  <h3>Pitch Pine</h3>
                  <p>
                    <strong>Notes: </strong> {journal.entry_note_2}
                  </p>
                </section>
                <section>
                  <h3>Red Pine</h3>
                  <p>
                    <strong>Notes: </strong>
                    {journal.entry_note_3}
                  </p>
                </section>
                <section>
                  <h3>Japanese Black Pine</h3>
                  <p>
                    <strong>Notes: </strong> {journal.entry_note_4}
                  </p>
                </section>
                <section>
                  <h3>Austrian Pine</h3>
                  <p>
                    <strong>Notes: </strong> {journal.entry_note_5}
                  </p>
                </section>
                <section>
                  <h3>Jack Pine</h3>
                  <p>
                    <strong>Notes: </strong> {journal.entry_note_6}
                  </p>
                </section>
                <section>
                  <h3>Mugo Pine</h3>
                  <p>
                    <strong>Notes: </strong>
                    {journal.entry_note_7}
                  </p>
                </section>
                <section>
                  <h3>Scotch Pine</h3>
                  <p>
                    <strong>Notes: </strong> {journal.entry_note_8}
                  </p>
                </section>
              </div>
            ) : (
              <p>Journal Information Are Not Currently Available</p>
            )}
          </main>
        </div>
        {/* journal entry update form */}
        <div className="journal-form-container">
          <header>
            <h2>Add some notes!</h2>
          </header>
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose a tree:
              <select
                name="selectedTree"
                value={this.state.selectedTree}
                onChange={this.handleChange}
              >
                <option value="" />
                <option value="eastern-white-pine">Eastern White Pine</option>
                <option value="pitch-pine">Pitch Pine</option>
                <option value="red-pine">Red Pine</option>
                <option value="japanese-black-pine">Japanese Black Pine</option>
                <option value="austrian-pine">Austrian Pine</option>
                <option value="jack-pine">Jack Pine</option>
                <option value="mugo-pine">Mugo Pine</option>
                <option value="scotch-pine">Scotch Pine</option>
              </select>
            </label>
            <br />
            <label>
              Update entry notes:
              <br />
              <textarea
                type="text"
                name="entryNotes"
                placeholder="write your notes here"
                value={this.state.entryNotes}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    journal: state.journal
  }
}

const mapDispatch = dispatch => {
  return {
    getJournal: () => dispatch(fetchJournal()),
    updateJournalEntry: entryInfo => dispatch(updateJournalEntry(entryInfo))
  }
}

export default connect(mapState, mapDispatch)(Journal)
