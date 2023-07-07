import {useDispatch, useSelector} from  'react-redux';
import { addCar, changeCarName, changeCost } from '../store';

const CarForm = () => {

  const dispatch = useDispatch();

  const {name, cost} = useSelector((state) =>{
      return{
        name: state.carForm.name,
        cost: state.carForm.cost
      }
  })

  const handleNameChange = (event) => {
    dispatch(changeCarName(event.target.value))
  }

  const handleCostChange = (event) =>{
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost))
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addCar({name: name, cost:cost}))
  }


  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input className='input is-expanded' value={name} onChange={handleNameChange}></input>
          </div>

          <div className='field'>
            <label className='label'>Cost</label>
            <input className='input is-expanded'
             value={cost || ''} 
             onChange={handleCostChange}
             type='number'></input>
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default CarForm
