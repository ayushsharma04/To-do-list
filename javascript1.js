var button=document.querySelector(".enter");
var input=document.querySelector("input");
var ul=document.querySelector("ul");
function checkLength(){
	return input.value.length;
}
function addList(){
	var list=document.createElement("li");
	var deleted=document.createElement("button");
	deleted.classList.add("deletion");
	deleted.appendChild(document.createTextNode("Delete"));
		list.appendChild(document.createTextNode(input.value));
		list.appendChild(deleted);
		ul.appendChild(list);
		input.value="";
}
function mouseClick(){

	if(checkLength()>0)
	{
		addList();
	}
}
function pressEnter(event){
	if(checkLength()>0&& event.which===13)
	{
		addList();
	}
}
button.addEventListener("click",mouseClick);
input.addEventListener("keypress",pressEnter);
var li=document.querySelectorAll("li");
for(var i=0;i<li.length;i++)
{
li[i].addEventListener("click",function(){
	this.classList.toggle("done");
})
}
var button1=document.querySelectorAll(".deletion");
var length=button1.length;
for(var j=0;j<length;j++)
{
	
	var button1=document.querySelectorAll(".deletion");
	length=button1.length;

	button1[j].addEventListener("click",function(){
		this.parentElement.remove();
	})
}


	
