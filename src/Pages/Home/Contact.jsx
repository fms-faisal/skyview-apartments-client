const Contact = () => {
  return (
    <div className="hero lg:min-h-[500px] lg:py-10 py-4  bg-white ">
      <div className="hero-content flex-col-reverse xl:flex-row">
        <img
          src="https://photos.zillowstatic.com/fp/846c40d6aaa347d8bc992b935ad9ee2b-cc_ft_960.jpg"
          className="min-w-[500px] min-h-[450px] rounded-lg shadow-2xl"
        />
        <div className="p-2">
          <h1 className="text-5xl font-bold">Why choose us?</h1>
          <p className="py-6 text-justify">
            Our apartments offer the ultimate in comfort and relaxation, with plush carpets, modern appliances, and spacious living areas that make
            you feel right at home. Additionally, our convenient location near major highways, public transportation, and local amenities makes it
            easy to get where you need to go. And, with a range of exceptional amenities such as a state-of-the-art fitness center and a sparkling
            swimming pool, you'll have everything you need to enhance your lifestyle and make the most of your living experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
