

const Loading = ({ loadimg }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <img src={loadimg} className="w-24 h-auto animate-pulse"/>
    </div>
  );
};

export default Loading;
