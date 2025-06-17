import { useState } from "react";
import Papa from "papaparse";

function parseCSV(text) {
  const parsed = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data;
}

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZJ6FSAFTBSM-XiLRNgtuIJ6vBJKPqMotM7r3JZo8OYctPfaI1kwZ-5FdQZoZOkpH1O7TZQgkq9uqa/pub?output=csv";

function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(SHEET_URL);
      const text = await res.text();
      const parsed = parseCSV(text);
      setData(parsed);
      const keyword = search.toLowerCase();
      const results = parsed.filter(
        (entry) =>
          (entry.Congregation || "").toLowerCase().includes(keyword) ||
          (entry.City || "").toLowerCase().includes(keyword) ||
          (entry.Service_Types || "").toLowerCase().includes(keyword) ||
          (entry.Current_Service || "").toLowerCase().includes(keyword) ||
          (entry.Address || "").toLowerCase().includes(keyword)
      );
      setFiltered(results);
    } catch (err) {
      console.error("Error loading CSV:", err);
      setFiltered([]);
    }
    setLoading(false);
  };

  return (
    <main
      style={{
        margin: 0,
        background: "#fff",
        fontFamily: "'Oswald', Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#000",
          fontWeight: 700,
          fontSize: "2rem",
          margin: "10px",
        }}
      >
        FIND HELP NOW: RESOURCES FROM EDSD CHURCHES
      </h1>
      <div
        className="filter"
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevents the page from reloading
            handleSearch(); // Calls your existing search logic
          }}
          style={{
            marginBottom: "1rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
          }}
        >
          <input
            type="text"
            placeholder="Search for food, showers, city, etc."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "0.5rem", fontSize: "1rem", flex: 1 }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              background: "#A62D2D",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            SEARCH
          </button>
        </form>
      </div>
      {loading && <div>Loading...</div>}
      {searched && !loading && filtered.length === 0 && (
        <div>No results found. Try different keywords.</div>
      )}
      {filtered.length > 0 && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
            marginTop: "1rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#003366",
                  color: "#fff",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                }}
              >
                Congregation
              </th>
              <th
                style={{
                  backgroundColor: "#003366",
                  color: "#fff",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                }}
              >
                City
              </th>
              <th
                style={{
                  backgroundColor: "#003366",
                  color: "#fff",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                }}
              >
                Service Types
              </th>
              <th
                style={{
                  backgroundColor: "#003366",
                  color: "#fff",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                }}
              >
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry, idx) => (
              <tr key={idx}>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>
                  {entry.Congregation}
                </td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>
                  {entry.City}
                </td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>
                  {entry.Service_Types}
                </td>
                <td
                  style={{
                    padding: "0.75rem",
                    fontSize: "0.92rem",
                    border: "1px solid #ccc",
                  }}
                >
                  {entry.Current_Service}
                </td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>
                  {entry.Address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Main;
