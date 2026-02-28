import Hero from "../assets/hero.jpg"
import Oog from "../assets/oog.png"

const Home = () => {
  return (
    <div>
      <div className="flex items-start gap-48 bg-[#dad2da] p-24">
        
        <div className="flex-1 w-2/3">
          <img 
            src={Hero} 
            className="object-cover" 
          />
        </div>

        <div className="flex flex-1 w-24">
          <h1 className="font-aboreto text-4xl">
            Toffe queer borrels en meetups in Hoorn!
          </h1>
          <img src={Oog} />
        </div>

      </div>
    </div>
  )
}

export default Home