var textArea = document.getElementById("text");
var checkBox = document.getElementById("ch1");


function btnclick(){
	
	textArea.style.fontSize = "24pt";
}
function chbxclick(){
	if(checkBox.checked){
	      textArea.style.fontWeight = "bold";
	  	  textArea.style.color = "green";
	  	  textArea.style.textDecoration = "underline";
	  	}
	else
	      textArea.style.fontWeight = "normal";

}

function btnclick2(){
	var txt = textArea.value;
	textArea.value = txt.toUpperCase().split(".").join("-izzle!");	



}
