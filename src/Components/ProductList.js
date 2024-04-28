import React, { useState } from "react";

import SwipeableViews from "react-swipeable-views";
const data = [
  {
    make: "Baby Nest Lounger Bed Portable Ergonomic Baby Bed",
    type: "Bed",
    price: "$59.99",
    image: "https://orbisify.com/wp-content/uploads/2021/03/Pictal-600x600.jpg",
  },
  {
    make: "Nutribullet Baby - Baby and Toddler Food Prep System, Nutribullet Baby Food Prep",
    type: "Electric",
    price: "$74.97",
    image:
      "https://i5.walmartimages.ca/images/Enlarge/306/751/6000202306751.jpg",
  },
  {
    make: "Baby Swaddle Blanket Boys Girls Cute Cotton Plush Receiving Blanket Newborn Sleeping Wraps for 0-6 Months",
    type: "Dress",
    price: "$25.99",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLP2YhWeBGzHURVpBG04EOA6N3NElDpDR228Q1oNrzmyHhZG6R21IimfZ8_HH3JpGXTrftFfmWAkhxlcJ9tn5niatYqfS0VnZHM2WT8Iy4vjEKCFyNSvfS&usqp=CAE",
  },
  {
    make: "Zelia Max 5In1 Modular Travel System",
    type: "Strollers & Wagons",
    price: "$899.99",
    image:
      "https://dynamic.indigoimages.ca/v1/gifts/products/884392015688/1.jpg",
  },
  {
    make: "One4Life ClickTight All-in-One Car Seat",
    type: "Car Seats",
    price: "$679.99",
    image:
      "https://dynamic.indigoimages.ca/v1/gifts/products/0652182744120/1.jpg",
  },
  {
    make: "DinoPal Baby Gift Basket",
    type: "Gift",
    price: "$148.00",
    image:
      "https://glittergiftbaskets.ca/cdn/shop/files/2109.jpg?v=1697065929&width=1200",
  },
  {
    make: "3 in 1 Multifunction Womens Maternity Kangaroo Hooded",
    type: "Hoodies",
    price: "$41.99",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcZoyHoMDdCjtFWgi2Vl7fySvX9En4WoJCJqKlErAjF_r_HWksmLcZEJaK_cZFbLH_08ZO2jlNO6354UJCfz0NVD6PE5cZuo9iOVL4Nks&usqp=CAE",
  },
];

function ProductList() {
  const [products, setProducts] = useState(data);
  const [filters, setFilters] = useState({ make: "", model: "", type: "" });
  const [cart, setCart] = useState({});

  const handleAddToCart = (product) => {
    setCart({
      ...cart,
      [product.make]: (cart[product.make] || 0) + 1,
    });
  };

  const handleRemoveFromCart = (product) => {
    if (cart[product.make] > 0) {
      setCart({
        ...cart,
        [product.make]: cart[product.make] - 1,
      });
    }
  };
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = products.filter((product) => {
    for (const key in filters) {
      if (filters[key] !== "" && product[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.search.value.toLowerCase();
    const filteredProducts = data.filter((product) => {
      const make = product.make.toLowerCase();
      const model = product.model.toLowerCase();
      const type = product.type.toLowerCase();
      return (
        make.includes(query) || model.includes(query) || type.includes(query)
      );
    });
    setProducts(filteredProducts);
  };

  return (
    <div
      className="product-container"
      style={{ textAlign: "-webkit-center", padding: "10px" }}
    >
      <div id="search" style={{ width: "80%" }}>
        <input
          className="form-control"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="btn btn-block btn-primary">
          Search
        </button>
      </div>
      <div id="products" style={{ overflowY: "scroll" }}>
        <style>
          {`
            #products::-webkit-scrollbar {
              width: 0.5em;
            }
            #products::-webkit-scrollbar-thumb {
              background-color: #888;
            }
            #products::-webkit-scrollbar-track {
              background: transparent;
            }
          `}
        </style>
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="col-sm-4 product"
            data-make={product.make}
            data-model={product.model}
            data-type={product.type}
            data-price={product.price}
          >
            <div
              className="product-inner text-center"
              style={{ fontSize: "12px" }}
            >
              <img src={product.image} alt={product.make} />
              <br />
              {product.make}
              <br />
              <br />
              Type: {product.type}
              <br />
              Price: {product.price}
              <br />
              <br />
              <div>
                <button
                  className="store-buttons"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  -
                </button>
                &nbsp;&nbsp;&nbsp;{cart[product.make] || 0}&nbsp;&nbsp;&nbsp;
                <button
                  className="store-buttons"
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
                <br></br>
                <br></br>
                <button
                  className="store-buttons"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
