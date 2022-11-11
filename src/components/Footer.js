import React from "react";
import {
  CDBFooter,
  CDBBox,
} from "cdbreact";

export const Footer = () => {
  return (
    <CDBFooter className="footer">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a
            href="https://github.com/grizz12"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center p-0 text-dark"
          >
            <span className="ml-4 h5 mb-0 font-weight-bold">Github</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">style and code ♥️ rakarmp</small>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
