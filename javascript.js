function addm(){
	var no1=document.getElementById("inumber1").value;
	var no2=document.getElementById("inumber2").value;
	var results= parseInt(no1)+parseInt(no2);
	document.getElementById("iresult").value=results;
}
function subm(){
	var no1=document.getElementById("inumber1").value;
	var no2=document.getElementById("inumber2").value;
	var results= parseInt(no1)-parseInt(no2);
	document.getElementById("iresult").value=results;
}
function mulm(){
	var no1=document.getElementById("inumber1").value;
	var no2=document.getElementById("inumber2").value;
	var results= parseInt(no1)*parseInt(no2);
	document.getElementById("iresult").value=results;
}
function divm(){
	var no1=document.getElementById("inumber1").value;
	var no2=document.getElementById("inumber2").value;
	var results= parseInt(no1)/parseInt(no2);
	document.getElementById("iresult").value=results;
}