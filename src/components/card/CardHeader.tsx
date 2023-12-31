import "../../styles/cardHeader.scss";

interface ICardHeader {
  endItem: number;
  onChange: EventSelect;
  startItem: number;
}

export default function CardHeader({
  endItem,
  onChange,
  startItem,
}: ICardHeader) {
  return (
    <div className="cardHeader__container">
      <p>
        Showing {startItem} of {endItem} items
      </p>
      <div>
        <label htmlFor="filter">Order by: </label>
        <select id="filter" name="filter" onChange={onChange}>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
}
