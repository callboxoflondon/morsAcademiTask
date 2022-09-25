import React from "react";
import NotFoundImage from "../assets/404-illustration.svg";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="max-w-2xl m-auto">
            <div className="text-center px-4">
              <div className="inline-flex mb-8">
                <img
                  src={NotFoundImage}
                  width="300"
                  height="300"
                  alt="404 illustration"
                />
              </div>
              <div className="mb-8">
                Görünüşe göre olmayan bir sayfayı arıyorsun. Anasayfaya dönmek
                ister misin?
              </div>
              <Link
                to="/"
                className=" py-4 px-2 rounded-xl  bg-[#558287] hover:bg-[#88C5CC] text-white"
              >
                Anasayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
