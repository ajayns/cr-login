chrome.storage.sync.get(['username', 'password'], function (res) {
	if (res.username != undefined) {
		document.getElementById('username').value = res.username;
		document.getElementById('password').value = res.password;
		document.getElementById('loginSubmit').submit();
	}
});
