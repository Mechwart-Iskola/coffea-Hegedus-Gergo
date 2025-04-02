import { img } from "framer-motion/client"
import { homeImages } from "../../data/data"
import "./home.css"

const Home = () => {
    {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/}
    
  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/}

  {/*A kép hátterében egy alakzat van.*/}

  {/*A gomb mutasson az about részre */}
  return (
    <div className="home" id="home">
      <h1 className="home__title">🙈</h1>
      <div className="home__images">
        <div className="home__shape"></div>
        {homeImages.map(image=>(
          <img src={image.src} alt={image.alt} className={image.className}/>
        ))}
      </div>
      <img src="/img/home-sticker.svg" alt="" className="home__Sticker"/>
        <div className="home__data">
          <p className="home__description">
          Find delicious hot and cold coffees with the 
best varieties, calm the pleasure and enjoy 
a good coffee, order now.
          </p>
          <a href="#about" className="button">
            Learn more
          </a>
        </div>
    </div>
  )
}

export default Home
