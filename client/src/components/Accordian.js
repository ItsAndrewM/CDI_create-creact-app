import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import parse from "html-react-parser";

const Accordian = ({ accordianData }) => {
  return (
    <Wrapper>
      {accordianData.map((val, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" align="left">
                {val.header}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{parse(val.details)}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  & ul {
    list-style: inside;
  }
`;

export default Accordian;
