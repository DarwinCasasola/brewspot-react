import { Link } from "react-router-dom";
import coffeeimg from "../assets/generatedcoffeevibes.jpg";

function Home() {
  return (
    <div className="container text-center">
      <h1 className="mb-3">Welcome to BrewSpot</h1>
      <p><h4>Discover the best local coffee Las Vegas has to offer.</h4></p>
      <img
        src={coffeeimg}
        alt="BrewSpot Coffee Vibes"
        className="img-fluid rounded mx-auto d-block"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <br />
      <Link to="/shops" className="btn btn-primary">Explore Coffee Shops</Link>
    </div>
  );
}

export default Home;
