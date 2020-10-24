import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import Image from "../elements/Image";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileInvoice,
	faSearchDollar,
	faUserCheck,
	faVial,
	faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const BackGround = styled.div`
	background: #f5f5f5;
`;
const FlexBox = styled.ul`
	text-align: center;
`;

const HoverButton = styled.div`
	background-color: black;
	font-size: 80%;

	opacity: 0;
	color: white;
	//overlay
	position: absolute;
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 80px 0;
`;

const Wrapper = styled.li`
	background: #ffffff;
	border: 1px solid #eaeaea;

	width: 280px;
	height: 280px;

	margin: 40px;
	line-style: none;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

	display: inline-flex;
	//overlay
	position: relative;

	&:hover ${HoverButton} {
		border: 1px solid #222a9f;
		opacity: 0.9;
	}
`;

const SpanText = styled.span`
	color: #222a9f;
`;

const AButton = styled.a`
	text-align: center;
	font-size: 70%;
	margin: 75px auto;

	&:link {
		text-decoration: none !important;
	}
`;

const SButton = styled.a`
	text-align: center;
	font-size: 70%;
	padding: 3%;
	margin: 13px auto;
	width: 80px;
	height: 40px;
	border-radius: 25px;
	background-color: #fdff00;
	display: block;

	&:link {
		text-decoration: none !important;
	}
`;

const Text = styled.p`
	text-align: center;
	font-size: 200%;
	margin: 3%;

	@media only screen and (max-width: 600px) {
		font-size: 150%;
	}
`;
const Icon = styled.div`
	text-align: center;
	display: block;
	font-size: 4.5em;
	color: #222a9f;
	text-decoration: none;
`;

const IconText = styled.div`
	display: block;
	color: #3f3844;
	padding-top: 6%;
	font-size: 190%;
	text-decoration: none;
`;

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

class HeroSplit extends React.Component {
	render() {
		const {
			className,
			topOuterDivider,
			bottomOuterDivider,
			topDivider,
			bottomDivider,
			hasBgColor,
			invertColor,
			invertMobile,
			invertDesktop,
			alignTop,
			imageFill,
			...props
		} = this.props;

		const outerClasses = classNames(
			"hero section",
			topOuterDivider && "has-top-divider",
			bottomOuterDivider && "has-bottom-divider",
			hasBgColor && "has-bg-color",
			invertColor && "invert-color",
			className,
		);

		return (
			<section {...props} className={outerClasses}>
				<BackGround>
					<Image
						className="image-larger"
						src={require("../../assets/images/skyscraper_desktop_.jpg")}
						width={200}
						height={10}
					/>

					<div className="reveal-from-bottom" data-reveal-delay="200">
						<Text>
							<SpanText>
								<strong>건설 자재의 품질</strong>
							</SpanText>
							이{" "}
							<SpanText>
								<strong>건축물의 가치</strong>
							</SpanText>
							를 결정합니다.
						</Text>
					</div>

					<div className=" has-top-divider hero-content center-content-mobile">
						<div className="reveal-from-bottom" data-reveal-delay="400">
							<FlexBox>
								<Wrapper>
									<AButton>
										<Icon>
											<FontAwesomeIcon icon={faSearchDollar} />
										</Icon>
										<IconText>
											<SpanText>검사 수수료</SpanText> 조회하기
										</IconText>
									</AButton>

									<HoverButton>
										시료 검사에 대한 수수료를 <br></br> 확인하실 수 있습니다.
										<SButton>
											<Link to="/feepage">바로가기</Link>
										</SButton>
									</HoverButton>
								</Wrapper>

								<Wrapper>
									<AButton>
										<Icon>
											<FontAwesomeIcon icon={faVial} />
										</Icon>
										<IconText>
											<SpanText>온라인</SpanText> 접수하기
										</IconText>
									</AButton>
									<HoverButton>
										품질 시험 의뢰 및 품질 검사 의뢰를 <br></br> 하실 수
										있습니다.
										<br></br>
										(로그인 후 이용 가능)
										<SButton>
											<Link to="/submitform">바로가기</Link>
										</SButton>
									</HoverButton>
								</Wrapper>

								<Wrapper>
									<AButton>
										<Icon>
											<FontAwesomeIcon icon={faUserCheck} />
										</Icon>
										<IconText>
											나의 <SpanText>접수 현황</SpanText> 조회하기
										</IconText>
									</AButton>
									<HoverButton>
										온라인 접수 현황(진행 상태 및 결제)을<br></br> 확인하실 수
										있습니다
										<br></br>
										(로그인 후 이용 가능)
										<SButton>
											<Link to="/mypage"> 바로가기</Link>
										</SButton>
									</HoverButton>
								</Wrapper>
								<br />
								<Wrapper>
									<AButton>
										<Icon>
											<FontAwesomeIcon icon={faFileInvoice} />
										</Icon>
										<IconText>
											<SpanText>의뢰서 / 성적서</SpanText>
											<br></br>
											조회 및 신청하기
										</IconText>
									</AButton>
									<HoverButton>
										시료 검토 완료 이후<br></br>
										의뢰서 및 성적서를 발급할 수 있습니다.<br></br>(로그인 후
										이용 가능)
										<SButton>
											<Link to="/issuedmodified"> 바로가기</Link>
										</SButton>
									</HoverButton>
								</Wrapper>

								<Wrapper>
									<AButton>
										<Icon>
											<FontAwesomeIcon icon={faClipboardCheck} />
										</Icon>
										<IconText>
											<SpanText>성적서 진위</SpanText> 확인하기
										</IconText>
									</AButton>
									<HoverButton>
										등록번호로 <br></br>성적서 원본 대조를 할 수 있습니다
										<SButton>
											<Link to="/confirm"> 바로가기</Link>
										</SButton>
									</HoverButton>
								</Wrapper>
							</FlexBox>
						</div>
					</div>
				</BackGround>
			</section>
		);
	}
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
