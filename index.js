const AWS = require('aws-sdk')
const _ = require('lodash')

const ClientId = process.env.COGNITO_CLIENT_ID
const UserPoolId = process.env.COGNITO_USER_POOL_ID
const USERNAME = 'ezer.mello'
const PASSWORD = 'xxxxxxxxxxx' 

const params = {
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    ClientId,
    UserPoolId,
    AuthParameters: {
        USERNAME,
        PASSWORD,
    }
}

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider()
cognitoidentityserviceprovider.adminInitiateAuth(params, function(err, data) {
    if (err) {
        console.log(err, err.stack)
    } else {
        console.log(data)
        if (data) {
            const { ChallengeName, Session,  ... resto } = data
            if (ChallengeName === 'NEW_PASSWORD_REQUIRED') {
                
                const paramsToAuthChallenge = { 
                    ChallengeName: 'NEW_PASSWORD_REQUIRED', 
                    ChallengeResponses: {
                        USERNAME,
                        PASSWORD,
                        'NEW_PASSWORD': PASSWORD
                    },
                    UserPoolId,
                    ClientId,
                    Session
                }
                cognitoidentityserviceprovider.adminRespondToAuthChallenge(paramsToAuthChallenge, function(err, data) {
                    if (err) console.log(err, err.stack) // an error occurred
                    else     console.log('respondToAuthChallenge-sucesso',data)           // successful response
                })
            }
        }
    }
})


