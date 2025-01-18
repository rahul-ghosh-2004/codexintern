import crypto from "crypto"
import axios from "axios"

const order = async (req, res) => {
    const info = {
        name: 'Vikas',
        amount: 1,
        number: '9999999999',
        MUID: "MUID" + Date.now(),
        transactionId: 'T' + Date.now(),
    }

    const merchantTransactionId = info.transactionId;
    const data = {
        merchantId: process.env.MERCHANT_ID,
        merchantTransactionId: merchantTransactionId,
        merchantUserId: info.MUID,
        name: info.name,
        amount: info.amount * 100,
        redirectUrl: `https://cxi-backend.vercel.app/api/v1/payment/status/?id=${merchantTransactionId}`,
        redirectMode: 'POST',
        mobileNumber: info.number,
        paymentInstrument: {
            type: 'PAY_PAGE'
        }
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString('base64');
    const keyIndex = 1;
    const string = payloadMain + '/pg/v1/pay' + process.env.SALT_KEY;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"

    const options = {
        method: 'POST',
        url: prod_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum
        },
        data: {
            request: payloadMain
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data)

        return res.json(response.data)
    })
        .catch(function (error) {
            console.error(error);
        });
}

const status = async (req, res) => {
    const {id} = req.query
    const merchantId = process.env.MERCHANT_ID

    console.log(id)

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${id}` + process.env.SALT_KEY;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
        method: 'GET',
        url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${id}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': `${merchantId}`
        }
    };

    await axios.request(options).then((response) => {
        console.log(response)
        res.redirect("https://codexintern.in")
    })
    .catch((error) => {
        console.error(error);
    });
}

export {
    order,
    status
}