import hours from "../../assets/chooseUs-img/24-7.png";
import gloves from "../../assets/chooseUs-img/gloves.png";
import mask from "../../assets/chooseUs-img/mask.png";
import sanitaze from "../../assets/chooseUs-img/saintaze.png";
import team from "../../assets/chooseUs-img/team.jpg";

export default function ChooseUs() {
  return (
    <div className="bg-gray-100">
      <div className="w-4/6 mx-auto pt-5">
        <h1 className="text-3xl text-gray-800">-WHY CHOOSE US</h1>
        <h3 className="text-2xl text-gray-800">
          Because we care about your safety..
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:w-10/12 md:mx-auto gap-5 py-5 px-2 md:px-0">
        <div className="grid grid-cols-2 gap-5 lg:gap-y-0">
          <div className="bg-white flex items-center gap-2 h-28 rounded-md">
            <img src={mask} alt="" />
            <p className="text-base font-semibold text-gray-800">Ensuring Masks</p>
          </div>
          <div className="bg-white flex items-center gap-2 h-28 rounded-md">
            <img src={gloves} alt="" />
            <p className="text-base font-semibold text-gray-800">Ensuring Gloves</p>
          </div>
          <div className="bg-white flex items-center gap-2 h-28 rounded-md">
            <img className="w-24" src={sanitaze} alt="" />
            <p className="text-base font-semibold text-gray-800">Sanitising Hands & Equipment</p>
          </div>
          <div className="bg-white flex items-center gap-2 h-28 rounded-md">
            <img className="w-24" src={hours} alt="" />
            <p className="text-base font-semibold text-gray-800">Sanitising Hands & Equipment</p>
          </div>
        </div>
        <div>
          <img src={team} alt="" />
        </div>
      </div>
    </div>
  );
}
