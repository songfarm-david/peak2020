import axios from 'axios'

/**
 * Handling for Newsletter Form (subscription forms)
 * 
 */
exports.handler = (event, context, callback) => {

    let payload = JSON.parse(event.body).payload
    if (!payload) return callback('No payload!')
    if (payload.form_name !== 'newsletter-signup') return callback('Not newsletter form')

    const {
        MC_API_KEY,
        MC_AUDIENCE_ID,
        MC_DATA_NO
     } = process.env

    const mChEndPoint = "https://" + MC_DATA_NO + ".api.mailchimp.com/3.0/lists/"
    mChEndPoint += MC_AUDIENCE_ID + "/members/"
    const creds = "anystring:" + MC_API_KEY

    let requestPayload = {
        'email_address': payload.email_address,
         'status': 'subscribed'
    }

    axios.post(API_Endpoint, requestPayload, {
        headers: { 'Authorization': 'Basic ' + Buffer.from(creds).toString('base64') }
    }).then( res => {
        console.log(`success subscribing email: ${payload.email_address}`)
        return res
    }).catch( err => callback( err ))

}