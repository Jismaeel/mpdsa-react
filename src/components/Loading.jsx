import mpdsalogo from "../img/mpddsa-02 1.webp";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <img src={mpdsalogo} className="w-24 h-auto animate-pulse"/>
    </div>
  );
};

export default Loading;
