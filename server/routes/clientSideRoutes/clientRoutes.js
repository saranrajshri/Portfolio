const nodemailer = require("nodemailer");

const { asyncHandler } = require("../../middlewares/errorHandlers");
const { sendMailAuth } = require("../../validators/validation");
let clientRoutes = (module.exports = {});

// Node Mailer
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "shrisaranraj2001@gmail.com",
    pass: "wnxqxhiellsmqara",
  },
  secure: true,
});

clientRoutes.sendMail = asyncHandler(async (req, res, next) => {
  const { name, email, description } = req.body;

  //   Validate the incoming data
  const validateData = await sendMailAuth.validateAsync(req.body);

  const mailData = {
    from: email,
    to: "noreply@saranrajshri.com",
    subject: `${name} wants to send a message from your portfolio`,
    html: `<p>${description}</p>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.send({
      success: "ok",
      message: "Mail sent ",
      messageId: info.messageId,
    });
  });
});
