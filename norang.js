  Kakao.init('ca399a68b8d6a1cae0df38eb8c324562');
  checkMember();
  
  function loginWithKakao() {
    Kakao.Auth.login({
      scope: 'profile_nickname,profile_image,friends,talk_message',
      success: function(response) {
		Kakao.API.request({
          url: '/v2/user/me',
	      success: function(response) {
		    // alert('success: ' + JSON.stringify(response.kakao_account.profile.nickname) + '//' + JSON.stringify(response.kakao_account.profile.thumbnail_image_url));
			alert(JSON.stringify(response.kakao_account.profile.nickname) + '님 환영합니다.');
			location.reload();
	      },
	      fail: function(err) {
		    // alert(JSON.stringify(err));
	      }
	    });
      },
      fail: function(err) {
        // alert(JSON.stringify(err));
      }
    });
	
  }
  function checkMember() {
	var url = document.location.href;
	var login = 'https://soeunlee.github.io/norangweb/login';
	var main = 'https://soeunlee.github.io/norangweb/main';

    if (!Kakao.Auth.getAccessToken()) {
	  if (url != login) {
	    location.href = login;
	  }
	} else if (url != main) {
      location.href = main;
	}
  }
  function logout() {
    if (!Kakao.Auth.getAccessToken()) {
	  alert('로그인 하지 않았습니다.');
    } else {
	  Kakao.Auth.logout(function() {
		alert('브라우저 로그아웃 되었습니다.');
	  });
	}
	location.reload();
  }
  function unlinkApp() {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(res) {
        alert('회원 탈퇴 되었습니다.');
		logout();
      },
      fail: function(err) {
        // alert('fail: ' + JSON.stringify(err));
      },
    });
  }