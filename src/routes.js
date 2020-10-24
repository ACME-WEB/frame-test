
//수수료검사
const FEEPAGE = "/feepage"


//내 정보 페이지
const INFOPAGE_1 = "/myinfopage_1";
const INFOPAGE_2 = "/myinfopage_2";

//회원가입
const SIGNUP_1 = "/signup_step1"
const SIGNUP_2 = "/signup_step2"
const SIGNUP_3 = "/signup_step3"
const SIGNUP_4 = "/signup_step4"


//품질시험 접수
const SUBMIT_TEST = "/품질검사접수/:SelectedType/:AreaId/:AreaCate2/:AreaSeq"

//품질검사 접수
const SUBMIT_EXAM = "/품질검사접수/:SelectedType/:AreaId/:AreaCate2/:AreaSeq";


export const routes = {
	feepage: FEEPAGE,
	infopage_1: INFOPAGE_1,
	infopage_2: INFOPAGE_2,
	signup_1: SIGNUP_1,
	signup_2: SIGNUP_2,
	signup_3: SIGNUP_3,
	signup_4: SIGNUP_4,
	submit_test: SUBMIT_TEST,
	submit_exam: SUBMIT_EXAM
}