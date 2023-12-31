import "../../styles/card.scss";

export default function Card({ filteredData }: IFilteredData) {
  const formatAddress = (fullAddress: string) => {
    const [street, number] = fullAddress.split(/\s+(.+)/);
    return number ? `${number}, ${street}`.replace(/\s*,\s*/, ", ") : street;
  };

  return (
      <div className="card__container">
        {filteredData && (
          <div className="card__container-content">
            {filteredData?.map((result, index) => (
              <div className="card__container-content-data" key={index}>
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
          </div>
        )}
    </div>
  );
}
