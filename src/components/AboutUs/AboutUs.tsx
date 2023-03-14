import React from "react";
import './AboutUs.css';

import arcticBooks from "./Images/arctic-books.png"

interface AboutUsProps {
   companyName: string
}

const AboutUs: React.FC<AboutUsProps> = ({companyName}) => {
  return (
  <main>
    <section className="aboutMe">
       <img src={arcticBooks} alt="company" /> 
       
       <div className="details">
       <h2>Welcome to {companyName}</h2>
          <p>At {companyName}, we are passionate about reading and believe that books have the power to change lives. Our mission is to provide our customers with a curated selection of the best books in a variety of genres, all at affordable prices.
          </p>
          <br/>
          <p>We pride ourselves on offering a personalized shopping experience for each and every customer. Our team is made up of avid readers who are always on the lookout for the latest and greatest books to add to our collection. Whether you're looking for a classic novel, a gripping thriller, or the latest bestseller, we have something for everyone.</p>
       </div> 
    </section> 
 </main>
 )};

export default AboutUs;
