// Check my name tool

/*jshint multistr:true */

//declaring the vars
var text = "hey this is the gggg ahmed said he wouldnt come but he other\
            ahmed will be there";
var myName = "ahmed";
var hits = [];

// for loop
for( i = 0; i < text.length; i ++ ) {
    // if statment to check the first letter
    if ( text[i] === myName[0] ) {
        for( j = i; j < i+myName.length; j++ ) {
           hits.push(myName)
           }
        }
    }