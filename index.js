const AWS = require('aws-sdk')

var params = {
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    ClientId: 'xxxxxxxxxxx3vguj0bu526snj',
    UserPoolId: 'us-east-1_xxxxxxxxxxx',
    AuthParameters: {
        USERNAME: 'xxxxxxxxxxx',
        PASSWORD: 'xxxxxxxxxxx'
    }
}

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider()

cognitoidentityserviceprovider.adminInitiateAuth(params, function(err, data) {
    if (err) {
        console.log(err, err.stack)
    } else {
        console.log(data)
    }
})