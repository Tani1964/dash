import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((value) => value.toFixed(0))}</animated.div>;
};

const Cards = ({ color, rating, title, icon }) => {
  return (
    <>
      <div
        className="absolute flex flex-col lg:w-56 xl: p-10 h-56 rounded-3xl justify-between overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white bg-opacity-30 w-fit p-2 rounded-md text-white">
          <div>{icon}</div>
        </div>

        <div className="text-3xl text-white">
          <Number n={rating} />
        </div>
        {console.log(rating)}
        <div className="text-md w-2/3 ">{title} Project</div>
      </div>
      <div className="animate-slide-left h-fit">
        <div className="z-20  w-56 h-72 rounded-3xl bg-white bg-opacity-30 rotate-45 translate-x-56 -translate-y-20"></div>
        <div className="z-10 lg:w-56 h-72 rounded-3xl bg-white bg-opacity-30 rotate-45 translate-x-56 -translate-y-96 "></div>
      </div>
    </>
  );
};

export default Cards;
