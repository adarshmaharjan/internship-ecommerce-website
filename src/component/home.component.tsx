import TextButton, { ButtonType } from "./common/text-button.component";

const HomeComponent = () => {
  return (
    <>
      <section className="flex flex-col items-center font-product-sans  text-white bg-banner-image mt-[-92px] h-screen">
        <h1 className="font-bold text-4xl  mb-4">All for your home</h1>

        <p className="text-2xl text-center max-w-full w-[584px] mb-5">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.Consequat
          dolor odio odio malesuada at condimentum adipiscing iaculis semper.`}
        </p>

        <TextButton buttonText="View More" buttonType={ButtonType.outlined} />
      </section>
    </>
  );
};

export default HomeComponent;
