import React from "react";
import Card from "../Card";
import "./StatsContainer.css";
import StatsCard from "../StatsCard/StatsCard";
import Svg from "../../assets/svg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BarGraph from "../BarGraph/BarGraph";

export default function StatsContainer() {
  return (
    <Card sx={{ marginTop: "20px" }}>
      <Grid2 container>
        <Grid2 item xs={6}>
          <StatsCard
            statColor="blue"
            statName="Time"
            statValue="13hr"
            StatIcon={Svg.ClockIcon}
          />
          <StatsCard
            statColor="purple"
            statName="Meetings"
            statValue="119"
            StatIcon={Svg.CalenderIcon}
          />
        </Grid2>
        <Grid2 item xs={6}>
          <StatsCard
            statColor="green"
            statName="Attended"
            statValue="188"
            StatIcon={Svg.PeopleIcon}
          />
          <StatsCard
            statColor="orange"
            statName="Rejected"
            statValue="44"
            StatIcon={Svg.MessageRejectedIcon}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <BarGraph />
        </Grid2>
      </Grid2>
    </Card>
  );
}
