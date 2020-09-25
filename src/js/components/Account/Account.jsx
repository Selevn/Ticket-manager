import React, {useMemo} from "react";
import PropTypes from "prop-types"
import languagePack from "../../language.js";
import style from "./Account.module.css"
import languageSrc from "../../language.js";
import Particle from "../CommonData/Paricles/Particles.jsx";

const Account = ({logout, langProps, tickets}) => {
  console.log(tickets)
  const particle = useMemo(() => (<Particle/>), [])
  return (<>
    {particle}
    <div className={"mainContainer"}>
      <div className={"pageHeaderRow"}>
        <div className={"pageHeader"}>
          {languageSrc.myTickets[langProps.language]}
        </div>
        <div className={style.logoutButCol}>
          <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
        </div>
      </div>
      <div className={style.dataBlock}>

      </div>
    </div>
  </>)
}

{/*<>
      <div className={style.mainContainer}>
        <div className={style.headerRow}>
          <div className={style.headerNameCol}><h1>{languagePack.myTickets[langProps.language]}</h1></div>
          <div className={style.logoutButCol}>
            <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
          </div>
        </div>
        <div>

          <div className={style.headerNameCol}>
            <table className={style.ticketTable}>
              <thead></thead>
              <tbody>
              <tr>
<td className={style.boldHeader}>{languagePack.band[langProps.language]}</td>
<td className={style.boldHeader}>{languagePack.place[langProps.language]}</td>
<td className={style.boldHeader}>{languagePack.date[langProps.language]}</td>
<td className={style.boldHeader}>{languagePack.cost[langProps.language]}</td>
</tr>
{tickets[0] && tickets.map((item) => {
return (
<tr key={item.id} className={style.tableTr}>
<td className={style.tableTd}>{item.band}</td>
<td className={style.tableTd}>{item.place}</td>
<td className={style.tableTd}>{new Date(item.date).getDate()} {languagePack.months[new Date(item.date).getMonth()][langProps.language]} {new Date(item.date).getFullYear()}</td>
<td className={style.tableTd}>{item.cost}$</td>
</tr>
)
})}
</tbody>
</table>
</div>
</div>
</div>
</>*/
}
Account.propTypes = {
  logout: PropTypes.func,
  langProps: PropTypes.obj,
  userId: PropTypes.number,
  tickets: PropTypes.array,
}

export default Account