import styled from "styled-components";

const ProductDescr = ({ shortDescription }) => {
  let desc = "";
  return shortDescription.map((description, index) => {
    if (description.includes("&#8242;") || description.includes("Sq")) {
      desc = description.replace("&#8242;", "'");
      if (index !== 0) {
        return (
          <P key={index}>
            <strong>{desc}</strong>
          </P>
        );
      } else {
        return <P key={index}>{desc}</P>;
      }
    } else if (description.includes("&#8243;")) {
      desc = description.replace("&#8243;", "''");

      if (index !== 0) {
        return (
          <P key={index}>
            <strong>{desc}</strong>
          </P>
        );
      } else {
        return <P key={index}>{desc}</P>;
      }
    } else if (description.includes("#")) {
      return (
        <P key={index}>
          <strong>{description}</strong>
        </P>
      );
    } else {
      return <P key={index}>{description}</P>;
    }
  });
  // return (
  //   <div
  //     className="flex flex-col gap-2 text-cdiBlue text-sm w-full"
  //     dangerouslySetInnerHTML={{ __html: shortDescription }}
  //   />
  // );
};

const P = styled.p`
  text-align: left;
  width: 100%;
  color: var(--accent-text-color);
`;

export default ProductDescr;
