document.getElementById('submit').onclick = save;

function save() {
	var un = document.getElementById("un").value;
	var pwd = document.getElementById("pwd").value;

	chrome.storage.sync.set({
		'username': un,
		'password': pwd
	}, function () {
		document.getElementById("saved").style.display = "block";
		document.getElementById("input").style.display = "none";
	});

}
