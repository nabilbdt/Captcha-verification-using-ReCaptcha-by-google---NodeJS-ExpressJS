const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();


app.use(express.json());
app.use(cors());

app.post('/validate-captcha',async(req,res)=>{
    const captchaValue = req.body.captchaValue;
    const {data} = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=6Lcd_o4pAAAAALUcx2nZ_ltSTnJLrEjPs2TIX5iD&response=${captchaValue}`,
    )
    console.log(data)
    res.status(200).json(data)
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});