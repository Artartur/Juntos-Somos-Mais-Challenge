import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import CardModal from "./CardModal";
import "../../styles/card.scss";

export default function Card({ filteredData }: IFilteredData) {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
  const [skeleton, setSkeleton] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  const formatAddress = (fullAddress: string) => {
    const [street, number] = fullAddress.split(/\s+(.+)/);
    return number ? `${number}, ${street}`.replace(/\s*,\s*/, ", ") : street;
  };

  const openModal = (index: number) => {
    setShowModal(true);
    setSelectedCardIndex(index);
  };

  const renderSkeletons = () => {
    const components = [];
    for (let i = 0; i < 9; i++) {
      components.push(<CardSkeleton key={i} />);
    }
    return components;
  };

  useEffect(() => {
    if (skeleton) {
      setTimeout(() => {
        setSkeleton(false);
      }, 3000);
    }
  }, []);

  return (
    <div className="card__container">
      {skeleton ? (
        <div className="card__container-skeleton">{renderSkeletons()}</div>
      ) : (
        <div>
          {filteredData && (
            <div className="card__container-content">
              {filteredData?.map((result, index) => (
                <div
                  className={`card__container-content-data ${
                    selectedCardIndex === index ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => openModal(index)}
                >
                  <div className="card__container-content-data-informations">
                    <div className="card__container-content-data-informations-profile">
                      <img
                        src={result.picture.medium}
                        alt={result?.name.first + "picture"}
                      />
                      <h3>
                        {result?.name.first} {result?.name.last}
                      </h3>
                    </div>
                    <span className="card__container-content-data-informations-address">
                      <span className="card__container-content-data-informations-address-street">
                        <p>{formatAddress(result?.location.street)}</p>
                      </span>
                      <span className="card__container-content-data-informations-address-details">
                        <p>{result?.location.city}</p>
                        <span>
                          <p>{result?.location.state} - </p>
                          <p>CEP: {result?.location.postcode}</p>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
              {showModal && selectedCardIndex !== null && (
                <CardModal
                  closeModal={closeModal}
                  selectedCardData={filteredData[selectedCardIndex]}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
