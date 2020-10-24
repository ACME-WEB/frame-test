// 수수료 조회 페이지 (1) => 품목리스트

import React, { useState } from "react";

import ConfirmItem from "../components/sections/ConfirmItem";
import FeePageConfirmResult from "../components/sections/FeepageConfirmResult";

/* style */
import Button from "../components/elements/Button";
import classNames from "classnames";
import SectionHeader from "../components/sections/partials/SectionHeader";
// import "../assets/scss/additional/additional_style.scss";

import { AlertComponent } from "../utils/Styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const sectionHeader = {
	title: "시험 수수료 조회 안내",
};

function FeePage(props) {
	const [areaId, setAreaId] = useState("");

	const parentCallback = (areaId) => {
		setAreaId(areaId);
	};

	const innerClasses = classNames(
		"news-inner section-inner",
		props.topDivider && "has-top-divider",
		props.bottomDivider && "has-bottom-divider",
	);

	return (
		<section className="section">
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						tag="h3"
						data={sectionHeader}
						className="center-content"
					></SectionHeader>
					<div className="pt-12 has-top-divider">
						<div className="h4 h4-mobile subtitle">품목별 조회</div>
						<p className="text-xxs ta-r subtitle pl-16">
							* 품목별 선택하여 조회할 수 있습니다
						</p>
						<div className="container" style={{ overflow: "hidden" }}>
							<ConfirmItem parentCallback={parentCallback} />
						</div>
					</div>
					<div className="h4 h4-mobile subtitle">조회 결과</div>
					<div className="container container_line confirmResult">
						<div className="text-xxs ta-r p-16">
							시험품목명을 더블클릭하면 다음 화면으로 넘어갑니다.
						</div>
						{areaId ? (
							<FeePageConfirmResult
								text={"품질 시험 조회"}
								areaId={areaId}
							></FeePageConfirmResult>
						) : (
							<AlertComponent>
								<FontAwesomeIcon icon={faExclamationCircle} /> 상단의 품목별
								조회 항목에서 선택해주세요
							</AlertComponent>
						)}
					</div>
					<div className="ta-c m-16">
						<Button
							className="m-16"
							tag="a"
							color="primary"
							onClick={() => setAreaId("")}
						>
							초기화
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeePage;
