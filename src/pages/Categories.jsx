import React from "react";

const CATEGORIES = [
  { name: "Test title One", slug: "test-title-one", index: 1 },
  { name: "Test title Two", slug: "test-title-two", index: 2 },
  { name: "Test title Three", slug: "test-title-three", index: 3 },
];

const Categories = () => (
  <>
    <h1 className="display-1">All Categories Are Here</h1>
    <ul className="categories-list">
      {CATEGORIES.map(({ name, slug, index }) => (
        <li className="card my-4">
          <div className="card">
            <div className="card-header">Category №{index}</div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <a href={`/categories/${slug}`} className="btn btn-primary">
                Go to the {name}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export default Categories;
