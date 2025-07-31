import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" h-[10vh] p-2">
      <div
       className="flex items-center justify-between w-full
            bg-white/10 rounded-md bg-clip-padding backdrop-filter
            backdrop-blur-md bg-opacity-10 border border-white/30
">
        <div className="logo  flex items-center">
          <img className="h-15" src="./Skill-1.svg" />
          <h2 className=" text-gray-100 text-xl font-medium tracking-wide">
            Skillsync
          </h2>
        </div>
        <div className="utils flex  p-3 items-center gap-x-5">
          <button className="border border-gray-100 px-4 py-2 text-gray-100 rounded-lg ">
            <i className="pr-5 text-xl ri-add-circle-line"></i>
            Create Task
          </button>
          <div className="profile-tag flex  items-center text-gray-100 gap-x-4">
            <span className="bg-gray-100 px-6 py-6 rounded-[50%]"></span>
            <div className="profile-name flex flex-col">
              <h1>Julias</h1>
              <small className="text-[.8rem] text-gray-100">
                UI/UX Designer
              </small>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
