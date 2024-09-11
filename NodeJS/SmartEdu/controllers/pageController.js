const nodemailer = require("nodemailer");

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render("index", {
    page_name: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};

exports.sendEmail = async (req, res) => {
  const outputMessage = `
  <h1>Mail Details</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <h1>Message Details</h1>
    <p>${req.body.message}</p>
  </ul>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "marcelo.buckridge@ethereal.email",
      pass: "2ue8Zt7bMPvTvAzb8y",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Smart EDU Contact Form" <marcelo.buckridge@ethereal.email>', // sender address
      to: "uluagac@mail.com", // list of receivers
      subject: "Smart EDU Contact Form New Message", // Subject line
      html: outputMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

    res.status(200).redirect('contact');
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Failed to send email.");
  }
};
