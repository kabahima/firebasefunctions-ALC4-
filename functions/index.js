const functions = require('firebase-functions');


exports.VerifyPhone = functions.auth.user().onCreate((user) => {
    var provider = new firebase.auth.PhoneAuthProvider();
    provider.verifyPhoneNumber('')
        .then(function(verificationId) {
    
          return firebase.auth.PhoneAuthProvider.credential(verificationId,
              verificationCode);
        })
        .then(function(phoneCredential) {
          return firebase.auth().signInWithCredential(phoneCredential);
        });