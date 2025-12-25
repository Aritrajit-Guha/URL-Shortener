import { useSearchParams } from "react-router-dom";

function ShortUrl() {
  // 1. Get the parameters from the URL
  const [searchParams] = useSearchParams();
  const backend_url=import.meta.env.VITE_BACKEND_URL;
  
  
  const shortId = searchParams.get("id");

  return (
    <div>
      <h2>Your Short Link is Ready!</h2>

      {/* 3. Render conditionally: Only show if shortId exists */}
      {shortId ? (
        <div id="short-url">
          <p>Click below to copy or visit:</p>
          
          {/* 4. JSX replaces innerHTML */}
          <a 
            href={`${backend_url}/r/${shortId}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ fontSize: "20px", color: "blue" }}
          >
            ${backend_url}/r/{shortId}
          </a>
          
        </div>
      ) : (
        <p>No ID found in URL.</p>
      )}
    </div>
  );
}

export default ShortUrl;
