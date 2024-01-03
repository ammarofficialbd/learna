import React from "react";
import { Rating, Typography } from "@material-tailwind/react";
import './rating.css'
 
export function RatingWithText() {
  const [rated, setRated] = React.useState(4);
 
  return (
    <div className="flex items-center gap-1 font-bold text-blue-gray-500 font-size-24">
      {rated}.7
      <Rating value={4} readonly onChange={(value) => setRated(value)} className="" />
      <Typography color="blue-gray" className="font-medium color-white">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}