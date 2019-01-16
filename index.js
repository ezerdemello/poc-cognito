const AWS = require('aws-sdk')

var params = {
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    ClientId: '2al36bn9cdmr3vguj0bu526snj',
    UserPoolId: 'us-east-1_jcvpWEq0W',
    AuthParameters: {
        USERNAME: 'ezer.mello',
        PASSWORD: 'Ez1nh0Surf12!@',
        SECRET_HASH: 's2tv60p64j27tqsvdfggq49llk9pb1kjb75r36b6s7ujcoifq49'
    }
};

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider()

cognitoidentityserviceprovider.adminInitiateAuth(params, function(err, data) {

    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
    
});