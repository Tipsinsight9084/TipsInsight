export default function Heading(props) {
  let heading = props.heading
    return (
      <div className="mt-4 md:mt-10 mb-4 flex justify-center items-center"> {/* Center the content horizontally */}
      <div className="flex justif-center items-center">
      <div className="border-2 border-customRed w-16 md:w-72 mr-4 md:m-12 h-1 rounded-full"></div>
      </div>
        <div className= "font-mont font-extrabold w-48 text-4xl md:text-3xl text-black text-center">{heading}</div>
      <div className="border-2 border-solid border-customRed ml-4 w-16 md:w-72 md:m-12 h-1 rounded-2xl"></div>
      </div>
    );
  }
  