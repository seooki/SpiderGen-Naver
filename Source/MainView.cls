
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
	const hour = date.getHours();
	const min = date.getMinutes();
	
	const result = `${month}.${day} ${hour}:${min}`;
	
	dt.innerText = result;
};

window.addEventListener('load', () => {
	getDate();
})

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
}
