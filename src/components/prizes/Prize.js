import trophy from "../../assets/trophy.png";
import PrizeCard from "./PrizeCard";
import prizeBanner from "../../assets/prize.png";
const Prize = () => {
  const prizeData = [
    {
      type: "2nd Prize",
      amount: "To Be Released",
      img: trophy,
    },
    {
      type: "1st Prize",
      amount: "To Be Released",
      img: trophy,
    },
    {
      type: "3rd Prize",
      amount: "To Be Released",
      img: trophy,
    },
  ];
  return (
    <div className="bg-[#00000080] relative py-10 md:px-20 sm:px-8 px-4  w-[100%] ">
      <h1 className="text-center mb-8 font-[Varela] text-[#8F8EE9] font-bold text-5xl">
        Prizes
      </h1>
      {/* <div className="w-full flex items-center justify-center"> */}
      {/* <img className="rounded-lg" src={prizeBanner} alt="" /> */}
      {/* <PrizeCard /> */}
      {/* </div> */}
      <h3 className="text-center mb-8  text-gray text-2xl">
        To be announced...
      </h3>
    </div>
  );
};
export default Prize;
