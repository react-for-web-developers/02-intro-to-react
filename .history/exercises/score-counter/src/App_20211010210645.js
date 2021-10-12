import "./App.css";

function App() {
  const count1 = 0;
  const count2 = 0;

  return (
    <div>
      <table>
        <tr>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
        <tr>
          <td>{count1}</td>
          <td>{count2}</td>
        </tr>
        <tr>
          <td>{count1}</td>
          <td>{count2}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
