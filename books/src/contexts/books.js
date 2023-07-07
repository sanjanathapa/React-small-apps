import { createContext, useState } from "react";
import axios from 'axios';
const BooksContext = createContext();


console.log(
  "this is the context->>>>>>>>>>>",
  BooksContext,
  typeof BooksContext
);

function Provider({ children }) {
    const [books, setBooks] = useState([]);

  const fetchBooks = async () =>{
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
  }

  const createBook = async (title) => {
    //BAD CODE!!!!
    //books.push({ id: 123, title: "harry Potter" });
    //so when we create this array right here(useState([])). React saves a reference to it. we then update that array at some
    //future point in time, but we are updating the exact same array in memory. when we thenput that exact same array into the
    //set books func.
    //React is gonna take a look at this var right here and compare it to the originl array up here(useState([])). it sees if they
    // are same array imnot going to apply any update to the app component. thats why we cant see any changes to the browser screen

    //    console.log(books, "-------books-")
    //     setBooks(books);

    //Right Way to do this with special syntax
    const response = await axios.post('http://localhost:3001/books', {
      title: title
    })
    console.log("this is the create book", response)
    const updatedBooks = [  ...books, response.data
      // {
      //   id: Math.round(Math.random() * 999),
      //   title,
      // },
    ];
    console.log("Need to add book with:", title);
    setBooks(updatedBooks);
  };

  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) =>{
        return book.id !== id;
    })
    setBooks(updatedBooks)
  }

  const editBookById = async(id, newTitle) => {
    console.log("id and title", id, newTitle)
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })
   
   console.log(response, "this is the REsponse------->>>>>>>>>>>>>>>>")
      const updatedBooks = books.map((book) => {
        if(book.id === id ) {
          return {...book, ...response.data}
        }
        return book
      })
      setBooks(updatedBooks)
  }

  const valueToShare = {
    books,
    editBookById,
    handleDelete,
    createBook,
    fetchBooks

  }
  return (
    <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
  )
  }
export { Provider };
export default BooksContext;

//Provider component(function) that we make.
//Tells the provider what data to share through our context object.

//we make the custom provider top, thats probably gonna have state thats gonna change over time and its going to use in our built in context provider
//to share a value(could be anything,{}, [],string, number etc. and may be some func.)
