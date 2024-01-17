
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};



MainView.prototype.onRightSearchBtnActionenter = function(comp, info, e)
{
	
};


MainView.prototype.onAView4Actionenter = function(comp, info, e)
{
	const text = document.querySelector('.engText');
	text.innerText = "가나다라마바사아자차카타파 하늘이 보우하사";
	text.style.color = '#606060';
	text.style.fontSize = '13.65' + 'px';
};


//section3 

MainView.prototype.onAGridLayout1Actionenter = function(comp, info, e)
{
	
};

MainView.prototype.onAGridLayout2Actionleave = function(comp, info, e)
{

};

MainView.prototype.onATextField1Focus = function(comp, info, e)
{
	
	this.searchBarInput.element.placeholder = '검색어를 입력해 주세요.';
};

MainView.prototype.onSearchBarInputBlur = function(comp, info, e)
{
	
	this.searchBarInput.element.placeholder = '';
};






MainView.prototype.onSearchBarInputChange = function(comp, info, e)
{
	if(e.target.value.length > 0) {
		
	}
};


MainView.prototype.onAView5Actionenter = function(comp, info, e)
{
	this.popup.element.style.display = 'block';
};

MainView.prototype.onAView6Actionleave = function(comp, info, e)
{
	this.popup.element.style.display = 'none';
};



MainView.prototype.onAView8Actionenter = function(comp, info, e)
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


MainView.prototype.onAView10Click = function(comp, info, e)
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

MainView.prototype.onALabel1Click = function(comp, info, e)
{
	getDate();
};

MainView.prototype.onAView11Actionleave = function(comp, info, e)
{
	const text = document.querySelector('.engText');
	text.innerText = "Where do you want to do on vacation this year?";
	text.style.color = 'black';
	text.style.fontSize = '17.85' + 'px';
};



MainView.prototype.onAView13Click = function(comp, info, e)
{
	
	const nav = document.querySelector(".toggle_nav");
	
	nav.style.display = "none";
	
	

};

MainView.prototype.onAView14Click = function(comp, info, e)
{
		
	const nav = document.querySelector(".toggle_nav");
	
	nav.style.display = "block";
};

let pageNum = 1;
const newsPageCount = document.querySelector(".newsPageCount");
newsPageCount.innerText = pageNum;

MainView.prototype.onAView15Click = function(comp, info, e)
{

	if(pageNum <= 1) {
		pageNum = 1;
	} else {
		pageNum--;
	}
	
	pageView();
	newsPageCount.innerText = pageNum;
};

MainView.prototype.onAView16Click = function(comp, info, e)
{
	
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



const thirdSlide = document.querySelectorAll(".third_slideContainer > div");
const thirdLeftBtn = document.querySelector(".third_left_btn");
const thirdRightBtn = document.querySelector(".third_right_btn");

const leftValue = 790;
let moveValue = 0;
let count = 0;



//오른쪽버튼
MainView.prototype.onAView18Click = function(comp, info, e)
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
MainView.prototype.onAView19Click = function(comp, info, e)
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

MainView.prototype.onAView20Actionenter = function(comp, info, e)
{
	clearInterval(interval);
};

MainView.prototype.onAView21Actionleave = function(comp, info, e)
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
MainView.prototype.onALabel4Click = function(comp, info, e)
{
	selectThirdSubPage(0);
	selectThirdSubPageText(0);
};
//car_page
MainView.prototype.onALabel5Click = function(comp, info, e)
{
	selectThirdSubPage(1);
	selectThirdSubPageText(1);
};

MainView.prototype.onALabel8Click = function(comp, info, e)
{
	selectThirdSubPage(2);
	selectThirdSubPageText(2);
};

MainView.prototype.onALabel9Click = function(comp, info, e)
{
	selectThirdSubPage(3);
	selectThirdSubPageText(3);
};

MainView.prototype.onALabel10Click = function(comp, info, e)
{
	selectThirdSubPage(4);
	selectThirdSubPageText(4);
};

MainView.prototype.onALabel11Click = function(comp, info, e)
{
	selectThirdSubPage(5);
	selectThirdSubPageText(5);
};

MainView.prototype.onALabel12Click = function(comp, info, e)
{
	selectThirdSubPage(6);
	selectThirdSubPageText(6);
};

MainView.prototype.onALabel13Click = function(comp, info, e)
{
	selectThirdSubPage(7);
	selectThirdSubPageText(7);
};

MainView.prototype.onALabel14Click = function(comp, info, e)
{
	selectThirdSubPage(8);
	selectThirdSubPageText(8);
};

MainView.prototype.onALabel15Click = function(comp, info, e)
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



MainView.prototype.onALabel16Click = function(comp, info, e)
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

MainView.prototype.onALabel17Click = function(comp, info, e)
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

MainView.prototype.onALabel18Click = function(comp, info, e)
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

MainView.prototype.onALabel19Click = function(comp, info, e)
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


let num;

const createFirstSubPageArr = () => {
	let arr = [];
	
	for(let i=1; i<6; i++) {
		const selector = `.first_sub_page_${i}`
		arr.push(document.querySelector(selector))
	}
	
	return arr;
}

const firstSubPage = createFirstSubPageArr();


const createFirstSubPageTitleArr = () => {
	let arr = [];
	
	for(let i=1; i<6; i++) {
		const selector = `.first_sub_page_title_${i}`
		arr.push(document.querySelector(selector))
	}
	
	return arr;
}

const firstSubPageTitle = createFirstSubPageTitleArr();


//뉴스스탠드

//언론사편집
MainView.prototype.onALabel7Click = function(comp, info, e)
{
	num = 2;
	onChangePage(num);
};

MainView.prototype.onALabel20Click = function(comp, info, e)
{
	num = 3;
	onChangePage(num);
};

MainView.prototype.onALabel21Click = function(comp, info, e)
{
	num = 4;
	onChangePage(num);
};

MainView.prototype.onALabel22Click = function(comp, info, e)
{
	num = 5;
	onChangePage(num);
};

const onChangePage = (param) => {
	for(let i=0; i<firstSubPage.length; i++) {
		if(param-1 == i) {
			firstSubPage[i].style.display = 'block';
			firstSubPageTitle[i].style.color = 'black';
		} else {
			firstSubPage[i].style.display = 'none';
			firstSubPageTitle[i].style.color = 'rgba(8, 8, 8, 0.5)';
		}
	}
};

const firstSlideObj = document.querySelectorAll('.first_slide_container > label');

const createTop = () => {
	for(let i=0; i<firstSlideObj.length; i++) {
		firstSlideObj[i].style.top = 20*i +'px';
		firstSlideObj[i].classList.add('transition');
	}
};

createTop();

let intervalFirst = setInterval(slideFirst, 3000);

function slideFirst(){
	for(let i=0; i<firstSlideObj.length; i++) {
	
		let topValue = firstSlideObj[i].offsetTop;
		
		if(firstSlideObj[i].offsetTop < 0){
			firstSlideObj[i].classList.remove('transition');
			firstSlideObj[i].style.top = (topValue + 40) + 'px';	
		} else {
			firstSlideObj[i].classList.add('transition');
		}
	
		
		firstSlideObj[i].style.top = (topValue - 20) + 'px';
		
		if(firstSlideObj[i].offsetTop < 0){
			firstSlideObj[i].classList.remove('transition');
			firstSlideObj[i].style.top = (topValue + 40) + 'px';	
		} else {
			firstSlideObj[i].classList.add('transition');
		}
	}
}





MainView.prototype.onAView22Actionenter = function(comp, info, e)
{
	clearInterval(intervalFirst);
};

MainView.prototype.onAView23Actionleave = function(comp, info, e)
{
	intervalFirst = setInterval(slideFirst, 3000);
};

MainView.prototype.onALabel6Click = function(comp, info, e)
{
	num = 1;
	onChangePage(num);
	createTop();
};
