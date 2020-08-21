import React from 'react'
import {Link} from "react-router-dom";

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import PropTypes from "prop-types"

const Home = props => {
  return (<div>
    <LanguageContext.Consumer>
      {langProps => (<div>
            <h3>{languageSrc.home[langProps.language]}</h3>
            <form>
              <input placeholder={languageSrc.search[langProps.language]} type="text" value={props.searchText}
                     onChange={props.onInputChange}/>
              <input type="button" onClick={() => {
              }} value={languageSrc.search[langProps.language]}/>
            </form>
            {/*подсказка при наборе*/}
            <div className="tip">
              <ul>
                {props.concerts.map((item) => <li key={item.id}><Link to={"concert/" + item.id}>{item.band}</Link>
                </li>)}
              </ul>
            </div>

          </div>
        </div>
    )}
  </LanguageContext.Consumer>
</div>)


Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func
}

export default Home;