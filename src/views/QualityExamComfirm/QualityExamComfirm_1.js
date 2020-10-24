import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import classNames from "classnames";
import SectionHeader from "../../components/sections/partials/SectionHeader";
import Button from "../../components/elements/Button";

/* style */
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { AlertComponent } from "../../utils/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const sectionHeader = {
	title: "시험 수수료 조회 안내",
};

function priceFormatter(cell, row) {
	return new Intl.NumberFormat().format(cell);
}

function QualityExamConfirm_1(props) {
	const innerClasses = classNames(
		"news-inner section-inner",
		props.topDivider && "has-top-divider",
		props.bottomDivider && "has-bottom-divider",
	);

	const params = useParams();
	console.log(params);

	var char = {
		및: "/",
		샵: "#",
		퍼센트: "%",
	};

	// 시험품목명 이름
	const testItemTitle = params.AreaCate2.replace(
		/및|샵|퍼센트/gi,
		(m) => char[m],
	);

	const [products, setProducts] = useState([]); // 시험 수수료 조회 화면에 나타나는 기본 데이터
	const [selectedProduct, setSelectedProduct] = useState([]); // 추가될 항목에 나타나는 데이터
	const [defaultSelect, setDefaultSelect] = useState({ default: "" });
	const [originSelected, setOriginSelected] = useState({ selected: "" });
	const [selectedAllAdded, setSelectedAllAdded] = useState({ selected: "" }); // 추가될 항목 선택
	const [selectedAllRemoved, setSelectedAllRemoved] = useState({
		selected: "",
	}); // 삭제할 항목 선택

	// 체크된 항목 저장 state
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "http://kcm.kqc.kr/api/?act=detail&refseq=" + params.AreaSeq;
		fetch(proxyurl + url)
			.then((response) => response.json())
			.then((contents) => {
				const defaultSelected = [];
				const selectedNumber = [];
				const originItemsList = [];
				const itemsList = [];
				const defaultItem = []; // 시편제작료 등

				contents.slice(1).map((content, i) => {
					if (content[3] === "시편제작료") {
						defaultSelected.push(i + 1);
						defaultItem.push({
							id: i + 1,
							itemID: content[3],
							itemAmount: 1,
							itemPrice: parseInt(content[7].replace(/,/g, "")),
							itemStandard: content[4],
						});
					} else {
						selectedNumber.push(i + 1);
					}

					itemsList.push({
						id: i + 1,
						itemID: content[3],
						itemAmount: 1,
						itemPrice: parseInt(content[7].replace(/,/g, "")),
						itemStandard: content[4],
					});
					originItemsList.push({
						id: i + 1,
						itemID: content[3],
						itemAmount: 1,
						itemPrice: parseInt(content[7].replace(/,/g, "")),
						itemStandard: content[4],
					});
				});

				console.log(defaultItem);

				setSelectedAllAdded({ selected: selectedNumber });
				setDefaultSelect({ default: defaultSelected });
				setSelectedProduct(defaultItem);
				setOriginSelected({ selected: selectedNumber });

				// setItemList(originItemsList);
				setProduct(itemsList);
			})
			.catch(() =>
				console.log("Can’t access " + url + " response. Blocked by browser?"),
			);
	}, []);

	/* 시험 수수료 항목 */
	const defaultColumns = [
		{
			dataField: "itemID",
			text: "시험항목",
			editable: false,
		},
		{
			dataField: "itemPrice",
			text: "항목수수료 (원)",
			formatter: priceFormatter,
			editable: false,
		},
		{
			dataField: "itemStandard",
			text: "규격",
			editable: false,
		},
	];

	/* 선택한 품목 항목 */
	const selectedColumns = [
		{
			dataField: "itemID",
			text: "시험항목",
			editable: false,
		},
		{
			dataField: "itemPrice",
			text: "항목수수료",
			formatter: priceFormatter,
			editable: false,
		},
		{
			dataField: "itemStandard",
			text: "규격",
			editable: false,
		},
	];

	/* 이미 선택한 품목(데이터)인지 확인 */
	const existedItem = (added) => {
		for (let i = 0; i < added.length; i++) {
			for (let j = 0; j < selectedAllAdded.selected.length; j++) {
				if (added[i].id === selectedAllAdded.selected[j]) {
					return true;
				}
			}
		}
	};

	const handleAddedItem = () => {
		// setSelectedAllAdded({ selected: [] });

		const addedItem = [...selectedProduct];
		// console.log(addedItem);

		if (selectedAllAdded.selected.length === 0) {
			alert("선택된 항목이 없습니다.");
		} else if (addedItem.length !== 0 && existedItem(addedItem) === true) {
			alert("이미 추가된 항목입니다.");
		} else {
			selectedAllAdded.selected
				.sort()
				.map((i) => addedItem.push(product[i - 1]));
			setSelectedProduct(addedItem);
		}
	};

	const handleDeletedItem = () => {
		const deletedItem = [...selectedProduct];

		if (selectedAllRemoved.selected.length === 0) {
			alert("선택된 항목이 없습니다.");
		} else if (selectedProduct.length === selectedAllRemoved.selected.length) {
			setSelectedProduct("");
		} else {
			for (let i = 0; i < deletedItem.length; i++) {
				for (let j = 0; j < selectedAllRemoved.selected.length; j++) {
					if (deletedItem[i].id === selectedAllRemoved.selected[j]) {
						deletedItem.splice(i, 1);
					}
				}
			}
			setSelectedProduct(deletedItem);
		}
	};

	function handleOnSelectAdded(row, isSelect, rowIndex) {
		if (isSelect) {
			setSelectedAllAdded({ selected: [...selectedAllAdded.selected, row.id] });
		} else {
			setSelectedAllAdded({
				selected: selectedAllAdded.selected.filter((x) => x !== row.id),
			});
		}
	}

	function handleOnSelectAllAdded(isSelect, rows) {
		let ids;

		if (isSelect) {
			ids = rows.map((r) => r.id);
		} else {
			ids = [];
		}
		setSelectedAllAdded({ selected: ids });
	}

	function handleOnSelectDeleted(row, isSelect, rowIndex) {
		if (isSelect) {
			setSelectedAllRemoved({
				selected: [...selectedAllRemoved.selected, row.id],
			});
		} else {
			setSelectedAllRemoved({
				selected: selectedAllRemoved.selected.filter((x) => x !== row.id),
			});
		}
	}

	function handleOnSelectAllDeleted(isSelect, rows) {
		let ids;

		if (isSelect) {
			ids = rows.map((r) => r.id);
		} else {
			ids = [];
		}
		setSelectedAllRemoved({ selected: ids });
	}

	const history = useHistory();
	const handleSubmit = () => {
		const handleData = [];
		selectedProduct.map((pro) => {
			handleData.push({
				itemID: pro.itemID,
				itemAmount: pro.itemAmount,
				itemPrice: pro.itemPrice,
			});
		});

		if (handleData.length !== 0) {
			history.push("/qualityexam_1_2", {
				type: params.SelectedType,
				sampleTitle: params.AreaId,
				sampleCate2: testItemTitle,
				selectedItems: handleData,
			});
		} else {
			alert("선택된 항목이 없습니다. 접수하고자 하는 항목을 선택해주세요.");
		}
	};

	/* 시험 수수료 항목 */
	const selectRow = {
		mode: "checkbox",
		selected: selectedAllAdded.selected,
		clickToSelect: true,
		nonSelectable: defaultSelect.default,
		onSelect: handleOnSelectAdded,
		onSelectAll: handleOnSelectAllAdded,
	};

	/* 선택한 품목 항목 */
	const selectRow_ = {
		mode: "checkbox",
		clickToSelect: true,
		nonSelectable: defaultSelect.default,
		onSelect: handleOnSelectDeleted,
		onSelectAll: handleOnSelectAllDeleted,
	};

	return (
		<section className="section">
			<div className={innerClasses}>
				<div className="container">
					<SectionHeader
						tag="h3"
						data={sectionHeader}
						className="center-content"
					></SectionHeader>
					<div className="p-12 has-top-divider">
						<p className="text-m ta-c pt-32 pb-16">
							시험분류명: <strong>{params.AreaId}</strong>
							<br />
							시험품목명: {testItemTitle}
						</p>
						<div className="container_line ">
							<div className="container_table">
								<div className="p-16 m-32">
									<BootstrapTable
										keyField="id"
										data={product}
										columns={defaultColumns}
										selectRow={selectRow}
									/>
								</div>
							</div>
						</div>
						<div className="container_table m-20">
							<div className="ta-c">
								<Button
									className="ta-c"
									color="primary"
									onClick={handleAddedItem}
								>
									추가
								</Button>
							</div>
						</div>
						<br />
						<p className="h4 h4-mobile subtitle">추가 품목 및 항목 정보</p>
						<div className="container_line">
							<div className="container_table m-16">
								{selectedProduct.length !== 0 ? (
									<div className="p-16 m-32">
										<BootstrapTable
											keyField="id"
											selectRow={selectRow_}
											columns={selectedColumns}
											data={selectedProduct}
										/>
									</div>
								) : (
									<AlertComponent>
										<FontAwesomeIcon
											icon={faExclamationCircle}
										></FontAwesomeIcon>{" "}
										추가된 항목이 없습니다.
									</AlertComponent>
								)}
							</div>
						</div>
						<div className="container_table m-20">
							<div className="ta-r">
								<Button
									className="ta-r"
									color="primary"
									onClick={handleDeletedItem}
								>
									삭제
								</Button>
							</div>
						</div>
						<br />
						<div className="ta-c m-16">
							<Button className="m-16" color="primary" onClick={handleSubmit}>
								다음
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default QualityExamConfirm_1;
