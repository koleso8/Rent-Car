import Modal from 'react-modal';
import { formatNumber } from '../helpers/formatNumber';
import { FiX } from 'react-icons/fi';

const CustomModal = ({ isOpen, onClose, car }) => {
  return (
    <div className="fixed">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose} // Закриття при натисканні Escape або на бекдроп
        shouldCloseOnOverlayClick={true} // Закриття при кліку на бекдроп
        className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4"
        ariaHideApp={false}
      >
        <div className="bg-white p-10 relative w-[540px] rounded-3xl max-h-screen">
          <button className="absolute top-4 right-4" onClick={() => onClose()}>
            <FiX size="24px" />
          </button>
          <img
            className="rounded-[14px] mb-[14px] w-full max-h-[248px] object-cover "
            src={car.img}
            alt=""
          />

          <div className="flex flex-col gap-6">
            <div className="box1">
              <span className="flex gap-1 font-medium mb-2">
                <h3>{car.make} </h3>
                <h3 className="text-[#3470FF]">{car.model}, </h3>{' '}
                <h3> {car.year}</h3>
              </span>
              <p className="font-normal text-xs text-[#182023] opacity-50 w-[290px] mb-[14px]">
                {car.address.split(', ')[1]} | {car.address.split(', ')[2]} |{' '}
                {`id: ${car.id}`} | {`Year: ${car.year} `} |{' '}
                {`Type: ${car.type}`} |{' '}
                {`Fuel Consumption: ${car.fuelConsumption}`} |{' '}
                {`Engine Size: ${car.engineSize}`}
              </p>
              <p className="text-[#121417] font-normal text-sm">
                {car.description}
              </p>
            </div>
            <div className=" flex flex-col gap-6 ">
              <div className="box2">
                <p className="text-[#121417] font-normal text-sm mb-2">
                  Accessories and functionalities:
                </p>
                <p className="font-normal text-xs text-[#182023] opacity-50 w-[260px]">
                  {car.accessories.join(' | ')}
                </p>
              </div>
              <div className="box3">
                <p className="text-[#121417] font-normal text-sm mb-2">
                  Rental Conditions:
                </p>
                <ul className="flex gap-2 flex-row font-normal text-xs flex-wrap w-10/12">
                  <li className="bg-[#f9f9f9] rounded-[35px] p-[7px] flex gap-[2px] h-8">
                    {car.rentalConditions.split('\n')[0].split(' ')[0]}{' '}
                    {car.rentalConditions.split('\n')[0].split(' ')[1]}
                    <p className=" text-[#3470ff] font-semibold">
                      {' '}
                      {car.rentalConditions.split('\n')[0].split(' ')[2]}
                    </p>
                  </li>
                  <li className="bg-[#f9f9f9] rounded-[35px] p-[7px] h-8">
                    {car.rentalConditions.split('\n')[1]}
                  </li>
                  <li className="bg-[#f9f9f9] rounded-[35px] p-[7px] h-8">
                    {car.rentalConditions.split('\n')[2]}
                  </li>
                  <li className="bg-[#f9f9f9] rounded-[35px] p-[7px] h-8">
                    Mileage:{' '}
                    <span className=" text-[#3470ff] font-semibold">
                      {formatNumber(car.mileage)}
                    </span>
                  </li>
                  <li className="bg-[#f9f9f9] rounded-[35px] p-[7px] h-8">
                    Price:{' '}
                    <span className=" text-[#3470ff] font-semibold">
                      {car.rentalPrice.slice(1)}$
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <a
              className=" block w-[168px] p-3 bg-[#3470ff] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#0b44cd] ease-linear duration-200"
              href="tel:+380730000000"
            >
              Rental car
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
