import React from "react";
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	styled,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Logo from "../assets/logo.svg";

const DotIcon = styled(FiberManualRecordIcon)(() => ({
	marginRight: 5,
	fontSize: 8,
}));

const CustomTypography = styled(Typography)(() => ({
	color: "whitesmoke",
	fontSize: 16,
	marginBottom: 10,
}));

export default function Footer() {
	return (
		<Box backgroundColor="#05316b" px={4}>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				columnGap={4}
        py={3}
			>
				<a
					target="_blank"
					href="https://www.facebook.com/profile.php?id=61550862124894"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0 0 48 48"
					>
						<linearGradient
							id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
							x1="9.993"
							x2="40.615"
							y1="9.993"
							y2="40.615"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#2aa4f4"></stop>
							<stop offset="1" stop-color="#007ad9"></stop>
						</linearGradient>
						<path
							fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
							d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
						></path>
						<path
							fill="#fff"
							d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
						></path>
					</svg>
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/indianrivercouncil"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0 0 48 48"
					>
						<radialGradient
							id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
							cx="19.38"
							cy="42.035"
							r="44.899"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#fd5"></stop>
							<stop offset=".328" stop-color="#ff543f"></stop>
							<stop offset=".348" stop-color="#fc5245"></stop>
							<stop offset=".504" stop-color="#e64771"></stop>
							<stop offset=".643" stop-color="#d53e91"></stop>
							<stop offset=".761" stop-color="#cc39a4"></stop>
							<stop offset=".841" stop-color="#c837ab"></stop>
						</radialGradient>
						<path
							fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
							d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
						></path>
						<radialGradient
							id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
							cx="11.786"
							cy="5.54"
							r="29.813"
							gradientTransform="matrix(1 0 0 .6663 0 1.849)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#4168c9"></stop>
							<stop
								offset=".999"
								stop-color="#4168c9"
								stop-opacity="0"
							></stop>
						</radialGradient>
						<path
							fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
							d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
						></path>
						<path
							fill="#fff"
							d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
						></path>
						<circle
							cx="31.5"
							cy="16.5"
							r="1.5"
							fill="#fff"
						></circle>
						<path
							fill="#fff"
							d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
						></path>
					</svg>
				</a>
				<a target="_blank" href="https://twitter.com/Nadi_Parishad">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0 0 48 48"
					>
						<path
							fill="#03A9F4"
							d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
						></path>
					</svg>
				</a>
				<a
					target="_blank"
					href="https://www.youtube.com/channel/UCbVfWW1Cnyq51JQWL0ogcfg"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0 0 48 48"
					>
						<path
							fill="#FF3D00"
							d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
						></path>
						<path fill="#FFF" d="M20 31L20 17 32 24z"></path>
					</svg>
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/bhartiya-nadi-parishad-5257912b2/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0 0 48 48"
					>
						<path
							fill="#0078d4"
							d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
						></path>
						<path
							d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
							opacity=".05"
						></path>
						<path
							d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
							opacity=".07"
						></path>
						<path
							fill="#fff"
							d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
						></path>
					</svg>
				</a>
			</Box>
			<Grid
				container
				spacing={4}
				justifyContent={"space-between"}
				sx={{
					color: "whitesmoke",
					borderBottom: "1px solid #1d4e6e",
				}}
			>
				<Grid
					item
					xs={12}
					md={2}
					display="flex"
					flexDirection="column"
					alignItems={"center"}
					rowGap={0}
				>
					<img src={Logo} height="auto" width="235px" alt="Logo" />
				</Grid>
				<Grid
					item
					xs="12"
					md={2.4}
					display="flex"
					flexDirection="column"
					rowGap={1}
				>
					<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
						Address
					</Typography>
					<Box>
						<CustomTypography>
							1st Floor, Samrat Shopping Mall Garh Road Meerut,
							<br />
							Uttar Pradesh, India
							<br />
							Pin: 250001
							<br />
							Phone: 0121-3596749 Email:
							info@bhartiyanadiparishad.org
						</CustomTypography>
					</Box>
				</Grid>
				<Grid
					item
					xs="12"
					md={1.5}
					display="flex"
					flexDirection="column"
					rowGap={1}
				>
					<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
						Useful Links
					</Typography>
					<Box>
						<CustomTypography>
							<DotIcon />
							Home
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							About us
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							Programmes
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							Terms of service
						</CustomTypography>
					</Box>
				</Grid>
				<Grid
					item
					xs="12"
					md={2.8}
					display="flex"
					flexDirection="column"
					rowGap={1}
				>
					<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
						Rejuvenation Blueprint
					</Typography>
					<Box>
						<CustomTypography>
							<DotIcon />
							Raman River Rejuvenation Model
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							Uttar Pradesh River Policy Draft 2024
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							Ponds Rejuvenation Model
						</CustomTypography>
					</Box>
				</Grid>
				<Grid
					item
					xs="12"
					md={3}
					display="flex"
					flexDirection="column"
					rowGap={1}
				>
					<Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
						Rules, Treaty , Acts & Guidelines
					</Typography>
					<Box>
						<CustomTypography>
							<DotIcon />
							River and related orders
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							River Policy of Uttar Pradesh
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							Indian Water Policy
						</CustomTypography>
						<CustomTypography>
							<DotIcon />
							Uttar Pradesh Ground Water Bill
						</CustomTypography>
					</Box>
				</Grid>
			</Grid>
			<Grid py={3} container justifyContent={"center"}>
				<Typography
					xs={12}
					sx={{
						fontSize: "16px",
						color: "whitesmoke",
						textAlign: "center",
					}}
				>
					© Copyright Bhartiya Nadi Parishad. All Rights Reserved
				</Typography>
			</Grid>
		</Box>
	);
}
