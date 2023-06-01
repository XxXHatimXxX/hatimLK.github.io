/* XML */
function findWriter() {
  var myXML, writersNode, languageNode;
  var penNode,nameNode,display;
  myXML= document.all("writersXML").XMLDocument 
  writersNode = myXML.documentElement
  languageNode = writersNode.firstChild
  fictionNode = languageNode.firstChild
  penNode = fictionNode.firstChild
  nameNode = penNode.firstChild
  display =nameNode.firstChild.nodeValue;
  document.show.me.value=display
  }
/*   PAGE2   */
function onImg11 ()
{
  this.setAttribute("src","image/gallery/women11.jpg");
}
function outImg12 ()
{
  this.setAttribute("src","image/gallery/women1.jpg");
}
/**/

function onImg21 ()
{
  this.setAttribute("src","image/gallery/women22.jpg");
}
function outImg22 ()
{
  this.setAttribute("src","image/gallery/women2.jpg");
}
/**/

function onImg31 ()
{
  this.setAttribute("src","image/gallery/women33.jpg");
}
function outImg33 ()
{
  this.setAttribute("src","image/gallery/women3.jpg");
}

/**/
function onImg41 ()
{
  this.setAttribute("src","image/gallery/women44.jpg");
}
function outImg44 ()
{
  this.setAttribute("src","image/gallery/women4.jpg");
}

/*   PAGE1   */
function onImg ()
{
  this.setAttribute("src","image/gallery/modernclassic11.jpg");
}
function outImg ()
{
  this.setAttribute("src","image/gallery/modernclassic1.jpg");
}
/**/ 
function onImg1 ()
{
  this.setAttribute("src","image/gallery/90shipster1.jpg");
}
function outImg1 ()
{
  this.setAttribute("src","image/gallery/90shipster11.jpg");
}
/**/ 
function onImg2 ()
{
  this.setAttribute("src","image/gallery/hoddies1.jpg");
}
function outImg2 ()
{
  this.setAttribute("src","image/gallery/hoddies11.jpg");
}
/**/ 
function onImg3 ()
{
  this.setAttribute("src","image/gallery/sportes33.jpg");
}
function outImg3 ()
{
  this.setAttribute("src","image/gallery/sportes3.jpg");
}