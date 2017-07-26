chrome.storage.sync.get(['username', 'password'], function (res) {
	if (res.username != undefined) {
		document.getElementsByName('username')[0].value = res.username;
		document.getElementsByName('password')[0].value = res.password;
		document.getElementById('logincaption').click();
	}
});
