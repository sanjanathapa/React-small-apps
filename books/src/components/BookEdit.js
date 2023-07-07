import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({book, onSubmit}) => {
  console.log(book, "this the edot book prop")
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }
  return (
    <form className='book-edit' onSubmit={handleFormSubmit}>
      <label>
        Title
      </label>
      <input className='input' onChange={handleChange} value={title}></input>
      <button className='button is-primary'>save</button>
    </form>
  )
}

export default BookEdit


//Closing the Form on Submit

//if 2 different function is called whenever the user submits the form. eg onEdit(props) and onSubmit(props) at a single time
//so to overcoem this ..we will coolapse the two handlers into one single handleSubmit(onSubmit as a prop)