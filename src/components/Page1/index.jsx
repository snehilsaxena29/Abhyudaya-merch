"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ShirtForm from "./ShirtForm";

const FloatingCircle = ({ delay, size, duration }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      delay,
      defaults: {
        ease: "power2.inOut",
      },
    });

    tl.fromTo(
      circleRef.current,
      {
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        opacity: 0,
        scale: 0.2,
      },
      {
        x: Math.random() * window.innerWidth,
        y: 0,
        opacity: 0,
        scale: 0.2,
        duration,
        keyframes: [
          {
            opacity: 0.6,
            scale: size,
            duration: duration / 2,
            ease: "power2.inOut",
          },
          {
            opacity: 0,
            scale: size,
            duration: duration / 2,
            ease: "power2.inOut",
          },
        ],
      }
    );

    return () => tl.kill();
  }, [delay, size, duration]);

  return (
    <div
      ref={circleRef}
      className="rounded-full bg-purple-400 absolute blur-sm"
      style={{ width: `${size * 10}px`, height: `${size * 10}px` }}
    />
  );
};

const Merch = () => {
  const circles = [
    { delay: 0, size: 2, duration: 8 },
    { delay: 2, size: 1.5, duration: 10 },
    { delay: 4, size: 1, duration: 7 },
    { delay: 1, size: 2.5, duration: 9 },
    { delay: 3, size: 1.2, duration: 11 },
    { delay: 5, size: 1.8, duration: 8.5 },
    { delay: 2.5, size: 1.3, duration: 9.5 },
    { delay: 4.5, size: 1.6, duration: 10.5 },
    { delay: 0.5, size: 1.4, duration: 7.5 },
    { delay: 3.5, size: 1.7, duration: 8.8 },
  ];

  return (
    <div className="h-[110vh] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden">
      {circles.map((circle, index) => (
        <FloatingCircle
          key={index}
          delay={circle.delay}
          size={circle.size}
          duration={circle.duration}
          className="absolute z-0"
        />
      ))}
      <div className="flex justify-center items-center w-full  px-4 py-8">
        <div className="text-white bg-black bg-opacity-50 w-full max-w-5xl rounded-3xl p-6 md:p-10 lg:p-12">
          <h1 className="absolute left-1/3 text-xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8 font-title">
            Welcome to Merch Store
          </h1>
          <h1 className=" text-3xl md:text-3xl lg:text-[100px] text-[#1c2d52] text-center mb-8 font-title">
            MERCH STORE
          </h1>
          <div className="flex flex-col mt-8 md:mt-12 lg:mt-16 justify-center items-start space-y-8 md:space-y-0 md:flex-row md:space-x-8 lg:space-x-12">
            <div className="w-full md:w-1/2 flex justify-center ">
              <img
                src="src/components/merch.png"
                alt="merch"
                className="w-64 md:w-full max-w-xs rounded-3xl brightness-90 hover:brightness-100 hover:scale-110 transition ease-in-out duration-1000"
              />
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <ShirtForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merch;



// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ShirtForm from "./ShirtForm";
// // import ImageDialog  from "./SizeChart";

// const FloatingCircle = ({ delay, size, duration }) => {
//   const circleRef = useRef(null);

//   useEffect(() => {
//     if (!circleRef.current) return;

//     const tl = gsap.timeline({
//       repeat: -1,
//       delay,
//       defaults: {
//         ease: "power2.inOut",
//       },
//     });

//     tl.fromTo(
//       circleRef.current,
//       {
//         x: Math.random() * window.innerWidth,
//         y: window.innerHeight,
//         opacity: 0,
//         scale: 0.2,
//       },
//       {
//         x: Math.random() * window.innerWidth,
//         y: 0,
//         opacity: 0,
//         scale: 0.2,
//         duration,
//         keyframes: [
//           {
//             opacity: 0.6,
//             scale: size,
//             duration: duration / 2,
//             ease: "power2.inOut",
//           },
//           {
//             opacity: 0,
//             scale: size,
//             duration: duration / 2,
//             ease: "power2.inOut",
//           },
//         ],
//       }
//     );

//     return () => tl.kill();
//   }, [delay, size, duration]);

//   return (
//     <div
//       ref={circleRef}
//       className="rounded-full bg-purple-400 absolute blur-sm"
//       style={{ width: `${size * 10}px`, height: `${size * 10}px` }}
//     />
//   );
// };

// const Merch = () => {
//   // const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const circles = [
//     { delay: 0, size: 2, duration: 8 },
//     { delay: 2, size: 1.5, duration: 10 },
//     { delay: 4, size: 1, duration: 7 },
//     { delay: 1, size: 2.5, duration: 9 },
//     { delay: 3, size: 1.2, duration: 11 },
//     { delay: 5, size: 1.8, duration: 8.5 },
//     { delay: 2.5, size: 1.3, duration: 9.5 },
//     { delay: 4.5, size: 1.6, duration: 10.5 },
//     { delay: 0.5, size: 1.4, duration: 7.5 },
//     { delay: 3.5, size: 1.7, duration: 8.8 },
//   ];

//   return (
//     <div className=" min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden">
//       {circles.map((circle, index) => (
//         <FloatingCircle
//           key={index}
//           delay={circle.delay}
//           size={circle.size}
//           duration={circle.duration}
//           className="absolute z-0"
//         />
//       ))}
//       <div className="flex justify-center items-center w-full h-[100vh]">
//         <div className="text-white inset-0 bg-black bg-opacity-50 w-[70%] h-[90%] rounded-3xl">
//           <h1 className="mb-10 font-title">Welcome to Merch Store</h1>
//           <div className="flex justify-center items-start">
//             <div>
//               <img
//                 src="src/components/merch.png"
//                 alt="merch"
//                 className="w-[350px] mr-20 rounded-3xl brightness-50 hover:brightness-100 hover:scale-110 transition ease-in-out duration-1000"
//               />
//             </div>

//             <div className="mx-7">
//               <ShirtForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Merch;


