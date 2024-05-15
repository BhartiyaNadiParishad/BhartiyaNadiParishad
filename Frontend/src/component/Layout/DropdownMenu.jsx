import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, styled } from "@mui/material";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		backgroundColor: "#051a36",
		borderRadius: 0,
		marginTop: theme.spacing(1.5),
		minWidth: 180,
		color: "white",
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: 0,
		},
		"& .MuiMenuItem-root": {
			padding: "10px",
			borderTop: "1px solid white",
			"&:hover": {
				backgroundColor: "#daf0fd",
				color: "#051a36",
			},
			// '& .MuiSvgIcon-root': {
			//   fontSize: 18,
			//   color: theme.palette.text.secondary,
			//   marginRight: theme.spacing(1.5),
			// },
		},
	},
}));

const DropdownMenu = ({
	id,
	menuName,
	buttonLabel,
	menuItems,
	anchorEl,
	handleClick,
	handleClose,
	open,
}) => {
	return (
		<div>
			<Button
				id={`${menuName}-button`}
				aria-controls={open ? `${menuName}-menu` : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={(event) => handleClick(menuName, event)}
				endIcon={<KeyboardArrowDownIcon />}
				disableElevation
				sx={{
					color: "white",
					fontSize: 15,
					fontWeight: "bold",
					borderRadius: 10,
					padding: "7px 15px 6px 15px",
					"&:hover": {
						backgroundColor: "#daf0fd",
						color: "#051a36",
					},
				}}
			>
				{buttonLabel}
			</Button>
			<StyledMenu
				id={`${menuName}-menu`}
				anchorEl={anchorEl}
				open={open}
				onClose={() => handleClose(menuName)}
				MenuListProps={{
					"aria-labelledby": `${menuName}-button`,
				}}
			>
				{menuItems.map((item, index) => (
					<Link key={index} to={item.path}>
						<MenuItem onClick={() => handleClose(menuName)}>
							{item.label}
						</MenuItem>
					</Link>
				))}
			</StyledMenu>
		</div>
	);
};

export default DropdownMenu;
