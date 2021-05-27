import classes from "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h2>Netflix</h2>
      
      <ul>Menu
        <li>Browse</li>
        <li>Watchlist</li>
        <li>Coming Soon</li>
      </ul>
      
      <ul>Social
        <li>Friends</li>
        <li>Parties</li>
      </ul>

      <ul>General
        <li>Browse</li>
        <li>Watchlist</li>
        <li>Coming Soon</li>
      </ul>
      
      <div className={classes.NavCard}>
        <p>Popcorn Addict</p>
        <p>4/6h viewing time</p>
        <button>View challenges</button>
      </div>
    </div>
  );
}