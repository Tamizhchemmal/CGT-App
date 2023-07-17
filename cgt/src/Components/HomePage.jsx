import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import IconButton from "@mui/material/IconButton";

import "../Css/HomePage.css";
import NavBar from "./NavBar";


export default function HomePage() {
 
  return (
    <>
      <div className="home-page">
        <NavBar />
        <div className="home-card">
          <div className="home-crd1">
            <div className="home-count1">
              <h2>500</h2>
              <p>Total No. of Students</p>
            </div>
            <div className="home-icon1">
              <SupervisorAccountIcon className="icon1" />
            </div>
          </div>
          <div className="home-crd2">
            <div className="home-count2">
              <h2>200</h2>
              <p>Total No. of Referrals</p>
            </div>
            <div className="home-icon2">
              <BrowserUpdatedIcon className="icon2" />
            </div>
          </div>
          <div className="home-crd3">
            <div className="home-count3">
              <h2>400</h2>
              <p>No. of Students Placed</p>
            </div>
            <div className="home-icon3">
              <WorkspacePremiumIcon className="icon3" />
            </div>
          </div>
        </div>
        <div className="home-row2">
          <div className="home-search">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
              className="home-search"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
                
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <div className="batch-btn">
            <Button variant="contained" endIcon={<ControlPointIcon />}>
              Batch
            </Button>
          </div>
        </div>
        
      </div>
    </>
  );
}
