const nodemailer = require("nodemailer");

// Hàm gửi email
const sendEmail = async (to, subject, message) => {
  try {
    // Cấu hình transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Bạn có thể thay bằng SMTP server khác
      auth: {
        user: "huynhhuy06022003@gmail.com", // Email của bạn
        pass: "Huy06022003@", // Mật khẩu ứng dụng
      },
    });

    // Thông tin email
    const mailOptions = {
      from: "huynhhuy06022003@gmail.com",
      to: "trankhai6323@gmail.com",
      subject: "test", // Tiêu đề email
      text: "Test", // Nội dung email (dạng text)
    };

    // Gửi email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Gọi hàm để gửi email
sendEmail("recipient-email@example.com", "Hello from Node.js", "This is a test email.");