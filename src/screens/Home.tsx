import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import "../styles/home.scss";
interface IApp {
  results: ICardData[];
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<IApp>();
  const [search, setSearch] = useState("");
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const itemsPerPage = 9;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSelectStateChange = (selectedState: string[]) => {
    setSelectedStates(selectedState);
  };

  const handleSortChange = (order: "asc" | "desc" | null) => {
    setSortOrder(order);
  };

  const filteredData: ICardData[] =
    data?.results
      .filter((result) =>
        `${result.name.first} ${result.name.last}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(
        (result) =>
          selectedStates.length === 0 ||
          selectedStates.includes(result.location.state)
      ) || [];

  const sortedData = [...filteredData].sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`;
    const nameB = `${b.name.first} ${b.name.last}`;

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === "desc") {
      return nameB.localeCompare(nameA);
    }

    return 0;
  });

  const startItem = Math.min(currentPage * itemsPerPage, sortedData.length);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const paginatedData = sortedData.slice(
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
    <div className="home__container">
      <div className="home__container-header">
        <Header onChange={(e) => setSearch(e.target.value)} value={search} />
      </div>
      <div className="home__container-body">
        <div className="home__container-body-title">
          <h1>Members list</h1>
        </div>
        <div className="home__container-body-content">
          <div className="home__container-body-content-sidebar">
            <Sidebar
              onSelectStateChange={handleSelectStateChange}
              selectedStates={selectedStates}
            />
          </div>
          <div className="home__container-body-content-cards">
            <CardHeader
              endItem={sortedData.length}
              onSortChange={handleSortChange}
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
        </div>
      </div>
      <div className="home__container-footer">
        <Footer />
      </div>
    </div>
  );
}
