import React from "react";

let Concerts = [
  {
    id: 1,
    band: "Green day",
    place: "Dinamo",
    date: "2020-09-21",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61HZsw4F5VL._SL1425_.jpg"
  },
  {
    id: 2,
    band: "Awolnation",
    place: "Chizhovka",
    date: "2020-09-22",
    imgSrc: "https://lastfm.freetls.fastly.net/i/u/500x500/db98a3f967bd4b6b9dc86251801cce60.jpg"
  },
  {
    id: 3,
    band: "Sum 41",
    place: "Dinamo",
    date: "2021-11-03",
    imgSrc: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Sum_41_order_in_decline.png/274px-Sum_41_order_in_decline.png"
  },
  {
    id: 4,
    band: "Twenty one pilots",
    place: "Chizhovka",
    date: "2021-02-03",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71k-5WHYB9L._AC_SL1425_.jpg"
  },
  {
    id: 5,
    band: "Tony Igy",
    place: "Dinamo",
    date: "2021-06-05",
    imgSrc: "https://avatars.yandex.net/get-music-content/3318009/545ed104.a.587142-5/m1000x1000"
  },
  {
    id: 6,
    band: "Skillet",
    place: "Dinamo",
    date: "2021-04-04",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81Bvk-ayKGL._SL1448_.jpg"
  },
  {
    id: 7,
    band: "Jon Bellion",
    place: "Dinamo",
    date: "2021-03-16",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/910h0v-R2jL._AC_SL1500_.jpg"
  },

]

let Contacts = {
  phone: ["+375295295862", "+375295295863", "+375295295864"],
  email: "ivan.skorodumov.21@gmail.com",
  skype: "live:smthHereLoremIpsum",
  vk: "vk.com/id?selevn"
}

export function getConcerts(callback) {
  //imitate database request
  setTimeout(() => (callback(Concerts), 50));
}

export function getContacts(callback) {
  //imitate database request
  setTimeout(() => (callback(Contacts), 50));
}

