import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
const Card = ({ item }) => {
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  return (
    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-xl p-2 md:p-5 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] lg:w-[650px] lg:hover:scale-110 ease-in-out duration-500 text-xs md:text-sm md:w-[500px] lg:text-base w-[280px]">
      <div className="md:flex justify-between">
        <img
          src={isMediumScreen ? item.picture.medium : item.picture.large}
          alt=""
          className="m-auto"
        />
        <div className="mt-2 md:mt-0 md:w-3/4 border p-2">
          <h2 className="md:text-lg lg:text-2xl font-semibold text-center md:text-left">
            {item.name.title} {item.name.first} {item.name.last}
          </h2>
          <div>
            <strong>Email id:</strong>&nbsp; {item.email}
          </div>
          <div className="flex">
            <div className="w-1/2">
              <strong>DOB:</strong>&nbsp; {item.dob.date.slice(8, 10)}-
              {item.dob.date.slice(5, 7)}-{item.dob.date.slice(0, 4)}
            </div>
            <strong>Gender:</strong>&nbsp;{" "}
            {item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
          </div>
          <div className="flex">
            <div className="w-1/2">
              <strong>Phone:</strong>&nbsp;{item.phone}
            </div>
            <div>
              <strong>Cell:</strong>&nbsp;{item.cell}
            </div>
          </div>
          <div>
            <strong>Address:</strong>&nbsp;{" "}
            {Object.entries(item.location.street).map(([key, value]) => (
              <span key={key}>{value}, &nbsp;</span>
            ))}
            {item.location.city}
          </div>
          <div className="flex">
            <div className="w-1/2">
              <strong>State:</strong>&nbsp;{item.location.state}
            </div>
            <div className="w-1/2">
              <strong>Country:</strong>&nbsp; {item.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
