import React from "react";

export default function Shop() {
  return (
    <div className="p-5 grid grid-cols-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://m.media-amazon.com/images/I/71LnycrT7qL._SY879_.jpg"
            alt="Shirt"
            className="rounded-xl"
            width={150}
            height={150}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Men's Regular Fit Casual Shirt</h2>
          <h1 className="card-title">₹389</h1>
          <p>FREE delivery Sat, 27 Sept</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Buy Now</button>
            <button className="btn btn-accent">Add to Cart</button>
            <button className="btn btn-info">Rent</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://m.media-amazon.com/images/I/71IXThTV2QL._SY741_.jpg"
            alt="Shirt"
            className="rounded-xl"
            width={150}
            height={150}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">GRECIILOOKS Men's Polycotton Regular Fit</h2>
          <h1 className="card-title">₹389</h1>
          <p>FREE delivery Sat, 27 Sept</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Buy Now</button>
            <button className="btn btn-accent">Add to Cart</button>
            <button className="btn btn-info">Rent</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://m.media-amazon.com/images/I/712geJMzzoL._SY741_.jpg"
            alt="Shirt"
            className="rounded-xl"
            width={150}
            height={150}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Men's Regular Fit Casual Shirt</h2>
          <h1 className="card-title">₹389</h1>
          <p>FREE delivery Sat, 27 Sept</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Buy Now</button>
            <button className="btn btn-accent">Add to Cart</button>
            <button className="btn btn-info">Rent</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://m.media-amazon.com/images/I/610TL9J0X2L._SY741_.jpg"
            alt="Shirt"
            className="rounded-xl"
            width={150}
            height={150}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Men's Regular Fit Casual Shirt</h2>
          <h1 className="card-title">₹389</h1>
          <p>FREE delivery Sat, 27 Sept</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Buy Now</button>
            <button className="btn btn-accent">Add to Cart</button>
            <button className="btn btn-info">Rent</button>
          </div>
        </div>
      </div>
    </div>
  );
}
