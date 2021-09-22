  Kakao.init('ca399a68b8d6a1cae0df38eb8c324562');

  function loginWithKakao() {
    Kakao.Auth.login({
      scope: 'friends,talk_message',
      success: function(response) {
		Kakao.API.request({
          url: '/v2/user/me',
	      success: function(response) {
		    alert('success: ' + JSON.stringify(response));
	      },
	      fail: function(err) {
		    alert(JSON.stringify(err));
	      }
	    });
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });

  }
  function logout() {
    if (!Kakao.Auth.getAccessToken()) {
	  alert('Not logged in.');
      return;
    }
    Kakao.Auth.logout(function() {
	  alert('success');
    });
  }
  function unlinkApp() {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(res) {
        alert('success: ' + JSON.stringify(res));
      },
      fail: function(err) {
        alert('fail: ' + JSON.stringify(err));
      },
    });
  }