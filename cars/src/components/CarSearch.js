import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
    const dispatch = useDispatch();    

    const searchTerm = useSelector((state) =>{
        console.log(state.carList.searchTerm, "SEARCHTERM>>>>>>>>>>>>>>>")
        return state.carList.searchTerm
    })

    const handleSearchTermChange = (event) =>{
        console.log(event.target.value, "EVENTTTTTTTTTTTTTT>>>>>>>>>>>>")
            dispatch(changeSearchTerm(event.target.value))
    }
  return (
    <div className='list-header'>
        <h3 className='title is-3'>My Cars</h3>
        <div className='search field is-horizontal'>
            <lable className="label">Search</lable>
            <input className='input' 
            value={searchTerm}
            onChange={handleSearchTermChange}></input>
        </div>
      CarSearch
    </div>
  )
}

export default CarSearch
