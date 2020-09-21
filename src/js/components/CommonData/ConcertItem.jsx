import {Link} from "react-router-dom";
import style from "./ConcertItem.module.css";
import languageSrc from "../../language";
import React from "react";



const ConcertItem = ({item, langProps}) => {
  let date = new Date(item.date);
  return (

      <div className={style.concertItem}>
        <Link to={"concert/" + item.id} className={style.cardLink}>
        <div className={style.cardImageDiv}>
          <img src={item.imgSrc} className={style.cardImage}/>
        </div>
        <div className={style.cardInfoDiv}>
          <div className={style.concertItemBand}> {item.band}</div>
          <div className={style.concertItemPlace}> {item.place}
          </div>
        </div>
        <div
          className={style.cardFooter}>{languageSrc.months[date.getMonth()][langProps.language] + " " + date.getDate()}</div>

        </Link>
      </div>

  )
}
export default ConcertItem