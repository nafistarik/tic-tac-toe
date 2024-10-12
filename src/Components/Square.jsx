export default function Square({ value, handleClick, id }) {
  return (
    <div
      onClick={() => handleClick(id)}
      className=" text-4xl text-red-800 font-extrabold w-20 h-20 border-4 border-red-800 flex justify-center items-center rounded-full cursor-pointer"
    >
      {value}
    </div>
  );
}
