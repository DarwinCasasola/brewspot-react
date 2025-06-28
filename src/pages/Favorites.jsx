import { useEffect, useState } from "react";
import { useFavorites } from "../context/useFavorites";

function Favorites() {
  const [shops, setShops] = useState([]);
  const { favorites, removeFavorite } = useFavorites();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/darwincasasola/brewspot-data/main/shops.json")
      .then((res) => res.json())
      .then((data) => setShops(data))
      .catch((err) => console.error("Failed to fetch coffee shop data", err));
  }, []);

  const favoriteShops = shops.filter((shop) => favorites.includes(shop.id));

  return (
    <div>
      <h1 className="mb-4">Your Favorite Coffee Shops</h1>

      {favoriteShops.length === 0 ? (
        <p className="text-muted">You haven’t favorited any coffee shops yet.</p>
      ) : (
        <div className="row g-4">
          {favoriteShops.map((shop) => (
            <div className="col-md-4" key={shop.id}>
              <div className="card h-100">
                <img src={shop.image} alt={shop.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{shop.name}</h5>
                  <p className="card-text">Neighborhood: {shop.neighborhood}</p>
                  <p className="card-text">Rating: {shop.rating} ⭐</p>
                  <p className="card-text">Hours: {shop.hours}</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFavorite(shop.id)}
                  >
                    🗑 Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
