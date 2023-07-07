import { useDispatch, useSelector } from "react-redux";
import {removeCar} from '../store'


const CarList = () => {
    const dispatch = useDispatch();

    const {name, cars }= useSelector(({carForm, carList: {carLists, searchTerm}}) => {
        const filteredCars =  carLists.filter((car) =>
         car.name.toLowerCase().includes(searchTerm.toLowerCase()))

         return ({
            name: carForm.name,
            cars: filteredCars
         })
    })


console.log(cars, "cars>>>>>>>>>>>>>")
    const handleCarDelete= (car) =>{

        console.log(car, "this is the car object")
        dispatch(removeCar(car.id))

    }
    const renderedCars = cars.map((car) =>{
        //DECIDE IF THIS CAR SHOULD BE BOLD. we need the name state
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>{car.name} - ${car.cost}</p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>delete</button>
            </div>
        )
    })

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList


