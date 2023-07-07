import BooksContext from '../contexts/books';
import { useContext } from 'react';

function useBooksContext(){
    return useContext(BooksContext)
}

export default useBooksContext