import "./Navbar.css";

export default function Navbar(){
  return (
    <div className="Navbar">
      <h3>Netflix</h3>
      
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
        <div className="Navcard_icon"></div>
        <p>Popcorn Addict</p>
        <p>4/6h viewing time</p>
        <div className="Navcard_Btn">
          View challenges
        </div>
      </div>
    </div>
  );
}