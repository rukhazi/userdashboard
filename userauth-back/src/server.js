import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';

const app = express();

app.use(async (req, res, next) =>{
    const {authtoken} = req.headers;
    
    if (authtoken) {
        try{
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
            res.sendStatus(400);
        }
    }
})

const credentials = JSON.parse(
    fs.readFileSync('../credentials.json')
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});
