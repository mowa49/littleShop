import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <div className="">
      <div className="bg-image">
        {/* <img className="home-image" src="src/assets/bg.jpeg" /> */}
        {/* <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-sm  rounded-sm p-[5vh] absolute bottom-0 min-w-[100%] items-center  flex justify-center content-end"> */}
        <div className="absolute bottom-20 min-w-[100%] items-center left-[40rem] flex content-end">
          <Link to="/store">
            <button className="bg-transparent min-w-[20rem] min-h-[5rem] text-lg text-white hover:bg-black shadow-2xl">
              Browse the Store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
