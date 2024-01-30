import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import styled from "styled-components";

const ProductDetails = ({ arr }) => {
  const [value, setValue] = useState(arr[0].name);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <TabList onChange={handleChange} aria-label="basic tabs example">
              {arr &&
                arr.map((tab, index) => {
                  return (
                    <Tab
                      label={tab.name}
                      key={index}
                      value={tab.name}
                      sx={{
                        backgroundColor: "#f2f2f2",
                        boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
                      }}
                    />
                  );
                })}
            </TabList>
            {arr &&
              arr.map((tab, index) => {
                return (
                  <TabPanel
                    value={tab.name}
                    key={index}
                    sx={{
                      width: "100%",
                      backgroundColor: "#f2f2f2",
                      boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
                    }}
                  >
                    {tab.name === "additional information"
                      ? tab.content.map((val, index) => {
                          if (val.options) {
                            return (
                              <div key={index}>
                                <span>
                                  <strong>{val.name}</strong>
                                </span>
                                :{" "}
                                <span>
                                  {val.options.toString().replaceAll(",", ", ")}
                                </span>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  flexDirection: "column",
                                  gap: "10px",
                                }}
                                key={index}
                              >
                                {val.map((ele, index) => {
                                  return (
                                    ele.id === 0 && (
                                      <div
                                        key={index}
                                        style={{ width: "100%" }}
                                      >
                                        <span style={{ lineHeight: "1.5em" }}>
                                          <strong>{ele.name}</strong>
                                        </span>
                                        :{" "}
                                        <span style={{ lineHeight: "1.5em" }}>
                                          {ele.options
                                            .toString()
                                            .replaceAll(",", ", ")}
                                        </span>
                                      </div>
                                    )
                                  );
                                })}
                              </div>
                            );
                          }
                        })
                      : tab.content.map((val, index) => {
                          return (
                            <div key={index}>
                              <span style={{ lineHeight: "1.5em" }}>{val}</span>
                            </div>
                          );
                        })}
                  </TabPanel>
                );
              })}
          </Box>
        </TabContext>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 50%;
`;
export default ProductDetails;
