import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container text-center">
      <div className="row">
        <h1>StockSphere Products</h1>
        <h5 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h5>
        <h6 className="mt-3 text-muted">
          Check out our{" "}
          <Link style={{ textDecoration: "none" }}>
            InvestMent Offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default Hero;
