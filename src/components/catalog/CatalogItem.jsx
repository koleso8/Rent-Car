const CatalogItem = ({ car }) => {
  console.log(car);
  console.log(
    car.functionalities[Math.floor(Math.random() * car.functionalities.length)]
  );
  console.log(Math.floor(Math.random() * car.functionalities.length));

  return (
    <li className="w-[274px]">
      <img
        className="mb-[14px] w-full h-[268px] object-cover rounded-[14px]"
        src={car.img}
        alt={car.model}
      />
      <span className="flex justify-between mb-2">
        <span className="flex gap-1 font-medium">
          <h3>{car.make} </h3>
          <h3 className="text-[#3470FF]">{car.model}, </h3> <h3> {car.year}</h3>
        </span>
        <h3 className="font-medium">{car.rentalPrice}</h3>
      </span>
      <div className="mb-7">
        {/*
"567 Example Street, Lviv, Ukraine" */}
        <p className="font-normal text-xs text-[#182023] opacity-50">
          {car.address.split(', ')[1]} | {car.address.split(', ')[2]} |{' '}
          {car.rentalCompany} | {car.type} | {car.model} | {car.mileage} |{' '}
          {
            car.functionalities[
              Math.floor(Math.random() * car.functionalities.length)
            ]
          }
        </p>
      </div>
      <button className="w-full bg-[#3470ff] p-3" type="button">
        Learn more
      </button>
    </li>
  );
};

export default CatalogItem;
