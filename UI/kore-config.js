(function (KoreSDK) {

  var KoreSDK = KoreSDK || {};

  var botOptions = {};
  botOptions.logLevel = 'debug';
  // botOptions.koreAPIUrl = "";
  // botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
  // botOptions.koreAPIUrl = "https://uat.kore.ai/api/";
  botOptions.koreAPIUrl = "https://uat-demo.kore.ai/api/";
  
  botOptions.koreSpeechAPIUrl = "";//deprecated
  //botOptions.bearer = "bearer xyz-------------------";
  //botOptions.ttsSocketUrl = '';//deprecated
  // botOptions.koreAnonymousFn = koreAnonymousFn;
  botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

  // To modify the web socket url use the following option
  // botOptions.reWriteSocketURL = {
  //     protocol: 'PROTOCOL_TO_BE_REWRITTEN',
  //     hostname: 'HOSTNAME_TO_BE_REWRITTEN',
  //     port: 'PORT_TO_BE_REWRITTEN'
  // };
  var fullName = localStorage.getItem("full name");
  var eMail = localStorage.getItem("email");
  

  // if(chatConfig.isFromFinastra){
  //   botOptions.JWTUrl = "https://staging-bankassist.korebots.com/finastra-wrapper/token";
  //   botOptions.brandingAPIUrl = "";
  //   botOptions.userIdentity = '';// Provide users email id here
  //   botOptions.botInfo = { name: "Banking Assist", "_id": "",customData:{"rtmType":"web"}}; // bot name is case sensitive
  //   botOptions.accountId = "5fad6c9a694b34300513832e";  

  //   botOptions.botInfo.customData.accessToken = getCookie("accessToken");
  //   botOptions.botInfo.customData.source = getCookie("source");
  //   botOptions.botInfo.customData.tenantId = getCookie("tenantId");
  //   botOptions.botInfo.customData.uniqueUserId = getCookie("uniqueUserId");

  // } else {

    // botOptions.koreAPIUrl = "https://bankassist.kore.ai/workbench/api";
    // botOptions.brandingAPIUrl = botOptions.koreAPIUrl + '/workbench/sdkData?objectId=hamburgermenu&objectId=brandingwidgetdesktop';
   
    botOptions.JWTUrl = "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
    botOptions.userIdentity = eMail ? eMail : new Date().getTime();// Provide users email id here

    // DEV Credentials
    // botOptions.botInfo = { name: "Mia", "_id": "st-fcf862ad-389d-513b-9a1d-a5119e5ff53a",customData:{"rtmType":"web"}}; // bot name is case sensitive
    // botOptions.clientId = "cs-70f4e462-0a40-5848-8851-8315154d86ff";
    // botOptions.clientSecret = "oe55to2PqlHworbbjxfmhzrvfOQxGzq8ZI3Omx4YeNM=";

    // // UAT Credentials
    // botOptions.botInfo = { name: "Citi Assist", "_id": "st-7bedd6e0-14e4-53c4-b69d-fc507d9aaa4d",customData: {fullName: fullName}}; // bot name is case sensitive
    // botOptions.clientId = "cs-8fbf6cbf-4aeb-5ee0-8186-51080c6cc58d";
    // botOptions.clientSecret = "JhYAAnEiV/DzXT4Vyt5PWsJWfMfsdmDZO9bXKmPlhC8=";

      //  // UAT Credentials
      //  botOptions.botInfo = { name: "March15UatFlow", "_id": "st-a6f93cc5-3576-50de-ac14-e5a8e8f7097f",customData: {fullName: fullName}}; // bot name is case sensitive
      //  botOptions.clientId = "cs-fef779bf-5cd1-52fd-9f15-de573fa1d994";
      //  botOptions.clientSecret = "sgI6eswaAzDH0voFk+rPTuhSoURUdQWKOkjJS+ZkkOg=";

                  //  // UAT Credentials
                  botOptions.botInfo = { name: "March15UatFlow", "_id": "st-0038a388-4c05-5d63-a3b7-262cb10054b5",customData: {fullName: fullName}}; // bot name is case sensitive
                  botOptions.clientId = "cs-c32e318b-d4e7-5dd8-a5dc-2b71bfb2ac10";
                  botOptions.clientSecret = "ZQrhoEuztpTo6Krt0Se70ZCpMlvcB94PsreXaXx7Uj8=";

    botOptions.accountId = "626249d944f401c70f06c6f1"
    botOptions.brandingAPIUrl = botOptions.koreAPIUrl +'websdkthemes/'+  botOptions.botInfo._id+'/activetheme';
  // }
  var chatConfig = {
    botOptions: botOptions,
    allowIframe: false, 			      // set true, opens authentication links in popup window, default value is "false"
    isSendButton: false, 			      // set true, to show send button below the compose bar
    isTTSEnabled: false,			      // set true, to hide speaker icon
    ttsInterface: 'webapi',         // webapi or awspolly , where default is webapi
    isSpeechEnabled: true,			    // set true, to hide mic icon
    allowGoogleSpeech: true,		    // set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
    allowLocation: false,			      // set false, to deny sending location to server
    loadHistory: true,				      // set true to load recent chat history
    messageHistoryLimit: 10,		    // set limit to load recent chat history
    autoEnableSpeechAndTTS: false, 	// set true, to use talkType voice keyboard.
    graphLib: "d3",				          // set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
    googleMapsAPIKey: "",
    minimizeMode: false,             // set true, to show chatwindow in minized mode
    supportDelayedMessages: false,    // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI       
    isFromFinastra: false,
    pickersConfig: {
      showDatePickerIcon: false,           //set true to show datePicker icon
      showDateRangePickerIcon: false,      //set true to show dateRangePicker icon
      showClockPickerIcon: false,          //set true to show clockPicker icon
      showTaskMenuPickerIcon: false,        //set true to show TaskMenu Template icon
      showradioOptionMenuPickerIcon: false //set true to show Radio Option Template icon
    }
  };

  // function getCookie(cname) {
  //   var name = cname + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(';');
  //   for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  /* 
  allowGoogleSpeech will use Google cloud service api.
  Google speech key is required for all browsers except chrome.
  On Windows 10, Microsoft Edge will support speech recognization.
  */

  KoreSDK.chatConfig = chatConfig
})(window.KoreSDK);

