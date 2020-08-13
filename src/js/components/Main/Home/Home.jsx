import React from 'react'
import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import PropTypes from "prop-types"

const Home = props => {
  return (<div>
    <LanguageContext.Consumer>
      {langProps => (<div>
            <h3>{languageSrc.home[langProps.language]}</h3>
            <input placeholder={languageSrc.search[langProps.language]} type="text" value={props.searchText}
                   onChange={props.onInputChange}/>
            {/*подсказка при наборе*/}
            <div className="tip">
              <ul>
                {props.concerts.map((item, index) => <li key={index}>{item.band}</li>)}
              </ul>
            </div>
          </div>
      )}
    </LanguageContext.Consumer>
  </div>)
}

Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func
}

export default Home;