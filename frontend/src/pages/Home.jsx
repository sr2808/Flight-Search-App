import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import Card from "../components/Card";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Home = () => {
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("JFK");
  const [cabinSection, setCabinSection] = useState("Economy");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post("https://flight-search-app-beta.vercel.app/api/flights", {
        origin, //dymaic data
        destination, //dymaic data
        cabinSection, //dymaic data
        partnerPrograms: [
          'Air Canada',
          'United Airlines',
          'KLM',
          'Qantas',
          'American Airlines',
          'Etihad Airways',
          'Alaska Airlines',
          'Qatar Airways',
          'LifeMiles',
      ],
        stops: 0,
        departureTimeFrom: "2024-07-09T00:00:00Z",
        departureTimeTo: "2024-10-07T00:00:00Z",
        isOldData: false,
        limit: 320,
        offset: 0,
        date: "2024-07-09T12:00:17.796Z",
      });
      console.log(response.data);
      const data = response.data.data;
      console.log(data);
      if (data && data.length > 0) {
        setResults(data);
      } else {
        setResults([]);
        setErrorMessage("Try another search route.");
      }
    } catch (error) {
      console.error("Error fetching flight data", error);
      setErrorMessage("Error fetching flight data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-green-950 flex flex-col justify-center items-center p-10">
      {/* Title  */}
      <h1 className="text-white font-medium text-xl">
        Choose Origin And Destination Airports:
      </h1>

      <div className="form p-0">
        <form
          className="h-full w-full flex flex-col justify-center items-center flex-shrink-0 flex-grow-0"
          onSubmit={handleSubmit}
        >
          {/* Origin  */}
          <div className="origin bg-[#343434] hover:bg-green-800 text-slate-300 w-[200px] p-2 my-4 rounded-lg shadow-lg shadow-black">
            <h3 className="my-1 text-slate-400">Origin</h3>
            <select
              name="origin"
              id="origin"
              className="bg-transparent w-full"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option className="bg-green-800" value="JFK">
                JFK
              </option>
              <option className="bg-green-800" value="DEL">
                DEL
              </option>
              <option className="bg-green-800" value="SYD">
                SYD
              </option>
              <option className="bg-green-800" value="BOM">
                BOM
              </option>
              <option className="bg-green-800" value="BIN">
                BIN
              </option>
              <option className="bg-green-800" value="BLR">
                BLR
              </option>
            </select>
          </div>

          {/* Destination  */}
          <div className="destination bg-[#343434] hover:bg-green-800 text-slate-300 w-[200px] p-2 my-4 rounded-lg shadow-lg shadow-black">
            <h3 className="my-1 text-slate-400">Destination</h3>
            <select
              name="destination"
              id="destination"
              className="bg-transparent w-full"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option className="bg-green-800" value="JFK">
                JFK
              </option>
              <option className="bg-green-800" value="DEL">
                DEL
              </option>
              <option className="bg-green-800" value="SYD">
                SYD
              </option>
              <option className="bg-green-800" value="LHR">
                LHR
              </option>
              <option className="bg-green-800" value="CDG">
                CDG
              </option>
              <option className="bg-green-800" value="DOH">
                DOH
              </option>
              <option className="bg-green-800" value="SIN">
                SIN
              </option>
            </select>
          </div>

          {/* Cabin Section  */}
          <div className="cabin-section bg-[#343434] hover:bg-green-800 text-slate-300 w-[200px] p-2 my-4 rounded-lg shadow-lg shadow-black ">
            <h3 className="my-1 text-slate-400">Cabin Section</h3>
            <select
              name="cabinSection"
              id="cabinSection"
              className="bg-transparent w-full"
              value={cabinSection}
              onChange={(e) => setCabinSection(e.target.value)}
            >
              <option className="bg-green-800" value="Economy">
                Economy
              </option>
              <option className="bg-green-800" value="Business">
                Business
              </option>
              <option className="bg-green-800" value="First">
                First
              </option>
            </select>
          </div>

          {/* Show Pro Filter */}
          <div className="show-pro-filter flex justify-center items-center w-[200px] px-2 py-4 my-4 rounded-md bg-[#000009]">
            <Switch {...label} />
            <p className="text-slate-400">
              Show{" "}
              <span className="text-yellow-600 font-medium">Pro Filters</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            className="bg-green-400 my-4 py-2 px-4 rounded-xl hover:bg-green-300 text-white font-medium mr-auto lg:ml-[30%]"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>

        {/* Display Error Message */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Display Results */}
        {results.length > 0 && (
          <div className="results w-full flex flex-col lg:flex-row lg:flex-wrap justify-start items-start lg:ml-[30%] ml-0">
            {results.map((result, index) => (
              <Card
                key={index}
                origin={origin}
                destination={destination}
                program={result.partner_program}
                economyMiles={result.min_economy_miles}
                economyTax={result.min_economy_tax}
                businessMiles={result.min_business_miles}
                businessTax={result.min_business_tax}
                firstMiles={result.min_first_miles}
                firstTax={result.min_first_tax}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
