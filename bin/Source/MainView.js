
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
	const hour = date.getHours();
	const min = date.getMinutes();
	
	const result = `${month}.${day} ${hour}:${min}`;
	
	dt.innerText = result;
};

window.addEventListener('load', () => {
	getDate();
})

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
}
