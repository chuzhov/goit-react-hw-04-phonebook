import PropTypes from 'prop-types';
import DeleteContactBtn from 'components/DeleteContactBtn/DeleteContactBtn';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return contacts.length ? (
    <ul className={css['list']}>
      {contacts.map(el => (
        <li key={'li' + el.id} className={css['item']}>
          <p>
            <span className={css['name']}>{el.name}</span>
            <span className={css['phone-number']}>{el.number}</span>
          </p>
          <DeleteContactBtn id={el.id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There aren't contacts matching...</p>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
