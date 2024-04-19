import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';


const ContactForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements;
    dispatch(addContact(form.name.value, form.number.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">
        Name:{' '}
      </label>
      <input
        className="form-control"
        style={{ width: '300px' }}
        type="text"
        name="name"
        id="name"
        required
      />
      <br />
      <label className="form-label" htmlFor="number">
        Number:{' '}
      </label>
      <input
        className="form-control"
        style={{ width: '300px' }}
        type="tel"
        name="number"
        id="number"
        required
      />
      <br />
      <button className="btn btn-primary" type="submit">
        Add contacts
      </button>
    </form>
  );
};

export default ContactForm;  
