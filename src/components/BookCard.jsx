import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import styles from "./BookCard.module.css";

function BookCard({ data, handleLikedList }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  return (
    <li className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <FaHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </li>
  );
}

export default BookCard;
