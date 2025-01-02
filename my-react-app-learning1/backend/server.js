// const nodemailer = require("nodemailer");

// // Hàm gửi email
// const sendEmail = async (to, subject, message) => {
//   try {
//     // Cấu hình transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // Bạn có thể thay bằng SMTP server khác
//       auth: {
//         user: "huynhhuy06022003@gmail.com", // Email của bạn
//         pass: "Huy06022003@", // Mật khẩu ứng dụng
//       },
//     });

//     // Thông tin email
//     const mailOptions = {
//       from: "huynhhuy06022003@gmail.com",
//       to: "trankhai6323@gmail.com",
//       subject: "test", // Tiêu đề email
//       text: "Test", // Nội dung email (dạng text)
//     };

//     // Gửi email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// // Gọi hàm để gửi email
// sendEmail("recipient-email@example.com", "Hello from Node.js", "This is a test email.");
// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: 'huynhhuy06022003@gmail.com', // Replace with your email
    pass: 'Huy06022003@', // Replace with your email password
  },
});

// Email options
const mailOptions = {
  from: 'huynhhuy06022003@gmail.com', // Sender address
  to: 'trankhai6323@gmail.com', // List of recipients
  subject: 'Test Email', // Subject line
  text: 'This is a plain text message.', // Plain text body
  html: '<p>This is an HTML message.</p>', // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error occurred:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});
