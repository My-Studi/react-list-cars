/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

const carsData = [
  {
    id: 21,
    brand: "Toyota",
    name: "Fortuner",
    year: 2022,
    image:
      "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Ffitur-keselamatan-toyota-fortuner.png&w=3840&q=75",
    condition: "Bekas",
    description:
      "Toyota Fortuner dilengkapi dengan dua airbag yang ada di bagian depan untuk melindungi pengemudi dan satu penumpang di sebelahnya. Selain fitur keselamatan yang lengkap, Fortuner dikembangkan sebagai mobil SUV (Sport Utility Vehicle) yang tangguh dan dapat diandalkan untuk melintasi berbagai permukaan jalanan.",
  },
  {
    id: 22,
    brand: "Toyota",
    name: "Avanza",
    year: 2023,
    image:
      "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Ffitur-keselamatan-toyota-fortuner.png&w=3840&q=75",
    condition: "Baru",
    description:
      "Toyota Fortuner dilengkapi dengan dua airbag yang ada di bagian depan untuk melindungi pengemudi dan satu penumpang di sebelahnya. Selain fitur keselamatan yang lengkap, Fortuner dikembangkan sebagai mobil SUV (Sport Utility Vehicle) yang tangguh dan dapat diandalkan untuk melintasi berbagai permukaan jalanan.",
  },
];

export default function App() {
  const [cars, setCars] = useState(carsData);
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  function handleSelectedCar(id) {
    const newCar = cars.filter((car) => car.id === id);
    setSelectedCar(newCar[0]);
  }

  return (
    <>
      <NavBar />
      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list list-car">
              {cars?.map((car) => (
                <li key={car.id} onClick={() => handleSelectedCar(car.id)}>
                  <img src={car.image} alt={`${car.name} cover`} />
                  <h3>
                    {car.brand} {car.name}
                  </h3>
                  <div>
                    <p>
                      <span>{car.year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <div className="details">
              <header>
                <img
                  src={selectedCar.image}
                  alt={`${selectedCar.name} cover`}
                />
                <div className="details-overview">
                  <h2>
                    {selectedCar.brand} {selectedCar.name}
                  </h2>
                  <p>
                    {selectedCar.year} &bull; {selectedCar.condition}
                  </p>
                </div>
              </header>
              <section>
                <p>
                  <em>{selectedCar.description}</em>
                </p>
              </section>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>List Cars</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search car..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="search-results">
        Found <strong>4</strong> results
      </p>
    </div>
  );
}
