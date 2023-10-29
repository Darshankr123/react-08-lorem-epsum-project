import { useState } from "react";
import text from "./data.js";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(5);
  const [paragraphs, setParagraphs] = useState(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(count);
    const amount = parseInt(count);
    setParagraphs(text.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h4>lorem epsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">paragraphs</label>
        <input
          type="number"
          min="1"
          max="9"
          placeholder="5"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((item) => {
          return (
            <p key={nanoid()} className="text">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
};
export default App;
