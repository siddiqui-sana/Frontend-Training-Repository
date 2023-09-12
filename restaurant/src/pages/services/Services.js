import React from "react";
import { ServiceList } from "../../data/servicedata";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import "../../styles/service.css";

const Services = () => {
  return (
    <div className="service">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {ServiceList.map((service) => (
          <Card sx={{ maxWidth: "370px", display: "flex", m: 3 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {service.img}
                  <br />
                  {service.name}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Services;
