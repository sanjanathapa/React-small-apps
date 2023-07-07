import { useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('')
    }
  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className=""input  value={title} onChange={handleChange}/>
        <button className='button' >Submit</button>
      </form>
    </div>
  )
}

export default BookCreate

//whenever we amke an update to an array or an object. and that attay or object is managed by our state system, we are going to make these updates in a very
//special fashion. so inorder to update our boosarray piece of state, we will apply updates with some special syntax