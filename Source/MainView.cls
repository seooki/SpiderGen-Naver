
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};



function MainView*onRightSearchBtnActionenter(comp, info, e)
{
	
};


function MainView*onAView4Actionenter(comp, info, e)
{
	const text = document.querySelector('.engText');
	text.innerText = "가나다라마바사아자차카타파하";
};


//section3 

function MainView*onAGridLayout1Actionenter(comp, info, e)
{
	
};

function MainView*onAGridLayout2Actionleave(comp, info, e)
{

};

function MainView*onATextField1Focus(comp, info, e)
{
	
	this.searchBarInput.element.placeholder = '검색어를 입력해 주세요.';
};

function MainView*onSearchBarInputBlur(comp, info, e)
{
	
	this.searchBarInput.element.placeholder = '';
};






function MainView*onSearchBarInputChange(comp, info, e)
{
	if(e.target.value.length > 0) {
		
	}
};


function MainView*onAView5Actionenter(comp, info, e)
{
	this.popup.element.style.display = 'block';
};

function MainView*onAView6Actionleave(comp, info, e)
{
	this.popup.element.style.display = 'none';
};



function MainView*onAView8Actionenter(comp, info, e)
{
	
};

const hiddenBar = document.querySelector('.hiddenSearchBar');

window.addEventListener("scroll", () => {
	if(window.scrollY > 200) {
		hiddenBar.style.top = 0 + 'px';
	} else {
		hiddenBar.style.top = '-' + 65 + 'px';		
	}
});


function MainView*onAView10Click(comp, info, e)
{

	window.scrollTo(0 ,0);

};

const getDate = () => {
	const dt = document.querySelector('.date');
	
	const date = new Date();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hour = String(date.getHours()).padStart(2, '0');
	const min = String(date.getMinutes()).padStart(2, '0');
	
	const result = `${month}.${day} ${hour}:${min}`;
	
	dt.innerText = result;
};

getDate();

function MainView*onALabel1Click(comp, info, e)
{
	getDate();
};

function MainView*onAView11Actionleave(comp, info, e)
{
	const text = document.querySelector('.engText');
	text.innerText = "Where do you want to do on vacation this year?";
};

function MainView*onAView12Actionenter(comp, info, e)
{
	const view = document.querySelector('.hover_View');
	view.style.display = 'block';
};

function MainView*onAView13Click(comp, info, e)
{
	
	const nav = document.querySelector(".toggle_nav");
	
	nav.style.display = "none";
	
	

};

function MainView*onAView14Click(comp, info, e)
{
		
	const nav = document.querySelector(".toggle_nav");
	
	nav.style.display = "block";
};

let pageNum = 1;
const newsPageCount = document.querySelector(".newsPageCount");
newsPageCount.innerText = pageNum;

function MainView*onAView15Click(comp, info, e)
{

	console.log(pageNum);
	if(pageNum <= 1) {
		pageNum = 1;
	} else {
		pageNum--;
	}
	
	pageView();
	newsPageCount.innerText = pageNum;
};

function MainView*onAView16Click(comp, info, e)
{
	
	console.log(pageNum);
	if(pageNum >= 4 ) {
		pageNum = 4;
	} else {
		pageNum++;
	}
	
	pageView();
	newsPageCount.innerText = pageNum;
};

const pageView = () => {

	const page01 = document.querySelector(".news_01");
	const page02 = document.querySelector(".news_02");
	const page03 = document.querySelector(".news_03");
	const page04 = document.querySelector(".news_04");

	if(pageNum == 1) {
		page01.style.display = "block";
		page02.style.display = "none";
		page03.style.display = "none";
		page04.style.display = "none";
	} else if (pageNum ==2) {		
		page01.style.display = "none";
		page02.style.display = "block";
		page03.style.display = "none";
		page04.style.display = "none";
	} else if (pageNum == 3) {
		page01.style.display = "none";
		page02.style.display = "none";
		page03.style.display = "block";
		page04.style.display = "none";
	} else if (pageNum == 4) {		
		page01.style.display = "none";
		page02.style.display = "none";
		page03.style.display = "none";
		page04.style.display = "block";
	}
};


let num;

const newsPage = document.querySelector(".first_news_page");
const setPage = document.querySelector(".first_set_page");

//뉴스스탠드
function MainView*onALabel6Click(comp, info, e)
{
	num = 1;
	onChangePage();
};
//언론사편집
function MainView*onALabel7Click(comp, info, e)
{
	num = 2;
	onChangePage();
};

const onChangePage = () => {
	switch(num) {
		case 1: 
			newsPage.style.display = 'block';
			setPage.style.display = 'none';
			break;
		case 2: 
			newsPage.style.display = 'none';
			setPage.style.display = 'block';
			break;
	}
};

const thirdSlide = document.querySelectorAll(".third_slideContainer > div");
const thirdLeftBtn = document.querySelector(".third_left_btn");
const thirdRightBtn = document.querySelector(".third_right_btn");

const leftValue = 790;
let moveValue = 0;
let count = 0;



//오른쪽버튼
function MainView*onAView18Click(comp, info, e)
{
	
	count++;

	if(count > 3) {
		count = 2;
	} else if(count == 2) {
		thirdRightBtn.style.display = 'none';
		thirdLeftBtn.style.display = 'block';
	} else {
		thirdLeftBtn.style.display = 'block';
	}
	
	moveValue = leftValue*count;	
	
	
	for(let i=0; i<thirdSlide.length; i++) {
		thirdSlide[i].style.left = `-${moveValue}px`;
	}
	
	
};

//왼쪽버튼
function MainView*onAView19Click(comp, info, e)
{

	count--;

	if(count < 0) {
		count = 0;
	} else if(count == 0) {
		thirdLeftBtn.style.display = 'none';
		thirdRightBtn.style.display = 'block';
	} else {
		thirdRightBtn.style.display = 'block';	
	}
	
	moveValue = leftValue*count;
	
	for(let i=0; i<thirdSlide.length; i++) {
		thirdSlide[i].style.left = `-${moveValue}px`;
	}
};

const slideContainer = document.querySelector(".slideContainer");
const slideObj = slideContainer.children;



for(let i=0; i<slideObj.length; i++) {
	slideObj[i].style.left = (120*i) + 'px';
	console.log(slideObj[i].offsetLeft);
}


let interval = setInterval(createSlideShow, 3000);

function createSlideShow(){
	for(let i=0; i<slideObj.length; i++) {
		if(slideObj[i].offsetLeft <= -120) {
			slideObj[i].classList.remove('transition');
			slideObj[i].style.left = (slideObj[i].offsetLeft + 840) + 'px';
		}
		
		let leftValue = slideObj[i].offsetLeft;
		let moveValue = leftValue - 120*3;
		slideObj[i].style.left = moveValue + 'px';
		slideObj[i].classList.add('transition');
		
		if(slideObj[i].offsetLeft <= -120) {
			slideObj[i].classList.remove('transition');
			slideObj[i].style.left = (slideObj[i].offsetLeft + 840) + 'px';
		}
	}
}

function MainView*onAView20Actionenter(comp, info, e)
{
	clearInterval(interval);
};

function MainView*onAView21Actionleave(comp, info, e)
{
	interval = setInterval(createSlideShow, 3000)
};	

const createThirdSubPageArr = () => {
	
	let arr = []
	
	for(let i=1; i<=10; i++) {
		let selector = `.third_sub_page_${i}`;
		arr.push(document.querySelector(selector))
	}
	return arr;
}

const pageArr = createThirdSubPageArr();


const selectThirdSubPage = (param) => {
	
	for(let i=0; i<10; i++) {
		if(i == param) {
		
			pageArr[i].style.display = 'block';
		} else {
			pageArr[i].style.display = 'none';
		}
	}
	
}

const createThirdSubPageTextArr = () => {
	
	let arr = []
	
	for(let i=1; i<=10; i++) {
		let selector = `.third_page_nav_text_${i}`;
		arr.push(document.querySelector(selector))
		
	}
	return arr;
}

const pageTextArr = createThirdSubPageTextArr();


const selectThirdSubPageText = (param) => {
	
	for(let i=0; i<10; i++) {
		if(i == param) {
			
			pageTextArr[i].style.color = 'black';
		} else {
			pageTextArr[i].style.color = 'rgba(8, 8, 8, 0.5)';
		}
	}
	
}

//sub_page
function MainView*onALabel4Click(comp, info, e)
{
	selectThirdSubPage(0);
	selectThirdSubPageText(0);
};
//car_page
function MainView*onALabel5Click(comp, info, e)
{
	selectThirdSubPage(1);
	selectThirdSubPageText(1);
};

function MainView*onALabel8Click(comp, info, e)
{
	selectThirdSubPage(2);
	selectThirdSubPageText(2);
};

function MainView*onALabel9Click(comp, info, e)
{
	selectThirdSubPage(3);
	selectThirdSubPageText(3);
};

function MainView*onALabel10Click(comp, info, e)
{
	selectThirdSubPage(4);
	selectThirdSubPageText(4);
};

function MainView*onALabel11Click(comp, info, e)
{
	selectThirdSubPage(5);
	selectThirdSubPageText(5);
};

function MainView*onALabel12Click(comp, info, e)
{
	selectThirdSubPage(6);
	selectThirdSubPageText(6);
};

function MainView*onALabel13Click(comp, info, e)
{
	selectThirdSubPage(7);
	selectThirdSubPageText(7);
};

function MainView*onALabel14Click(comp, info, e)
{
	selectThirdSubPage(8);
	selectThirdSubPageText(8);
};

function MainView*onALabel15Click(comp, info, e)
{
	selectThirdSubPage(9);
	selectThirdSubPageText(9);
};



const shoppingPage = document.querySelector('.shopping_page');
const mansPage = document.querySelector('.mans_page');
const oneplusPage = document.querySelector('.oneplus_page');
const livePage = document.querySelector('.live_page');

const shoppingTitle = document.querySelector('.shopping_title');
const mansTitle = document.querySelector('.mans_title');
const oneplusTitle = document.querySelector('.oneplus_title');
const liveTitle = document.querySelector('.live_title');



function MainView*onALabel16Click(comp, info, e)
{
	shoppingPage.style.display = 'block';
	mansPage.style.display = 'none';
	oneplusPage.style.display = 'none';
	livePage.style.display = 'none';

	shoppingTitle.style.color = 'black';
	mansTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	oneplusTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	liveTitle.style.color = 'rgba(8, 8, 8, 0.5)';
};

function MainView*onALabel17Click(comp, info, e)
{
	shoppingPage.style.display = 'none';
	mansPage.style.display = 'block';
	oneplusPage.style.display = 'none';
	livePage.style.display = 'none';

	shoppingTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	mansTitle.style.color = 'black';
	oneplusTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	liveTitle.style.color = 'rgba(8, 8, 8, 0.5)';

};

function MainView*onALabel18Click(comp, info, e)
{
	shoppingPage.style.display = 'none';
	mansPage.style.display = 'none';
	oneplusPage.style.display = 'block';
	livePage.style.display = 'none';

	shoppingTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	mansTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	oneplusTitle.style.color = 'black';
	liveTitle.style.color = 'rgba(8, 8, 8, 0.5)';

};

function MainView*onALabel19Click(comp, info, e)
{
	shoppingPage.style.display = 'none';
	mansPage.style.display = 'none';
	oneplusPage.style.display = 'none';
	livePage.style.display = 'block';

	shoppingTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	mansTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	oneplusTitle.style.color = 'rgba(8, 8, 8, 0.5)';
	liveTitle.style.color = 'black';

};
