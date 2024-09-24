import React from 'react';
import styles from "./Card.module.scss"

function Card({ imageUrl, title, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={
            isFavorite ? "../img/heart-liked.svg" : "../img/heart-unliked.svg"
          }
          alt="Unliked"
        />
      </div>
      <img width={150} height={130} src={imageUrl} alt="Deserts" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price}₽</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "../img/btn-check.svg" : "../img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;
