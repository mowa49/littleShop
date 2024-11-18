import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <div className="relative">
      <img className="home-image" src="./public/img1.jpeg" alt="backgound" />
      <div className="">
        <div className=" md:fixed md:left-0 md:bottom-[2rem] text-center md:text-left justify-center items-center content-center flex flex-col bg-[#0000007c] md:h-[40vh] backdrop-blur-md p-10 gap-4 text-white drop-shadow-lg z-10">
          <h2>Welcome to LittleShop!</h2>
          <p className="max-w-[40rem]">
            Discover a wide range of high-quality products at unbeatable prices.
            From the latest fashion trends to cutting-edge electronics and
            everyday essentials, LittleShop has it all. Enjoy a seamless
            shopping experience with fast shipping, secure payments, and
            exceptional customer service. Join our community of satisfied
            customers and find exactly what you need, right here at LittleShop.
          </p>
          <div className=" bottom-20 min-w-[100%] h-[70vh] md:flex md:justify-end">
            <Link to="/store">
              <button className="bg-transparent min-w-[10rem] border-white min-h-[3rem] text-lg text-white hover:bg-gray-600 hover:text-white shadow-2xl self-end">
                Browse the Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
