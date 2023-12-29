import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/card/Card";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import CardHeader from "../components/card/CardHeader";
interface IApp {
  results: ICardData[];
}

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<IApp>();
  const [search, setSearch] = useState("");
  const itemsPerPage = 9;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const filteredData: ICardData[] =
    data?.results.filter((result) =>
      `${result.name.first} ${result.name.last}`
        .toLowerCase()
        .includes(search.toLowerCase())
    ) || [];

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getData = () => {
    axios
      .get("http://localhost:5174/api/data")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header onChange={(e) => setSearch(e.target.value)} value={search} />

      <CardHeader
        endItem={data?.results.length as number}
        onChange={() => {}}
        startItem={9}
      />

      <Card filteredData={paginatedData} />
      <div style={{ margin: 10, display: "flex", justifyContent: "center" }}>
        <FaCircleChevronLeft
          disabled={currentPage === 1}
          color={currentPage === 1 ? "#E5E5E5" : "4A4A4A"}
          onClick={() => handlePageChange(currentPage - 1)}
          size={20}
        />
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <FaCircleChevronRight
          disabled={currentPage === totalPages}
          color="#4A4A4A"
          onClick={() => handlePageChange(currentPage + 1)}
          size={20}
        />
      </div>
    </div>
  );
}

export default App;
