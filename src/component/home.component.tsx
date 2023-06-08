import TextButton, { ButtonType } from "./common/text-button.component";

const HomeComponent = () => {
  return (
    <>
      <section>
        <h1>All for your home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          dolor odio odio malesuada at condimentum adipiscing iaculis semper.
        </p>
        <TextButton buttonText="View More" buttonType={ButtonType.outlined} />
      </section>
    </>
  );
};

export default HomeComponent;
