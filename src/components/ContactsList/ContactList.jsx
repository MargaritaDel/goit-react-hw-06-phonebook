import { ContainerItem, ContainerList, ContainerButtons } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = id => dispatch(deleteContact(id));
  return (
    <ContainerList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContainerItem key={id}>
          {name}: {number}
          <ContainerButtons onClick={() => onDelete(id)}>Delete</ContainerButtons>
        </ContainerItem>
      ))}
    </ContainerList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }) ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;