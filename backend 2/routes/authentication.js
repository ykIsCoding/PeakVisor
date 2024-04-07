require("dotenv").config()
const nodemailer = require("nodemailer")
var express = require('express');
var router = express.Router();
const axios = require('axios');
var rn = require('random-number');
const { initializeApp } =require("firebase/app");
const { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendPasswordResetEmail, updateProfile, updateEmail} =require("firebase/auth");
const { v4 } = require('uuid');

const { getDatabase, set, ref, update, onValue , get, remove,child} = require('firebase/database');

var firebaseApp
var db
const url = 'http://localhost:3000/authentication'
let mailsender = nodemailer.createTransport({
    //host: "smtp.mail.yahoo.com",
    service:"hotmail",
    auth:{
        user: process.env.AUTHMAILER,
        pass:process.env.AUTHMAILER_PASS
    }
  })

function sendmail(to,subject,otp){
    let verifyemailHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="388982">
                                        <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-infoblock">
                                                                                        <p><br></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="388981">
                                        <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://fbcidox.stripocdn.email/content/guids/CABINET_451a48e75666d4986110ebd97e1f04da0b93bd85a692dd81f2ec4374ae982c51/images/peakvisor_logo_black.png" alt style="display: block;" width="250"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://fbcidox.stripocdn.email/content/guids/CABINET_67e080d830d87c17802bd9b4fe1c0912/images/55191618237638326.png" alt style="display: block;" width="100"></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p10b es-m-txt-c">
                                                                                        <h1 style="font-size: 46px; line-height: 100%; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;">Confirm Your Email</h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                        <p style="font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;">You’ve received this message because your email address has been registered with our site. Please see the One-Time Password (OTP) below to verify your email address and confirm that you are the owner of this account.</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p10t es-p5b">
                                                                                        <p style="font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;"><strong>If you did not register with us, please disregard this email.</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-button es-p10t es-p10b"><h3 class="es-button-border" style="border-radius: 6px;">${otp}</h3></td>
                                                    
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                        <p style="font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;">Once confirmed, this email will be uniquely associated with your account.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="388980">
                                        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="600" class="esd-container-frame" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="388983">
                                        <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>`
const mailOptions = {
    from: process.env.AUTHMAILER,
    to:to,
    subject:subject,
    html: verifyemailHTML
}
try{
    mailsender.sendMail(mailOptions)
    mailsender.close()
    return true
}catch(e){
    return false;
}

}



router.post('/verifyemail', async function(req, res, next) {
    //generate uuid send to client, when client enter otp use the uuid to verify
    //to test
    const identifier = v4()
    const timeout = 180000;
    const otpExpiry = Date.now() + timeout
    const {email} = req.body
    var otp = rn({min:1000,max:9999,integer:true})
    
    try {
        const r = sendmail(email,"Verify Your Email for your PeakVisor account",otp)
        
        if(!r) throw new Error("Email not sent.");
        
        initialiseApp()
        db = getDatabase();
        
        const dataRef = ref(db, 'otp/' + identifier)
        set(dataRef,{
        identifier:identifier,
        otp:otp,
        otpExpiry:otpExpiry
        }).then((v)=>{
            setTimeout(()=>remove(dataRef),timeout)
            res.send({status:"success",message:"Check your email for One-Time Password",identifier:identifier,otpExpires:otpExpiry})
        }).catch(e=>{
            res.send({status:"failure",message:"Something went wrong. Please try again."})
        })
        //res.send({status:"success",message:"Check your email for One-Time Password",identifier:identifier,otpExpires:otpExpiry})
      } catch (e) {
        res.send({status:"failure",message:"Something went wrong. Please try again."})
      }

});

router.post('/register', async function(req, res, next) {
    //post request to /register should have email and password data
    const {email,password,otp,identifier, name} = req.body
    initialiseApp()

    const db = getDatabase();
    const otpRef = ref(db, 'otp/');
    
        get(otpRef).then((snapshot) => {
            const data = snapshot.val();
            console.log(req.body)
            console.log(data)
            const item = data[identifier]
            if(item){
                if(item && otp == item.otp && item.otpExpiry>Date.now()){
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                    const user = userCredential.user;
                   
                    
                    set(ref(db, 'users/' +user.uid), {
                        name:name,
                        strava_account:null,
                        id:user.uid,
                        deleted:false,
                        time_till_delete:null
                    });

                    
                        res.send({status:"success",message:"Account Registered",token_manager:user.stsTokenManager})
                    
                    
                    
                

                })
                .catch((error) => {
                    
                const errorCode = error.code;
                const errorMessage = error.message;
                res.send({status:errorCode,message:errorMessage})
                return
                });
                }else{
                    res.send({status:"failure",message:"OTP Wrong"})
                    return
                }
            }else{
                res.send({status:"failure",message:"OTP Expired"})
                return
            }
        }).catch((error) => {
            console.log(error)
            res.send({status:"failure",message:"Something went wrong. Please try again."})
        });
    
    return
});

router.post('/login', async function(req, res, next) {
    const {email,password} = req.body
    initialiseApp()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
        const user = userCredential.user;
        const uid = user.uid
        const dbRef = ref(getDatabase());
        const db = getDatabase()
        get(child(dbRef, `users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const prevData = snapshot.val()[uid]
                if(prevData){
                    var newUpdate = {...prevData,deleted:false,time_till_delete:null}
                    update(child(dbRef, `users/${uid}`), newUpdate);
                }
                
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
                console.error(error);
        });

        
        res.send({status:"success",message:"User Logged In",token_manager:user.stsTokenManager,userId:user.uid})
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.send({status:errorCode,message:errorMessage})
    });
    
});

router.post('/userdata', async function(req, res, next) {
    const {uid} = req.body
    initialiseApp()
    const dbRef = ref(getDatabase());
    const ud = getAuth()
    
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
    
        if (snapshot.exists()) {
            res.send({...snapshot.val(),email: ud.currentUser.email});
        } else {
            res.send({status:"failure",message:"Something went wrong. Please try again."})
        }
    }).catch((error) => {
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    });
    
});


router.post('/logout', async function(req, res, next) {
    initialiseApp()
    const auth = getAuth();
    signOut(auth).then(() => {
        res.send({status:"success",message:"Logged out"})
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.send({status:errorCode,message:errorMessage})
      });
});

router.post('/resetpassword', async function(req, res, next) {
    
    try{
        initialiseApp()
        const {email} = req.body
        sendPasswordResetEmail(getAuth(), email).then(() => {
            res.send({status:"success",message:"check your email for a link to reset your password"})
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.send({status:errorCode,message:errorMessage})
            });
        
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }
});

router.post('/deleteaccount',(req,res,next)=>{
    const {uid} = req.body
    const timeTillDelete = 7*24*3600*1000 + Date.now()
    try{
        const dbRef = ref(getDatabase());
        const db = getDatabase()
        get(child(dbRef, `users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const prevData = snapshot.val()[uid]
                if(prevData){
                    var newUpdate = {...prevData,deleted:true,time_till_delete:timeTillDelete}
                    update(child(dbRef, `users/${uid}`), newUpdate);
                }
                
            } else {
                res.send({status:"failure",message:"Something went wrong. Please try again."})
            }
        }).catch((error) => {
            res.send({status:"failure",message:"Something went wrong. Please try again."})
        });
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }
    

})

router.post('/update',(req,res,next)=>{
    const {uid,email,name,strava,stravaData} = req.body
    
    try{
        initialiseApp()
        const dbRef = ref(getDatabase());
        const db = getDatabase()
        //TESTING
        
        //
        
            get(child(dbRef, `users/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const prevData = snapshot.val()[uid]
                    if(prevData){
                        var newUpdate = {...prevData,name,strava,stravaData}
                        update(child(dbRef, `users/${uid}`), newUpdate);
                    }
                    res.send({status:"Success",message:"Changes saved."})
                } else {
                    res.send({status:"failure",message:"Something went wrong. Please try again."})
                }
            }).catch((error) => {
                console.log(error)
                res.send({status:"failure",message:"Something went wrong. Please try again."})
            });
        
        
        
    }catch(e){
        
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }
    

})

router.get('/appstats',(req,res,next)=>{
    try{
        initialiseApp()
        
        const dbRef = ref(getDatabase());
        const db = getDatabase()
        get(child(dbRef, `users/`)).then((snapshot) => {
            console.log(snapshot)
            if (snapshot.exists()) {
                let arr = []
                snapshot.forEach(data=>{
                    arr.push(data.val())
                })
                let usercount = arr.length
                let totaldistance = arr.filter(x=>x.stravaData && x.stravaData.total_distance).reduce((s, a) => s + a, 0)
                let totaltrips = arr.filter(x=>x.stravaData && x.stravaData.total_trips).reduce((s, a) => s + a, 0)
                
                res.send({status:"success",data:{usercount,totaldistance,totaltrips}})
                
            } else {
                res.send({status:"failure",message:"Something went wrong. Please try again."})
            }
        }).catch((error) => {
            console.log(error)
            res.send({status:"failure",message:"Something went wrong. Please try again."})
        });
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }
})

router.post('/userstats',(req,res,next)=>{
    const {uid} = req.body
    try{
        initialiseApp()
        
        const dbRef = ref(getDatabase());
        const db = getDatabase()
        get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            console.log('hehhe',snapshot.val())
            if (snapshot.exists()) {
                
                
                
                res.send({status:"success",data:{}})
                
            } else {
                res.send({status:"failure",message:"Something went wrong. Please try again."})
            }
        }).catch((error) => {
            console.log(error)
            res.send({status:"failure",message:"Something went wrong. Please try again."})
        });
    }catch(e){
        res.send({status:"failure",message:"Something went wrong. Please try again."})
    }
})

function initialiseApp(){
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMAIN,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGESENDERID,
        databaseURL:process.env.FIREBASE_DATABASEURL,
        appId: "1:729504312491:web:01745964315acf2c4e5bee"
      };
      
      // Initialize Firebase
      firebaseApp = initializeApp(firebaseConfig);
      db = getDatabase(firebaseApp);
     
}




module.exports = router;

