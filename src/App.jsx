import { useState } from "react";

function App() {
  const [news, setNews] = useState([
    {
      title: "Welcome to Naveen Soch News",
      category: "Top",
      image: "https://picsum.photos/500/300",
      desc: "Breaking News Coming Soon..."
    }
  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const addNews = () => {
    if (!title || !category) return;

    setNews([
      {
        title,
        category,
        image: image || "https://picsum.photos/500/300",
        desc,
      },
      ...news,
    ]);

    setTitle("");
    setCategory("");
    setImage("");
    setDesc("");
  };

  return (
    <div className="container mt-4">

      <h1 className="text-center text-primary">
        Naveen Soch News Admin
      </h1>

      <div className="card p-3 mb-4">
        <input
          className="form-control mb-2"
          placeholder="News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={addNews}
        >
          Publish News
        </button>
      </div>

      <div className="row">
        {news.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={item.image} className="card-img-top" />
              <div className="card-body">
                <span className="badge bg-danger">
                  {item.category}
                </span>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
