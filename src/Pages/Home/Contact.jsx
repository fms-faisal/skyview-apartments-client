import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="hero min-h-[500px] py-10 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN30pijhcC2zKHYVWTihfiu9ZijHvhH2JCig&s" className="min-w-[600px] min-h-[450px] rounded-lg shadow-2xl" />
    <div className='p-4'>
      <h1 className="text-5xl font-bold">Why choose us?</h1>
      <p className="py-6">Our apartments offer the ultimate in comfort and relaxation, with plush carpets, modern appliances, and spacious living areas that make you feel right at home. Additionally, our convenient location near major highways, public transportation, and local amenities makes it easy to get where you need to go. And, with a range of exceptional amenities such as a state-of-the-art fitness center and a sparkling swimming pool, you'll have everything you need to enhance your lifestyle and make the most of your living experience.</p>
      
    </div>
  </div>
</div>
  );
};

export default Contact;