
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
	text.innerText = "가나다라마바사아자차카타파하";
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

window.addEventListener('load', () => {
	getDate();
});

MainView.prototype.onALabel1Click = function(comp, info, e)
{
	getDate();
};

MainView.prototype.onAView11Actionleave = function(comp, info, e)
{
	const text = document.querySelector('.engText');
	text.innerText = "Where do you want to do on vacation this year?";
};

MainView.prototype.onAView12Actionenter = function(comp, info, e)
{
	const view = document.querySelector('.hover_View');
	view.style.display = 'block';
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

MainView.prototype.onAView15Click = function(comp, info, e)
{

	console.log(pageNum);
	if(pageNum < 1) {
		pageNum = 1;
	} else {
		pageNum--;
	}
	
	pageView();
};

MainView.prototype.onAView16Click = function(comp, info, e)
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
MainView.prototype.onALabel4Click = function(comp, info, e)
{
	subPage.style.display = 'block';
	carPage.style.display = 'none';
};

//car_page
MainView.prototype.onALabel5Click = function(comp, info, e)
{
	carPage.style.display = 'block';
	subPage.style.display = 'none';
};



let num;

const newsPage = document.querySelector(".first_news_page");
const setPage = document.querySelector(".first_set_page");

//뉴스스탠드
MainView.prototype.onALabel6Click = function(comp, info, e)
{
	num = 1;
	onChangePage();
};
//언론사편집
MainView.prototype.onALabel7Click = function(comp, info, e)
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

MainView.prototype.onAView18Click = function(comp, info, e)
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

MainView.prototype.onAView19Click = function(comp, info, e)
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
