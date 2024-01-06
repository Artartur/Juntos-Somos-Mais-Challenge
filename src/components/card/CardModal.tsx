import "../../styles/cardmodal.scss";

interface ICardModal {
  closeModal: VoidReturn;
  selectedCardData: ICardData;
}

export default function CardModal({
  closeModal,
  selectedCardData,
}: ICardModal) {

  const formatAddress = (address: string) => {
    const [street, number] = address.split(/\s+(.+)/);
    return number ? `${number}, ${street}`.replace(/\s*,\s*/, ", ") : street;
  };

  const formatDate = (date: string) => {
    const newDate = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    return newDate.toLocaleDateString("en-US", options);
  };

  return (
    <div className="cardModal__container">
      <div className="cardModal__container-content">
        <h1>More Infos</h1>
        <div className="cardModal__container-content-details">
          <div className="cardModal__container-content-details0-profile">
            <span className="cardModal__container-content-details-profile-name">
              <p>Basic Datas</p>
              <p>
                {selectedCardData.name.title}. {selectedCardData.name.first}{" "}
                {selectedCardData.name.last}
              </p>
              <p>
                {formatDate(selectedCardData.dob.date)} -{" "}
                {selectedCardData.dob.age} years old
              </p>
              <p>{selectedCardData.gender}</p>
            </span>
            <span className="cardModal__container-content-details-profile-contact">
              <p>Contact</p>
              <p>{selectedCardData.cell}</p>
              <p>{selectedCardData.email}</p>
            </span>
          </div>
          <div className="cardModal__container-content-details-register">
            <span className="cardModal__container-content-details-register-address">
              <p>Address</p>
              <p>Postcode: {selectedCardData.location.postcode}</p>
              <p>{formatAddress(selectedCardData.location.street)}</p>
              <p>{selectedCardData.location.city}</p>
              <p>{selectedCardData.location.state}</p>
            </span>
            <span className="cardModal__container-content-details-register-date">
              <p>Registered</p>
              <p>{formatDate(selectedCardData.registered.date)}</p>
            </span>
          </div>
        </div>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
}
