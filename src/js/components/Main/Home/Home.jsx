import React from 'react'
import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

function Home(props) {
  return (
      <LanguageContext.Consumer>
        {langProps => (<div>
              <h3>{languageSrc.home[langProps.language]}</h3>
              <input placeholder={languageSrc.search[langProps.language]} type="text" value={props.searchText}
                     onChange={props.onInputChange}></input>
              {/*подсказка при наборе*/}
              <div className="tip">
                <ul>
                  {props.concerts.map(i => <li>{i.band}</li>)}
                </ul>
              </div>

            </div>
        )}
      </LanguageContext.Consumer>
  )
}

export default Home;