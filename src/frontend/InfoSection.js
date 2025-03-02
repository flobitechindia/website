import React, { useEffect } from "react";
import "./InfoSection.css";

const InfoSection = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,  // Trigger animation at 40% visibility
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting); // Log whether the element is intersecting
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");  // Trigger animation
          observer.unobserve(entry.target);  // Stop observing after animation
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe all the info-boxes
    const animatedElements = document.querySelectorAll(".info-box");
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="info-section">
      {/* Left Column */}
      <div className="left-column">
        <div className="info-box">
          <h2>Empower Your Business with Data</h2>
          <p>
            At Flobi, our mission is to empower businesses to harness the full potential of their data. We are dedicated to delivering seamless and efficient solutions that transform data into actionable insights, driving strategic growth and innovation. By enabling businesses to leverage data effectively, we help them achieve new heights of success and stay ahead in a data-driven world.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="info-box zigzag-box one">
          <h2>Cloud-Based Analytics Transformation</h2>
          <p>
            Revolutionizing data management, cloud-based analytics transformation enables businesses to access, analyze, and scale data effortlessly. By leveraging the cloud’s flexibility and power, organizations gain real-time insights, enhance decision-making, and drive innovation while reducing costs and complexity.
          </p>
          <div className="line"></div>
        </div>
        <div className="info-box zigzag-box two">
          <h2>Data Engineering Expertise</h2>
          <p>
            Mastering data engineering with Azure Cloud empowers businesses to build robust data pipelines, ensure seamless data flow, and maintain data integrity. By leveraging Azure's powerful tools, organizations can efficiently process, store, and analyze massive data volumes, driving actionable insights and strategic growth.
          </p>
        </div>
        <div className="info-box zigzag-box three">
          <h2>Adaptable Data Solutions</h2>
          <p>
            We specialize in delivering adaptable and scalable data solutions tailored to meet the unique requirements of your business. From data accelerators that optimize processing speed to solution designing and warehousing that ensure efficient storage and retrieval, we empower you to stay ahead of the curve with our versatile data solutions.
          </p>
        </div>
        <div className="info-box zigzag-box four">
          <h2>Enhanced Customer Experience</h2>
          <p>
            We prioritize delivering exceptional customer experiences through data-driven insights. Our tailored solutions help businesses understand customer needs, personalize interactions, and enhance engagement. By seamlessly integrating advanced analytics, we empower companies to build loyalty and satisfaction, ensuring a rewarding experience at every touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
