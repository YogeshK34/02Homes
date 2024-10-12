"use client";
import { title, subtitle } from "@/components/primitives";
import ProfileComponent from "@/components/profile";

export default function AboutPage() {
  return (
    <div>
      
      <h1 className={title()}>About Us</h1>
      <div className={subtitle({ class: "mt-4" })}>
        Welcome to 02Homes, your one-stop destination for all things green and beautiful!
        We are passionate about bringing nature closer to you by offering a wide variety of indoor and outdoor plants that fit every space,
        style, and occasion. Whether you’re a seasoned gardener or just beginning your journey into plant care, we’ve got something for everyone.
      </div><br></br>
      <div className={subtitle({ class: "mt-4" })}>
        From low-maintenance succulents and air-purifying indoor plants to lush outdoor shrubs and flowering varieties, we cater to all your gardening needs.
        Our team of plant enthusiasts is here to guide you with tips, advice, and support to help you grow your green space effortlessly.</div><br></br>
      <br></br>

      <div className={subtitle({ class: "mt-4" })}>
        Follow Me
      </div>
      <div className="flex justify-center">
        <ProfileComponent/>
      </div>
    </div>
  );
}