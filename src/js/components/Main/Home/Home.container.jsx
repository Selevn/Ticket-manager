import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"

import Home from './Home.jsx'

import {useHistory} from "react-router-dom";


const HomeContainer = ({concerts, getConcerts, halls, getHalls}) => {

    const [inputText, setInputText] = useState("");
    const [helpList, setHelpList] = useState([]);
    const [recent, setRecent] = useState([]);

    const history = useHistory();

    useEffect(
        () => {
            getConcerts()
        }, [concerts]
    )
    useEffect(
        () => {
            getHalls()
        }, [halls]
    )

    useEffect(
        findThreeNearest
        ,
        [concerts]
    )

    useEffect(
        () => {
            document.addEventListener("click", clickOutsideDetector)
        }
    )

    function clickOutsideDetector(event) {
        if (!(event.target.tagName === "ul" || event.target.tagName === "a" || event.target.tagName === "input")) {
            setInputText("");
            setHelpList([]);
        }
    }


    function findThreeNearest() {
        if (concerts.length !== 0) {
            let sortedConcerts = concerts.sort((a, b) => {
                if (Date.parse(a.date) < Date.parse(b.date))
                    return -1
                else
                    return 1
            })
            let outArr = []
            for (let i in sortedConcerts) {
                if (Date.parse(sortedConcerts[Number(i)].date) > Date.now()) {
                    outArr.push(sortedConcerts[Number(i) + 2])
                    outArr.push(sortedConcerts[Number(i) + 1])
                    outArr.push(sortedConcerts[Number(i)])
                    setRecent(outArr);
                    break;
                }
            }
        }

    }


    const similarConcerts = useCallback(
        val => {
            if (val.length > 1) {
                return val ?
                    concerts.filter((i) => i.band.toUpperCase().includes(val.toUpperCase())).map((item) => ({
                        ...item,
                        type: "concert"
                    })) :
                    []
            } else {
                return val ?
                    concerts.filter((i) => i.band.toUpperCase().startsWith(val.toUpperCase())).map((item) => ({
                        ...item,
                        type: "concert"
                    })) :
                    []
            }
        },
        [concerts]
    );

    const similarHalls = useCallback(
        val => {
            if (val.length > 1) {
                return val ?
                    halls.filter((i) => i.place.toUpperCase().includes(val.toUpperCase())).map((item) => ({
                        ...item,
                        type: "hall"
                    })) :
                    []
            } else {
                return val ?
                    halls.filter((i) => i.place.toUpperCase().startsWith(val.toUpperCase())).map((item) => ({
                        ...item,
                        type: "hall"
                    })) :
                    []
            }
        },
        [halls]
    );


    function onInputChange(event) {
        setInputText(event.target.value);
        setHelpList([...similarConcerts(event.target.value), ...similarHalls(event.target.value)]);
        console.log([...similarConcerts(event.target.value), ...similarHalls(event.target.value)])
    }

    function onSearch() {

        if (helpList[0]) {
            history.push('/' + helpList[0].type + '/' + helpList[0].id)
        }
    }

    function keyPress(e) {
        if (e.keyCode === 13 && helpList[0]) {
            history.push('/' + helpList[0].type + '/' + helpList[0].id)
        }
    }


    return (
        <Home searchText={inputText}
              onInputChange={onInputChange}
              helpList={helpList}
              upcomingConcerts={recent}
              onSearch={onSearch}
              onEnterSearch={keyPress}
        />
    )
}

HomeContainer.propTypes = {
    concerts: PropTypes.array,
    halls: PropTypes.array,
    searchText: PropTypes.string,
    onInputChange: PropTypes.func,
    getConcerts: PropTypes.func,
    getHalls: PropTypes.func,
    recent: PropTypes.array,
    history: PropTypes.array,
}


export default HomeContainer;