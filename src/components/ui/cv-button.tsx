export default function CVButton() {
  return (
    //If this changes to Link - prefetch={false}
    <button
      className="px-4 py-2 text-black flex place-self-start rounded-lg 
      inset-shadow-[0_0_5px_2px_white] bg-gradient-to-br from-pink-200 to-orange-200 
      hover:bg-gradient-to-tl hover:from-pink-200 hover:to-orange-200 cursor-pointer"
    >
      Download CV
    </button>
  );
}
