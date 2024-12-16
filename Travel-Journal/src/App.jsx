import Header from "./components/Header"
import Main from "./components/Main"
import Japan from "./Images/Japan.svg"
import Sydney from "./Images/Sydney.svg"
import Norway from "./Images/Sydney.svg"

function App() {

  return (
    <>
      <Header />
      <Main
        img={Japan}
        countryName="Japan"
        placeName="Mount Fuji"
        date="12 Jan, 2023 - 24 Jan, 2023"
        mapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        discription="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Main
        img={Sydney}
        countryName="Australia"
        placeName="Sydney Opera House"
        date="27 May, 2023 - 8 Jun, 2023"
        mapLink="https://maps.app.goo.gl/YEpHQ3VoCiYYesZ78"
        discription="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings." />
      <Main
        img={Norway}
        countryName="Norway"
        placeName="Geirangerfjord"
        date="01 Oct, 2024 - 18 Nov, 2024"
        mapLink="https://maps.app.goo.gl/1uSmQYb6TZRm2i9eA"
        discription="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </>
  )
}

export default App
