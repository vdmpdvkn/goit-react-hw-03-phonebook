import propTypes from 'prop-types';
import { Button } from 'commonStyles/commonStyles.styled';
import StyledUl from './ContactsList.styled';
const ContactList = ({ contacts, deleteById }) => (
  <StyledUl>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <Button
          type="button"
          onClick={() => {
            deleteById(contact.id);
          }}
        >
          Delete
        </Button>
      </li>
    ))}
  </StyledUl>
);
ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteById: propTypes.func.isRequired,
};
export default ContactList;
