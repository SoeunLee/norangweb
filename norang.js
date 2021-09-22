  Kakao.init('ca399a68b8d6a1cae0df38eb8c324562');
  checkMember();
  
  function loginWithKakao() {
    Kakao.Auth.login({
      scope: 'profile_nickname,profile_image,friends,talk_message',
      success: function(response) {
		Kakao.API.request({
          url: '/v2/user/me',
	      success: function(response) {
		    alert('success: ' + JSON.stringify(response.kakao_account.profile.nickname) + '//' + JSON.stringify(response.kakao_account.profile.thumbnail_image_url));
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
  function checkMember() {
    if (!Kakao.Auth.getAccessToken()) {
	  location.href='https://soeunlee.github.io/norangweb/login';
	} else {
	  location.href='https://soeunlee.github.io/norangweb/main';
	}
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