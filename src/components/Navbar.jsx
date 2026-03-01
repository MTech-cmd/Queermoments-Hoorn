import banner from "../assets/banner.jpg"
import mond from "../assets/mond.png"

const Navbar = () => {
  return (
    <div>
      <img src={banner} className="w-full" />

      <nav className="relative flex justify-between items-center bg-[#f3e9f3] p-2 border-t-[#e7d3e6] border-t-4">
        
        {/* Left Floating Logo Block */}
        <div className="-top-8 left-0 absolute">
          {/* Stretch background to left edge */}
          <div className="flex items-center bg-[rgba(104,23,23,0.06)] py-4 pr-40 pl-32">
            <img src={mond} />
          </div>
        </div>

        {/* Middle */}
        <div className="mx-auto mr-24">
          <p className="font-poppins font-semibold text-[27px] tracking-wide">
            Queer Moments Hoorn
          </p>
          <p className="font-cormorant-garamond font-light text-2xl tracking-widest">
            The queer place to be!
          </p>
        </div>

        {/* Right */}
        <div>
          <p className="text-[#918a92] text">
            <a src="TODO: add links" className="mt-0.5 px-4">Home</a>
            <a src="TODO: add links" className="px-4">Borrels & meet-ups</a>
            <a src="TODO: add links" className="px-4">Sfeer</a>
            <a src="TODO: add links" className="px-4">Appgroep</a>
            <a src="TODO: add links" className="px-4">Vrijwilliger worden?</a>
            <a src="TODO: add links" className="px-4">More</a>
          </p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar