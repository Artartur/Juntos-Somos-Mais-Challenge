import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";

interface IApp {
  results: IAppData[];
}

function App() {
  const [data, setData] = useState<IApp>();
  const [search, setSearch] = useState("");

  const filteredData: IAppData[] =
    data?.results.filter((result) =>
      `${result.name.first} ${result.name.last}`
        .toLowerCase()
        .includes(search.toLowerCase())
    ) || [];

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
    <div>
      <Header onChange={(e) => setSearch(e.target.value)} value={search} />

      <Table filteredData={filteredData} />
    </div>
  );
}

export default App;
