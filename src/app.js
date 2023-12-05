function generateOtp (){
    let length = 6
    let otp = '';
    const digits = '0123456789';
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
     return otp;
    
}
// generateOtp()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/send-otp', (req, res) => {
  // Implement OTP generation and SMS sending logic here
  const phoneNumber = req.body.phoneNumber;
  const otp = generateOtp(); // Implement a function to generate OTP
  sendSms(phoneNumber, `Your OTP is: ${otp}`); // Implement a function to send SMS

  res.json({ message: 'OTP sent successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
