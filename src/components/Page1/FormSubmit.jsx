"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ImageDialog } from "./SizeChart";
// import ShirtForm from "./ShirtForm";
import { useForm } from 'react-hook-form';

// import Navbar from "../HomePage/Navbar/Navbar";

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

export default function FormSubmit() {
  const { register, handleSubmit,watch, formState: { errors,isSubmitting } } = useForm();
  
  const onSubmit =async data => {
    // await delay(2)
    console.log(data)
  };
  console.log(errors);


  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden">
      {circles.map((circle, index) => (
        <FloatingCircle
          key={index}
          delay={circle.delay}
          size={circle.size}
          duration={circle.duration}
          className="absolute z-0"
        />
      ))}
      {/* <Navbar /> */}

      <div className="flex justify-center text-white font-title ">
        <div className="flex flex-col md:flex-row mx-4 md:mx-10 mt-5 w-full max-w-4xl bg-black bg-opacity-40 rounded-3xl p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-10">
          <h1></h1>
          <div>
            {/* <h2 className="text-left text-3xl my-5">Click on QR</h2> */}
            <img
              src="src/components/QR.jpg"
              alt="QR"
              className="w-64 md:w-full max-w-xs cursor-pointer brightness-90 hover:brightness-100 rounded-3xl hover:scale-110 transition ease-in-out duration-1000"
              onClick={() => setIsDialogOpen(true)}
            />
            <ImageDialog
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              imageUrl="src/components/QR.jpg"
              alt="Size chart"
            />
          </div>
          <div className="w-full md:w-1/2">

            <form action="/submit-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
          
              <div class="form-group">
                <label className="block text-lg md:text-xl mb-2" for="name">
                  Name:
                </label>
                <input
                type="text" placeholder="First name" 
                {...register("First name", {required: true})}
                  id="name"
                  name="name"
                  className="w-full bg-black bg-opacity-25 text-base rounded-full border-2 border-b-purple-600 border-black outline-none hover:border-b-purple-400 h-10 md:h-12 px-4"
                  required
                />
              </div>
              <div class="form-group">
                <label className="block text-lg md:text-xl mb-2" for="branch">
                  Branch:
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder="Enter you BRANCH"
                  {...register("Branch", {required: true, maxLength: 15})}
                  className="w-full bg-black bg-opacity-25 text-base rounded-full border-2 border-b-purple-600 border-black outline-none hover:border-b-purple-400 h-10 md:h-12 px-4"
                  required
                />
              </div>
              <div class="form-group">
                <label
                  className="block text-lg md:text-xl mb-2"
                  for="transaction-id"
                >
                  Transaction ID:
                </label>
                <input
                  type="text"
                  id="transaction-id"
                  name="transaction_id"
                  placeholder="Enter you transaction id"
                  {...register("TxnId", {required: true})}
                  className="w-full bg-black bg-opacity-25 text-base rounded-full border-2 border-b-purple-600 border-black outline-none hover:border-b-purple-400 h-10 md:h-12 px-4"
                  required
                />
              </div>
              <div class="form-group">
                <label className="block text-lg md:text-xl mb-2" for="roll-no">
                  Roll No:
                </label>
                <input
                  type="text"
                  id="roll-no"
                  name="roll_no"
                  placeholder="2024..."
                  {...register("RollNo", {required: true, maxLength: 10,minLength:10})}
                  className="w-full bg-black bg-opacity-25 text-base rounded-full border-2 border-b-purple-600 border-black outline-none hover:border-b-purple-400 h-10 md:h-12 px-4"
                  required
                />
              </div>
              <div class="form-group">
                <label className="block text-lg md:text-xl mb-2" for="roll-no">
                  Mobile No:
                </label>
                <input
                  type="text"
                  {...register("MobNo", {required: true, maxLength: 13,minLength:10})}
                  id="roll-no"
                  name="roll_no"
                  placeholder="+91..."
                  className="w-full bg-black bg-opacity-25 text-base rounded-full border-2 border-b-purple-600 border-black outline-none hover:border-b-purple-400 h-10 md:h-12 px-4"
                  required
                />
              </div>
              <button
                disabled={isSubmitting}
                className="w-full text-base md:text-xl mt-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center py-2 md:py-3 "
                type="submit"
                value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* // "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ImageDialog } from "./SizeChart";

// const FloatingCircle = ({ delay, size, duration }) => { */}
//   const circleRef = useRef(null);

//   useEffect(() => {
//     if (!circleRef.current) return;

//     const tl = gsap.timeline({
//       repeat: -1,
//       delay,
//       defaults: {
//         ease: "power2.inOut",
//       }
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
//             ease: "power2.inOut"
//           },
//           {
//             opacity: 0,
//             scale: size,
//             duration: duration / 2,
//             ease: "power2.inOut"
//           }
//         ]
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

// export default function FormSubmit() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
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
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden">
//       {circles.map((circle, index) => (
//         <FloatingCircle
//           key={index}
//           delay={circle.delay}
//           size={circle.size}
//           duration={circle.duration}
//           className="absolute z-0"
//         />
//       ))}

//       <div className="flex justify-center items-center text-white font-title min-h-screen">
//         {/* <div className="flex flex-col md:flex-row mx-4 md:mx-10 mt-5 w-full max-w-4xl bg-black bg-opacity-40 rounded-3xl p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-10"> */}
//           {/* QR Code Section */}
//           <div className="flex flex-col items-center justify-center w-full md:w-1/2">
//             <img
//               src="src/components/QR.jpg"
//               alt="QR"
//               // className="w-64 md:w-full max-w-xs cursor-pointer brightness-90 hover:brightness-100 rounded-3xl hover:scale-110 transition ease-in-out duration-1000"
//               onClick={() => setIsDialogOpen(true)}
//             />
//             <ImageDialog
//               isOpen={isDialogOpen}
//               onClose={() => setIsDialogOpen(false)}
//               imageUrl="src/components/QR.jpg"
//               alt="Size chart"
//             />
//           </div>

//           {/* Form Section */}
//           <div className="w-full md:w-1/2">
//             <form action="/submit-form" method="POST" className="space-y-4">
//               {["Name", "Branch", "Transaction ID", "Roll No", "Mobile No"].map((field, index) => (
//                 <div key={index} className="form-group">
//                   <label
//                     htmlFor={field.toLowerCase().replace(' ', '-')}
//                     // className="block text-lg md:text-xl mb-2"
//                   >
//                     {field}:
//                   </label>
//                   <input
//                     type="text"
//                     id={field.toLowerCase().replace(' ', '-')}
//                     name={field.toLowerCase().replace(' ', '_')}
//                     placeholder={`Enter your ${field}`}
//                     // className="w-full bg-black bg-opacity-25 text-base rounded-full border-2 border-b-purple-600 border-black outline-none hover:border-b-purple-400 h-10 md:h-12 px-4"
//                     required
//                   />
//                 </div>
//               ))}

//               <button
//                 className="w-full text-base md:text-xl mt-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500
//                 hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center py-2 md:py-3"
//                 type="submit" onClick={()=>handleSubmit()}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
