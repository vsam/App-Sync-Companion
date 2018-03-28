var config = {
        apiKey: "AIzaSyCL1xuSdEsKbNl63KTo1kM6T1TGTW6XRj8",
        authDomain: "tabsdata-e494e.firebaseapp.com",
        databaseURL: "https://tabsdata-e494e.firebaseio.com",
        projectId: "tabsdata-e494e",
        storageBucket: "tabsdata-e494e.appspot.com",
        messagingSenderId: "589496861096"
};
firebase.initializeApp(config);

function leggo() {
    console.log("Chandler Bing");
    //Grab the data associated to Gmail in the database
    firebase.database().ref().child("Gmail").on("value", function(snapshot) {
        if (snapshot.numChildren() > 0) {
            //console.log("opening gmail");
            chrome.tabs.create({url:'https://www.google.com/gmail/'}, function(){});
            firebase.database().ref().child("Gmail").remove();
            return;
        }
    })
    //Grab the data associated to Facebook in the database
    firebase.database().ref().child("Facebook").on("value", function(snapshot) {
        if (snapshot.numChildren() > 0) {
            //var myWindow = window.open('','', 'width=400,height=400');
            //myWindow.document.write("Facebook: " + snapshot.numChildren());
            chrome.tabs.create({url:'https://www.facebook.com/'}, function(){});
            firebase.database().ref().child("Facebook").remove();
            return;
        }
    })    
}
console.log("Hello World");
leggo();
//setInterval(leggo, 2000);