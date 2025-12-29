// components/Home.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const [inputUrl, setInputUrl] = useState("");
  const [allUrls, setAllUrls] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await fetch(`${backend_url}/api/urls`, {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage("Session expired. Redirecting...");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        const urls = Array.isArray(data) ? data : data.urls || [];
        setAllUrls(urls);
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend_url}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ url: inputUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setInputUrl("");
        fetchUrls();
        setTimeout(() => {
          navigate(`/shorturl?id=${data.id}`);
        }, 800);
      } else {
        setMessage(data.error);
      }
    } catch {
      setMessage("Server error");
    }
  };

  const handleLogout = async () => {
    await fetch(`${backend_url}/api/logout`, {
      method: "POST",
      credentials: "include",
    });
    navigate("/login");
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">URL<span>Short</span></div>
        <nav>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Shorten URLs. Share Smarter.</h1>
        <p>Fast, secure and reliable URL shortener</p>

        <form className="shortener-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            required
          />
          <button type="submit">Shorten</button>
        </form>

        {message && <p className="msg">{message}</p>}
      </section>

     <section className="table-section">
  <h2 className="table-title">Your URLs</h2>

  <div className="table-card">
    <table className="url-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Short URL</th>
          <th>Original URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {allUrls.length > 0 ? (
          allUrls.map((item, index) => (
            <tr key={item._id || index}>
              <td>{index + 1}</td>

              <td>
                <a
                  href={`${backend_url}/r/${item.shortUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="short-url"
                >
                  {item.shortUrl}
                </a>
              </td>

              <td className="original-url">
                <a
                  href={item.redirectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.redirectUrl}
                </a>
              </td>

              <td>
                <span className="click-badge">{item.clicks}</span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="empty-row">
              No URLs created yet 🚀
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        © 2025 URLShort | Built with MERN
      </footer>
    </>
  );
}

export default Home;
