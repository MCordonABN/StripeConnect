
const token = require("./Keys.json");
const stripe = require('stripe')(token.secret_key);


//Charges must be over $0.50
function chargeClient(accountID, amount, source){

    stripe.charges.create({
        amount: amount,
        currency: "usd",
        source: source,

    }, {
        stripeAccount: accountID,
    }).then(function(charge) {

    });
}

function chargeClientAppFee(accountID, amount, source, receiptEmail){
    var appFee = amount * 0.025;

    stripe.charges.create({
        amount: amount,
        currency: "usd",
        source: source,
        application_fee_amount: appFee,
    }, {
        stripeAccount: accountID,
    }).then(function(charge) {

    });
}

chargeClient("acct_1Fz9icFdcEmLETbA", 500, "tok_visa");

