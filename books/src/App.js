import { useEffect } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

// const Demo = memo(() => {
//   console.log("in dmeo");
//   return <p>DemoR</p>;
// });

const App = () => {
  const { fetchBooks } = useBooksContext();
  useEffect(() => {
    fetchBooks()});

  return (
    <div className="app">
      {/* <Demo /> */}
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;

//DO NOT DIRECTLY MUTATE/CHANGE/MODIFY ARRAY OR OBJECT WHEN THEY ARE USED AS STATE

//REST CLient extensiom allows us to make request off to some server or either or hosted somewhere online. to make use of it
//we gonna to make a file api.http

//Tricky things around useEffect
//1. understanding when our arrow function gets called
//2. understanding the arrow functin return value
//3. understanding state variable references

//NOTE:- second argument is gonna control exactly when the arrow gets called

/////////////////////////////////////////////////////////////////
///////Context
//tricky things around useEffect(1)understanding when our arrow func. gets called. 2)understanding the arrow func's return value. 3)understanding stale var references)
//Using context
//1. create the context(in different file)
//2. Specify the data that will be shared(and wrap the main(any) component inside this context).it could be nested component
//3. "Consume" the data in the component(any component)
