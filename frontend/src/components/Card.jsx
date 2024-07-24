import React from "react";
import { airlineImage } from "../assets/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Card = ({
  origin,
  destination,
  program,
  economyMiles,
  economyTax,
  businessMiles,
  businessTax,
  firstMiles,
  firstTax
}) => {
  return (
    <div className="card bg-green-800 text-slate-300 w-[250px]  m-4 rounded-lg flex flex-col justify-center items-center gap-[15px] pb-4">
      {/* Airline Image  */}
      <div>
        <img src={airlineImage} alt="" className="rounded-t-lg" />
      </div>

      {/* Program Title  */}
      <h3 className="text-white text-2xl font-medium">{program}</h3>

        {/* Origin and Destination  */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg">
          {origin} <ArrowForwardIcon /> {destination}{" "}
        </p>
        <p className="text-sm">2024-07-09 - 2024-10-07</p>
      </div>

      {/* Min Bussiness Miles  */}
      <div className="flex flex-col justify-center items-center text-3xl font-bold">
        {businessMiles ? <p>{businessMiles}<span className="text-lg font-normal"> + ${businessTax}</span> </p> : <p >N/A</p>}
        <p className="text-sm font-normal">Min Business Miles</p>
      </div>

      {/* Min Economy Miles  */}
      <div className="flex flex-col justify-center items-center text-3xl font-bold">
        {economyMiles ? <p>{economyMiles}<span className="text-lg font-normal"> + ${economyTax}</span> </p> : <p >N/A</p>}
        <p className="text-sm font-normal">Min Economy Miles</p>
      </div>

      {/* Min First Miles  */}
      <div className="flex flex-col justify-center items-center text-3xl font-bold">
        {firstMiles ? <p>{firstMiles}<span className="text-lg font-normal"> + ${firstTax}</span> </p> : <p >N/A</p>}
        <p className="text-sm font-normal">Min First Miles</p>
      </div>

    </div>
  );
};

export default Card;
