// 수수료조회 페이지(2) => 아이템 리스트 가져오기

import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "react-data-grid/dist/react-data-grid.css";

import CircularProgress from "@material-ui/core/CircularProgress";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const ItemList = (parentCallback) => {
	let headers = new Headers();
	// localStorage.clear();

	headers.append("Content-Type", "application/json");
	headers.append("Accept", "application/json");
	headers.append("Origin", "http://localhost:3000");

	// const classes = useStyles();
	const [clickItem, setClickItem] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setClickItem(event.target.value);
		parentCallback(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const [DBContent, setDBContent] = useState([]);
	const [clickedID, setClickedID] = useState(null);

	useEffect(() => {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "http://kcm.kqc.kr/api/?act=item";
		fetch(proxyurl + url)
			.then((response) => response.json())
			.then((contents) => {
				setDBContent(contents);
			})
			.catch(() =>
				console.log("Can’t access " + url + " response. Blocked by browser?"),
			);
	}, []);

	const data = [];
	DBContent.slice(1).map((db) => {
		data.push(db.cate1);
	});

	const idList = data.sort().filter(function (elem, index, self) {
		return index === self.indexOf(elem);
	});

	const idListClass = idList.map((id, i) => (
		<MenuItem value={id}>{id}</MenuItem>
	));

	return DBContent.length === 0 ? (
		<div
			className="ta-c"
			style={{
				margin: "auto",
			}}
		>
			{" "}
			<CircularProgress />
		</div>
	) : (
		<div>
			<FormControl style={{ width: "30%" }}>
				<InputLabel id="demo-controlled-open-select-label">
					시험분류명
				</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={clickItem}
					onChange={handleChange}
				>
					{idListClass}
				</Select>
			</FormControl>
		</div>
	);
};

function ConfirmItem01({ parentCallback }) {
	return <React.Fragment>{ItemList(parentCallback)}</React.Fragment>;
}
export default ConfirmItem01;
