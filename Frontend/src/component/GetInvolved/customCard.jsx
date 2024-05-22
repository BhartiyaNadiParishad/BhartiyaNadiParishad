import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function CustomCard(props) {
	return (
		<Card>
			<CardActionArea>
				<img src={props.image} style={{ width: "100%" , height: "300px", objectFit: "cover"}} />
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						textAlign={"center"}
					>
						{props.title}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{props.content}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{display: "flex", justifyContent: "center"}}>
				<Link to={props.link}>
					<Button size="small" color="primary">
						{props.button}
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
