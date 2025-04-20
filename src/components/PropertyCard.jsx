import React from "react";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p className="property-price">{property.price}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
