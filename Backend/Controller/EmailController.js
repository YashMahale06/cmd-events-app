const nodemailer = require("nodemailer");
const multer = require("multer");
const EmailController = (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
  
    const logoBase64 = 'https://instagram.fpnq15-1.fna.fbcdn.net/v/t51.2885-15/419024700_1446273635928592_2189792575835197741_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpnq15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=9BasWDmE5yoQ7kNvgGb9K7M&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AYBMe-zyayvjdQlzw_NMzEeWP9t-8_qwH3z3SU3-ELUevA&oe=667A3BFF&_nc_sid=94fea1';
    // Email content
    const mailOptions = {
      from: "vinayakyash@18@gmail.com",
      to: "mahaleyash0518@gmail.com", // Email address where you want to receive messages
      subject: "Enquiry",
      html: `
        <div style="text-align: center;">
          <img src="${logoBase64}" alt="Company Logo" style="max-width: 200px; margin-bottom: 20px;" />
        </div>
        <h2>New Contact Form Submission</h2>
        
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p>Best regards,</p>
        <p>${firstName} ${lastName}</p>
        <p>Phone: ${phone}</p>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  }

module.exports = EmailController;