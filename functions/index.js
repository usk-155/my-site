const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require("nodemailer");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;
const cors = require('cors')({ origin: true });


// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    },
});

exports.sendEmailCF = functions.https.onRequest((req, res) => {
    // エラー処理
    // res.set('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Credentials', 'true');

    cors(req, res, () => {
        // メールの設定
        const adminMail = {
            from: gmailEmail,
            to: gmailEmail,
            subject: "ホームページお問い合わせ",
            html: `
            <p>Email:<br/>${req.body.email}</p>
            <p>Name:<br/>${req.body.name}</p>
            <p>Message:<br/>${req.body.message.replace(/(\r\n|\n|\r)/gm, '<br>')}</p>
            `
        };
        const thankYouMail = {
            from: gmailEmail,
            to: `${ req.body.email }`,
            subject: "お問い合わせありがとうございます",
            html: `
            <p>※ このメールは自動返信です。</p>

            <p>${req.body.name} 様</p>

            <p>なかじまゆうすけのポートフォリオサイトへ<br/>お問い合わせいただきありがとうございます。</p>

            <p>以下内容でお問い合わせを受け付けいたしました。</p>

            <p>--------------------</p>
            <p>Email:<br/>${req.body.email}</p>
            <p>お名前:<br/>${req.body.name}</p>
            <p>お問い合わせ内容:<br/>${req.body.message.replace(/(\r\n|\n|\r)/gm, '<br>')}</p>
            <p>--------------------</p>

            <p>返信まで今しばらくお待ちください。</p>

            <p>********************<br/>
            Name : なかじま ゆうすけ<br/>
            E-mail : y.nakajima.810@gmail.com<br/>
            ********************</p>

            `
        };

        Promise.all([mailTransport.sendMail(adminMail), mailTransport.sendMail(thankYouMail)])
            .then(() => {
                return res.status(200).json({ success: true })
            })
            .catch((e) => {
                console.log(e);
                return res.status(400).json({ err: e });
            })


        // return mailTransport.sendMail(adminMail)
        //     .then(() => {
        //         return res.status(200).json({ success: true })
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //         return res.status(400).json({ err: e });
        //     })
    
    });

});