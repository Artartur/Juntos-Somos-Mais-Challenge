import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
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

  const startItem = Math.min(currentPage * itemsPerPage, filteredData.length);

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
        endItem={filteredData.length}
        onChange={() => {}}
        startItem={startItem}
      />

      <Card filteredData={paginatedData} />

      <Pagination
        currentPage={currentPage}
        onClickNext={() => handlePageChange(currentPage + 1)}
        onClickPage={(pageNumber) => handlePageChange(pageNumber)}
        onClickPrev={() => handlePageChange(currentPage - 1)}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
