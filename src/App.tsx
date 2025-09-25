import './App.css'
import Car from "./components/Car.tsx"
// @ts-ignore
import cars from "./data/carsData.js"


function App() {

    const allCars = cars.map(car => (
        <Car
            id ={car.id}
            name={car.name}
            image={car.image}
            info={car.info}
            alt={car.alt}
            bgColor={car.bgColor}
            txtColor = {car.txtColor}
        />
    ))

  return (
      <div className="flex items-center justify-center h-screen rounded-2xl bg-gray-100">
          <div className="flex flex-row overflow-hidden mx-auto items-center justify-center rounded-2xl bg-white h-3/5 w-3/4">
              {allCars}
          </div>
      </div>

  )
}

export default App
