import React from "react";

let Concerts = [
  {
    id: 1,
    band: "Green day",
    place: "Dinamo",
    date: "21.09.2020",
    imgSrc: "https://lastfm.freetls.fastly.net/i/u/ar0/d5b5e314af7c4124943582fe3a595543.jpg"
  },
  {
    id: 2,
    band: "Awolnation",
    place: "Chizhovka",
    date: "30.10.2020",
    imgSrc: "https://lastfm.freetls.fastly.net/i/u/500x500/db98a3f967bd4b6b9dc86251801cce60.jpg"
  },
  {
    id: 3,
    band: "Sum 41",
    place: "Dinamo",
    date: "02.04.2021",
    imgSrc: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Sum_41_order_in_decline.png/274px-Sum_41_order_in_decline.png"
  },
  {
    id: 4,
    band: "Twenty one pilots",
    place: "Chizhovka",
    date: "15.03.2021",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71k-5WHYB9L._AC_SL1425_.jpg"
  },
  {
    id: 5,
    band: "Tony Igy",
    place: "Dinamo",
    date: "03.04.2021",
    imgSrc: "https://avatars.yandex.net/get-music-content/3318009/545ed104.a.587142-5/m1000x1000"
  },
]

export function getConcerts(callback) {
  //imitate database request
  setTimeout(() => (callback(Concerts), 50));
}