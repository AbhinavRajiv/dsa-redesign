import { Modal } from "@mantine/core";
import { useModal, useSession } from "@/utils/context";
import { loginUser } from "@/utils/auth";
import { useState } from "react";
import { getUserSession } from "@/utils/user";

export default function LoginModal({}) {
   const [modal, setModal] = useModal();
   return (
      <div>
         <Modal
            padding={0}
            opened={modal == "login"}
            onClose={() => setModal()}
            withCloseButton={false}
            centered
            radius={0}
            zIndex={100}
            closeOnClickOutside={false}
         >
            <div className="py-30 px-50 text-center">
               <h3 className="font-bold text-2xl text-heading">
                  Login to your account
               </h3>
               <SocialMediaLinks />
               <div class="inline-flex items-center justify-center w-full mb-[25px]">
                  <hr class="w-full h-[1px] bg-lightgray border-0 rounded dark:bg-gray-700" />
                  <div class="absolute px-[5px] -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                     <p className="text-sm text-smalltext">
                        or login via email
                     </p>
                  </div>
               </div>
               <InputForm setModal={setModal} />
               <p className=" text-sm text-smalltext">
                  We will never share your information with third parties.
               </p>
            </div>
         </Modal>
         {modal == "login" && <CloseButton setModal={setModal} />}
      </div>
   );
}

function SocialMediaLinks() {
   return (
      <div className="mt-30 mb-[25px] text-center">
         <p className="text-sm text-smalltext mb-[15px]">
            Login with Social Media
         </p>
         <div className="icons flex gap-[15px] justify-center">
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/google.svg" alt="G" />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/twitter-white.svg" alt="T" />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/facebook-white.svg" alt="F" />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/linkedin-white.svg" alt="LI" />
            </div>
         </div>
      </div>
   );
}

function InputForm({ setModal }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
   const [session, setSession] = useSession();

   async function handleSubmit(e) {
      setLoading(true);
      e.preventDefault();
      const res = await loginUser(email, password);
      if (!res) setError("Something went wrong. Try again later.");
      else if (!res.status) setError("Invalid email or password.");
      else {
         setError("");
         const userSession = await getUserSession();
         setSession(userSession);
         setModal();
      }
      setLoading(false);
   }

   return (
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
         <input
            type="email"
            placeholder="Email ID"
            required
            onChange={(e) => {
               if (error) setError("");
               setEmail(e.target.value);
            }}
            className={`w-full mb-20 rounded-md border-1 border-solid border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg focus:ring-0 focus:border-smalltext ${
               error ? "border-red" : "border-smalltext"
            }`}
         />
         <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
               if (error) setError("");
               setPassword(e.target.value);
            }}
            className={`w-full rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg focus:ring-0 focus:border-smalltext ${
               error ? "border-red" : "border-smalltext"
            }`}
         />
         <div className="mt-10 flex justify-between">
            <p className="text-smalltext text-sm text-left">
               New Member?{" "}
               <span
                  className="text-blue cursor-pointer"
                  onClick={() => setModal("signup")}
               >
                  Sign Up
               </span>
            </p>
            <p className="text-blue text-sm">Forgot Password?</p>
         </div>
         <button
            disabled={loading}
            type="submit"
            className={`text-white bg-blue ${
               loading ? "bg-gray" : "bg-blue"
            } font-medium py-[11px] px-[30px] rounded-sm mt-[40px] mb-[40px]`}
         >
            Login
         </button>

         <p className="text-red-500 text-sm text-center mb-[40px]">{error}</p>
      </form>
   );
}

function CloseButton({ setModal }) {
   return (
      <div
         className="cursor-pointer absolute z-[101] right-[80px] top-[80px]"
         onClick={() => setModal()}
      >
         <img src="icons/close.svg" alt="close" />
      </div>
   );
}