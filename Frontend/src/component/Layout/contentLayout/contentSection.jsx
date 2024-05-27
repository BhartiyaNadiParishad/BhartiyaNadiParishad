import { Box, Typography } from "@mui/material";

const ContentSection = ({ content, backgroundColor, textColor }) => {
	return (
		<Box sx={{ backgroundColor: backgroundColor, 
                    padding: backgroundColor? "20px" : "0px"
                }} 
                color={textColor} 
        >
			<Typography variant="h6" fontSize={"18px"} textAlign={"justify"} >
				{content}
			</Typography>
		</Box>
	);
};

export default ContentSection;
