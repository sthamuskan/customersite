import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  // Split path into parts  ("/products/view" → ["products","view"])
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>

      {pathnames.map((name, index) => {
        const route = "/" + pathnames.slice(0, index + 1).join("/");

        const label = name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <span key={route}>
            <span className="arrow">{">"}</span>
            {index === pathnames.length - 1 ? (
              <span className="current">{label}</span>
            ) : (
              <Link to={route}>{label}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
