  var CLIENT_ID = '446203131339-l8af5hc6n22ref6vknpf0cvjvb88gfgk.apps.googleusercontent.com';
  var SCOPES = 'https://www.googleapis.com/auth/drive';

  /**
   * Called when the client library is loaded to start the auth flow.
   */
  function handleClientLoad() {
    window.setTimeout(checkAuth, 1);
  }

  /**
   * Check if the current user has authorized the application.
   */
  function checkAuth() {
	  console.log('auth')
	  gapi.auth.authorize(
        {'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': true},
        handleAuthResult);
  }

  /**
   * Called when authorization server replies.
   *
   * @param {Object} authResult Authorization result.
   */
  function handleAuthResult(authResult) {
	var authButton = document.getElementById('authorizeButton');
    if (authResult && !authResult.error) {
      // Access token has been successfully retrieved, requests can be sent to the API.
      console.log("done authorizing");
      retrieveAllFiles();
    } else {
    	console.log("trying again!!");
      // No access token could be retrieved, show the button to start the authorization flow.
           gapi.auth.authorize(
               {'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false},
               handleAuthResult);
        }
  }
  
  function printFile(fileId) {
	  var request1 = gapi.client.request({
		'path': '/drive/v2/files/'+fileId,
		'method': 'GET',
	  });
	  
	  console.log(request1);
	  request1.execute(function(resp) {
	    console.log('Title: ' + resp.title);
	    console.log('Description: ' + resp.description);
	    console.log('MIME type: ' + resp.mimeType);
	  });
	}
  
  /**
   * Retrieve a list of File resources.
   *
   * @param {Function} callback Function to call when the request is complete.
   */
  function retrieveAllFiles(callback) {
    var retrievePageOfFiles = function(request, result) {
      request.execute(function(resp) {
    	var i=0;
    	console.log("here");
        result = result.concat(resp.items);
        var nextPageToken = resp.nextPageToken;
        for(i=0;i<resp.items.length;i++){
        	console.log(resp.items[i])
        	if (resp.items[i].id == "1vho9BS2YdCz3aKuLyV9m15stYhBu4G97ngzRasQsG1Y"){
        		console.log("go get file");
        		printFile("1vho9BS2YdCz3aKuLyV9m15stYhBu4G97ngzRasQsG1Y");
        		break;
        	}
        }
      });
    }
    var initialRequest = gapi.client.request({
        'path': '/drive/v2/files',
        'method': 'GET',
        'params': {'maxResults': '5'}
        });
    retrievePageOfFiles(initialRequest, []);
  }