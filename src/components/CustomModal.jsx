import Modal from 'react-modal';

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
        <button onClick={() => onClose()}>X</button>
        <div>
          <img src={car.img} alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
