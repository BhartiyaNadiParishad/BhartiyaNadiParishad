import React from "react";
import MainLayout from "../../Layout/mainLayout";
import bgImg from "../../../assets/bg/bgl-12.jpeg";
import headerImg from "../../../assets/header-image.jpg";
import { Box, Typography } from "@mui/material";
export default function Newsletter() {
	return (
		<>
			<MainLayout title={"Newsletter"} bgImg={bgImg} position={"center"}>
				<Box p={8} sx={{ backgroundColor: "#f2f2f2" }}>
					<img src={headerImg} />
					<Typography variant="h5" mt={6} textAlign={"justify"} color={"#264e79"}>
						BNP will release a quarterly mouthpiece 'Nadi Gatha' to
						collect information related to rivers and river related
						works taking place in the country and disseminate them
						to different sections of the society. Initially this
						mouthpiece will be in both English and Hindi languages.
						After this it will be published in other regional
						languages of the country also. This mouthpiece will also
						be published and will also be available through PDF.
						Four issues of this mouthpiece will be published in a
						year. A copy of the published mouthpiece will also be
						sent to all the river related organizations,
						institutions, river activists and concerned government
						departments of the country. Its PDF copy will also be
						sent to national and international organizations.
					</Typography>
				</Box>
			</MainLayout>
		</>
	);
}
