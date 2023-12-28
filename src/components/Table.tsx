interface ITable {
  filteredData: IAppData[];
}

export default function Table({ filteredData }: ITable) {
  return (
    <div>
      {filteredData && (
        <table
          border={1}
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "500px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of birth</th>
              <th>Address</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Cell</th>
              <th>Registered</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((result, index) => (
              <tr key={index}>
                <th>
                  {result?.name.first} {result?.name.last}
                </th>
                <th>{result.dob.date}</th>
                <th>
                  {result.location.street}, {result.location.city},
                  {result.location.state}
                </th>
                <th>{result.email}</th>
                <th>{result.gender}</th>
                <th>{result.cell}</th>
                <th>{result.registered.date}</th>
                <th>
                  <img
                    src={result.picture.medium}
                    alt={result?.name.first + "picture"}
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
