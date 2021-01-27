import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { lightGreen } from "@material-ui/core/colors";
import "./NavDrawer.css";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

export default function NavDrawer(props) {
	const { items, registerObserver } = props;

	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const gotoUrl = (ref) => {
		const currRef = ref && ref.current;
		if (currRef) {
			registerObserver(currRef);
			currRef.scrollIntoView(true);
			// const ele = document.getElementById('');

			const offsetY = currRef.offsetTop;
			window.scrollTo(0, offsetY - 50);

			// console.log({ offsetY });
		}

		// console.log({ ref, current: currRef });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{items.map((item, index) => (
					<ListItem
						button
						key={item.text}
						onClick={(e) => gotoUrl(item.ref)}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</div>
	);
	const anchor = "left";

	return (
		<div className='NavDrawer_container'>
			<Button
				className='NavDrawer_button'
				onClick={toggleDrawer(anchor, true)}
			>
				<MenuRoundedIcon
					style={{ color: lightGreen[500] }}
					fontSize='large'
				/>
			</Button>
			<Drawer
				anchor={anchor}
				open={state[anchor]}
				onClose={toggleDrawer(anchor, false)}
			>
				{list(anchor)}
			</Drawer>
		</div>
	);
}
