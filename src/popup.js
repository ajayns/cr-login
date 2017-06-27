chrome.tabs.getSelected(null, function (tab) {
	document.getElementById('currentLink').innerHTML = tab.url;
});

document.getElementById('submit').onclick = save;

function save() {
	var un = document.getElementById("un").value;
	var pwd = document.getElementById("pwd").value;

	localStorage.setItem("username", un);
	localStorage.setItem("password", pwd);
	
	var temp = localStorage.getItem("username");
	
	document.getElementById("res").innerHTML = temp;
}
