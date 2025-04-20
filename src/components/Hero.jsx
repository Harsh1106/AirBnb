import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h1>Find your next stay</h1>
      <p>Search deals on hotels, homes, and much more...</p>
      <form className="search-form">
        <input type="text" placeholder="Where are you going?" />
        <input type="date" />
        <input type="date" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Hero;
