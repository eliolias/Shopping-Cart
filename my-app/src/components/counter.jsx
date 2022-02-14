import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  getBadgeClasses();
  const tags = {
    taglist: ["tag1", "tag2", "tag3"],
  };

  const renderTags = () => {
    if (tags.taglist.length === 0) return <p> There are no tags!</p>;

    return (
      <ul>
        {tags.taglist.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <button
        className={"btn btn-seconday btn-sm"}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className={getBadgeClasses()}>{count}</span>
      <button
        className={"btn btn-seconday btn-sm"}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <div>{renderTags()}</div>
    </>
  );

  function getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }
};

export default Counter;
