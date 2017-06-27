chrome.tabs.getSelected(null, function (tab) {
	document.getElementById('currentLink').innerHTML = tab.url;
});

document.getElementById('submit').onclick=save;

function save() {
	var un = document.getElementById("un").value;
	var pwd = document.getElementById("pwd").value;
	document.getElementById("res").innerHTML = un + pwd;
}