import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchJournal, updateJournalEntry} from '../store/journal'

/**
 * COMPONENT
 */
class Journal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTree: '',
      entryName: '',
      entryNotes: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getJournal()
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      await this.props.updateJournalEntry(this.state)
      this.setState({
        selectedTree: '',
        entryName: '',
        entryNotes: ''
      })
      //added getJournal() thunk to update state. Look into why it is not working without it. updateJournalEntry() should be doing the same.
      await this.props.getJournal()
    } catch (err) {
      console.log(error)
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
                  <p>Entry Name: {journal.entry_name_1}</p>
                  <p>Notes: {journal.entry_note_1}</p>
                </section>
                <section>
                  <h3>Pitch Pine</h3>
                  <p>Entry Name: {journal.entry_name_2}</p>
                  <p>Notes: {journal.entry_note_2}</p>
                </section>
                <section>
                  <h3>Red Pine</h3>
                  <p>Entry Name: {journal.entry_name_3}</p>
                  <p>Notes: {journal.entry_note_3}</p>
                </section>
                <section>
                  <h3>Japanese Black Pine</h3>
                  <p>Entry Name: {journal.entry_name_4}</p>
                  <p>Notes: {journal.entry_note_4}</p>
                </section>
                <section>
                  <h3>Austrian Pine</h3>
                  <p>Entry Name: {journal.entry_name_5}</p>
                  <p>Notes: {journal.entry_note_5}</p>
                </section>
                <section>
                  <h3>Jack Pine</h3>
                  <p>Entry Name: {journal.entry_name_6}</p>
                  <p>Notes: {journal.entry_note_6}</p>
                </section>
                <section>
                  <h3>Mugo Pine</h3>
                  <p>Entry Name: {journal.entry_name_7}</p>
                  <p>Notes: {journal.entry_note_7}</p>
                </section>
                <section>
                  <h3>Scotch Pine</h3>
                  <p>Entry Name: {journal.entry_name_8}</p>
                  <p>Notes: {journal.entry_note_8}</p>
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
              Update entry name:
              <input
                type="text"
                name="entryName"
                placeholder="update entry name"
                value={this.state.entryName}
                onChange={this.handleChange}
              />
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
