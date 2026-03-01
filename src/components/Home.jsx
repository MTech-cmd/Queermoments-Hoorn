import Hero from "../assets/hero.jpg"
import Oog from "../assets/oog.png"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className="flex items-start gap-72 bg-[#dad2da] p-24">
        
        <div className="flex-1 w-2/3">
          <img 
            src={Hero} 
            className="object-cover" 
          />
        </div>

        <div className="flex-1">
            <h1 className="font-aboreto text-4xl leading-tight">
                Toffe queer borrels <br /> en meetups <br /> in Hoorn
            </h1>
        </div>
            <img 
            src={Oog} 
            className="absolute mt-96 mr-24 oog"
            alt=""
            />
      </div>
    </div>
  )
}

export default Home