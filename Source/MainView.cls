
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

function MainView*onTestBtnClick(comp, info, e)
{
	console.log(this.test);
};

function MainView*onAView1Click(comp, info, e)
{
	setInterval(slideShow, 2000);
};

function slideShow(){
	
}

function MainView*onAButton1Click(comp, info, e)
{
	const data = this.slideDom;
	data.style.left = 100 + "px";
};
