// 수수료조회 페이지 (3) => 시료명

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* style */
import ReactDataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";

function FeePageConfirmResult({ areaId }) {
	const columns = [
		{ key: "field", name: "시험분류명", width: 150 },
		{ key: "title", name: "시험품목명" },
	];

	const [DBContent, setDBContent] = useState([]);
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

	const groupList = (group) => {
		const dataList = [];
		DBContent.map((db) => {
			if (db.cate1 === areaId) {
				dataList.push({
					field: areaId,
					title: (
						<Link to={`/수수료조회/${areaId}/${db.cate2}/${db.seq}`}>
							{db.cate2}
						</Link>
					),
				});
			}
		});

		return dataList;
	};

	return (
		<ReactDataGrid
			columns={columns}
			rows={groupList(DBContent)}
		></ReactDataGrid>
	);
}
export default FeePageConfirmResult;
