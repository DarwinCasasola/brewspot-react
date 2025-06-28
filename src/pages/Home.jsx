import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-3">Welcome to BrewSpot</h1>
      <p><h4>Discover the best local coffee Las Vegas has to offer.</h4></p>
      <img
        src="public/images/generatedcoffeevibes.jpg"
        alt="Featured Coffee"
        className="img-fluid rounded my-4"
        style={{ maxWidth: "600px" }}
      />
      <br />
      <Link to="/shops" className="btn btn-primary">Explore Coffee Shops</Link>
    </div>
  );
}

export default Home;
