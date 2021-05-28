import "./Navbar.css";

export default function Navbar(){
  return (
    <div className="Navbar">
      <h2>Netflix</h2>
      
      <p>Menu</p>
      <div className="container">
        <li>Browse</li>
        <li>Watchlist</li>
        <li>Coming Soon</li>
      </div>
      
      <p>Social</p>
      <div className="container">
        <li>Friends</li>
        <li>Parties</li>
      </div>

      <p>General</p>
      <div className="container">
        <li>Settings</li>
        <li>Log out</li>
      </div>
      
      <div className="Navcard">
        <p>Popcorn Addict</p>
        <p>4/6h viewing time</p>
        <div className="Navcard_Btn">
          View challenges
        </div>
      </div>
    </div>
  );
}