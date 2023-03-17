import { Footer } from "@/components/Footer";
import Productgrid from "@/components/Productgrid";
import { Component2 } from "@/pages/about/components/component2";
import React, { useEffect } from "react";
import { Component3 } from "./components/component3";
import Form from "./components/form";

export default function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation_triggering_class");
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    // Observe each element
    elements.forEach((element) => {
      observer.observe(element);
    });
    const elements2 = document.querySelectorAll(".scale_triggering_class");
    // Create an intersection observer
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("scale");
        } else {
          entry.target.classList.remove("scale");
        }
      });
    });
    elements2.forEach((element) => {
      observer2.observe(element);
    });
  }, []);
  return (
    <>
      {/* <Component2 />
      <Component3 /> */}
      <Form />
      {/* <Productgrid />
      <Footer /> */}
    </>
  );
}
