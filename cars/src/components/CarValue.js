import { useSelector } from "react-redux"

const CarValue = () => {
  // const totalCost = useSelector(({carList:{carLists, searchTerm}}) =>{
  //   const filteredCars = carLists.filter((car) => {
  //     return car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   });
  //   console.log(filteredCars,"filtered cars>>>>>>>>>")
  //   let cost =0;
  //   for (let car of filteredCars){
  //     cost = cost + car.cost
  //   }
  //   return cost;
    
  // })

  const totalCost = useSelector(({carList:{carLists, searchTerm}}) =>
     carLists.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
             .reduce((acc, car) => acc + car.cost, 0));
  
  return (
    <div className="car-value">
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue


//Derived state-> values that we can calculate using existing state.

//Redux store design
//. identify what state exists in the app.
//2. identify hoe that state changes over time.
//3. group together common pieces of state.
//4. create a slice for each group.