
/**
Constructor
Do not call Function in Constructor.
*/
class CloneNaverApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function CloneNaverApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function CloneNaverApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};


