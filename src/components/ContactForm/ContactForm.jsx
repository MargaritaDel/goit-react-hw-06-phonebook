import { useState } from 'react';
import { ContainerForm, ContainerInput } from './ContactForms.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleOnSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const {
      elements: { name, number },
    } = form;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );
    if (isExist) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    dispatch(addContact(name.value, number.value));
    setName('');
    setNumber('');
    form.reset();
  };

  const handleChangeName = event => setName(event.target.value);

  const handleChangeNumber = event => setNumber(event.target.value);

  return (
    <ContainerForm action="" onSubmit={handleOnSubmit}>
      <ContainerInput htmlFor="" name="name">
        Name
        <input
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContainerInput>
      <ContainerInput htmlFor="" name="number">
        Number
        <input
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContainerInput>

      <button type="submit">Add contact</button>
    </ContainerForm>
  );
};


ContactForm.propTypes = {
  addContact:PropTypes.func.isRequired,
};

export default ContactForm;