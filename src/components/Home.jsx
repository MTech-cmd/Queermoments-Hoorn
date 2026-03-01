import Hero from "../assets/hero.jpg"
import Oog from "../assets/oog.png"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-start gap-16 lg:gap-56 bg-[#dad2da] p-12 lg:p-24">
        
        {/* Linker kant */}
        <div className="w-full lg:w-1/2">
          <img 
            src={Hero} 
            className="w-full object-cover"
            alt="Queer Moments Hoorn"
          />
        </div>

        {/* Rechter kant */}
        <div className="w-full lg:w-1/2">
          
          <h1 className="relative font-aboreto text-black text-4xl lg:text-5xl leading-[1.1]">
          Toffe queer borrels <br />
          en meet-ups <br />
          in Hoorn!

          {/* Oog */}
          <img
          src={Oog}
          alt="oog graphic"
          className="top-[32%] left-[40%] absolute"
          />
          </h1>

          <p className="mt-10 max-w-lg font-montserrat text-sm leading-relaxed tracking-widest">
            Ben je bi, homo, ace/aro, panseksueel, trans of identificeer je jezelf op een andere manier binnen de LHBTQIA+ community?
            Kom dan naar onze maandelijkse borrels en koffie meet-ups! Onze events zijn voor jong, oud en alles ertussenin. Iedereen is welkom.
            Ontmoet nieuwe mensen en voel je thuis in onze community.
            <hr className="invisible h-8"/>
            Ben je nieuwsgierig of nog zoekende? Dan ben je ook van harte welkom.
            Neem ook gezellig je eigen support-vrienden en familie mee.
          </p>

          <hr className="invisible h-8"/>

          <p className="ml-38">
            KOMENDE EVENTS 2026
          </p>

          <hr className="invisible h-2"/>

          <ul className="space-y-4 mr-64 font-montserrat font-light text-sm text-center tracking-wide">
            <li>Zondag 15 maart, 11:00 - 13:30, Hotel Maria Kapel</li>
            <li>Zondag 29 maart, 15:00 - 17:00, Cafe Goos</li>
            <li>Zondag 26 april, 15:00 - 17:00, Nog geen locatie (borrel onder voorbehoud)</li>
            <li>Zondag 31 mei, 15:00 - 17:00, Cafe Goos</li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Home