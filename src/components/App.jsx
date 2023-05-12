import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = object => {
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), ...object }, ...contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  filterContactsOnInput = () => {
    const noramalizedContact = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(noramalizedContact)
    );
  };
  deleteById = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const { addContact, changeFilter, deleteById, filterContactsOnInput } =
      this;

    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm
            check={contacts}
            addContact={addContact}
            contacts={contacts}
          />
        </Section>
        <Section title={contacts.length !== 0 ? 'Contacts' : 'No Contacts Yet'}>
          {contacts.length !== 0 ? (
            <>
              <Filter text={filter} changeFilter={changeFilter} />
              <ContactList
                contacts={filterContactsOnInput()}
                deleteById={deleteById}
              />
            </>
          ) : (
            ' '
          )}
        </Section>
      </>
    );
  }
}
export default App;
