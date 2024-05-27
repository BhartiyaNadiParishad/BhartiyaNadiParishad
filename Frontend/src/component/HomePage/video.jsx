import { Box, Grid } from "@mui/material";

export default function Video() {
	return (
		<>
			<Grid container spacing={5} p={5} justifyContent={"center"}>
				<Grid item xs={12} md={5}>
					<Box
						p={2}
						border={"0.5px solid white"}
						borderRadius={"10px"}
						boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
					>
						<video controls>
							<source
								src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</Box>
				</Grid>
				<Grid item xs={12} md={5}>
					<Box
						p={2}
						border={"0.5px solid white"}
						borderRadius={"10px"}
						boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
					>
						<video controls>
							<source
								src="https://backend.bhartiyanadiparishad.org/assets/img/all%20part%20river%20hindi%20render.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}
