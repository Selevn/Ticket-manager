let Concerts = [
  {
    band: "Green day",
    place: "Dinamo",
    date: "21.09.2020",
  },
  {
    band: "Awolnation",
    place: "Chizhovka",
    date: "30.10.2020",
  },
  {
    band: "Sum 41",
    place: "Dinamo",
    date: "02.04.2021",
  },
  {
    band: "Twenty one pilots",
    place: "Chizhovka",
    date: "15.03.2021",
  },
  {
    band: "Tony Igy",
    place: "Dinamo",
    date: "03.04.2021",
  },
]

export function getConcerts(callback) {
  //imitate database request
  setTimeout(() => (callback(Concerts), 50));
}