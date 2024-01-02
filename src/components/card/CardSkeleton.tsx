import "../../styles/cardskeleton.scss";

export default function CardSkeleton() {
  return (
    <div className="cardskeleton__container">
      <div className="cardskeleton__container-informations">
        <div className="cardskeleton__container-informations-profile">
          <img />
          <h3></h3>
        </div>
        <span className="cardskeleton__container-informations-address">
          <p></p>
          <p></p>
        </span>
      </div>
    </div>
  );
}
