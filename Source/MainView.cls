
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

window.addEventListener('load', () => {
	getDate();
});

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

function MainView*onAView15Click(comp, info, e)
{

	console.log(pageNum);
	if(pageNum < 1) {
		pageNum = 1;
	} else {
		pageNum--;
	}
	
	pageView();
};

function MainView*onAView16Click(comp, info, e)
{
	
	console.log(pageNum);
	if(pageNum > 4 ) {
		pageNum = 4;
	} else {
		pageNum++;
	}
	
	pageView();
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

const subPage = document.querySelector(".third_sub_page");
const carPage = document.querySelector(".third_car_page");


//sub_page
function MainView*onALabel4Click(comp, info, e)
{
	subPage.style.display = 'block';
	carPage.style.display = 'none';
};

//car_page
function MainView*onALabel5Click(comp, info, e)
{
	carPage.style.display = 'block';
	subPage.style.display = 'none';
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
	if(count >= 2) {
		count = 2;
		thirdRightBtn.style.display = 'none'
	} else {
		count++;
		console.log(count)
		moveValue = leftValue*count;
	}
	
	for(let i=0; i<thirdSlide.length; i++) {
		thirdSlide[i].style.left = `-${moveValue}px`;
	}
	
	
};

function MainView*onAView19Click(comp, info, e)
{
	if(count <= 0) {
		count = 0;
		
	} else {
		count--;
		console.log(count)
		moveValue = leftValue*count;
			
	}
	
	for(let i=0; i<thirdSlide.length; i++) {
		thirdSlide[i].style.left = `-${moveValue}px`;
	}
};
