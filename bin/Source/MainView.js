
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

MainView.prototype.onTestBtnClick = function(comp, info, e)
{
	console.log(this.test);
};

MainView.prototype.onAView1Click = function(comp, info, e)
{
	setInterval(slideShow, 2000);
};

function slideShow(){
	
}

MainView.prototype.onAButton1Click = function(comp, info, e)
{
	const data = this.slideDom;
	data.style.left = 100 + "px";
};
