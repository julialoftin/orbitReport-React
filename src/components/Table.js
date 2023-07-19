import './styling.css'

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Type of Satellite</td>
          <td>Launch Date</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;