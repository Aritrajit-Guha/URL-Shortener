import { useSearchParams } from "react-router-dom";
import "../App.css"; // reuse existing CSS

function ShortUrl() {
  const [searchParams] = useSearchParams();
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const shortId = searchParams.get("id");

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Your Short Link is Ready!</h2>

        {shortId ? (
          <div id="short-url" className="short-url-box">
            <p>Click below to copy or visit:</p>
            <a
              href={`${backend_url}/r/${shortId}`}
              target="_blank"
              rel="noreferrer"
              className="short-link"
            >
              {`${backend_url}/r/${shortId}`}
            </a>
          </div>
        ) : (
          <p className="message">No ID found in URL.</p>
        )}
      </div>
    </div>
  );
}

export default ShortUrl;
