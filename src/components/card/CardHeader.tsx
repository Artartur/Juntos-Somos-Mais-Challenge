import "../../styles/cardHeader.scss";
interface ICardHeader {
  endItem: number;
  onSortChange: (order: "asc" | "desc" | null) => void;
  startItem: number;
}

export default function CardHeader({
  endItem,
  onSortChange,
  startItem,
}: ICardHeader) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value as "asc" | "desc" | null;
    onSortChange(order);
  };

  return (
    <div className="cardHeader__container">
      <p>
        Showing {startItem} of {endItem} items
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="filter">Order by: </label>
        <select name="filter" id="filter" onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  );
}
