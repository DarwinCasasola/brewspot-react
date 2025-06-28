import { useEffect, useState } from "react";
import { useFavorites } from "../context/useFavorites";

function Shops() {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { favorites, addFavorite } = useFavorites();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/darwincasasola/brewspot-data/main/shops.json")
      .then((res) => res.json())
      .then((data) => setShops(data))
      .catch((err) => console.error("Failed to fetch shop data", err));
  }, []);

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="mb-4">Explore Coffee Shops</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name or neighborhood..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row g-4">
        {filteredShops.map((shop) => {
          const isFavorited = favorites.includes(shop.id);
          return (
            <div className="col-md-4" key={shop.id}>
              <div className="card h-100">
                <img src={shop.image} alt={shop.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{shop.name}</h5>
                  <p className="card-text">Neighborhood: {shop.neighborhood}</p>
                  <p className="card-text">Rating: {shop.rating} ⭐</p>
                  <p className="card-text">Hours: {shop.hours}</p>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => addFavorite(shop.id)}
                  >
                    {isFavorited ? "💚 Favorited" : "❤️ Favorite"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shops;
