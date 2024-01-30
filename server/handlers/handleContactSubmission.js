const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

async function handleContactSubmission(req, res) {
  if (req.method != "POST")
    return res.status(404).json({ success: false, message: "Not Found" });
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Please Provide contact information",
    });
  }
  const { name, email, phone, subject, message, boat, furler } = req.body;
  try {
    const msg = {
      to: "info@cdifurlers.com",
      from: process.env.SENDGRID_FROM,
      replyTo: email,
      subject: `New Submission from: ${name}`,
      text: `${furler} ${boat} ${name} ${email} ${phone} ${subject} ${message}`,
    };
    await sgMail
      .send(msg)
      .then((data) => {
        return data[0];
      })
      .then((data) => {
        console.log("email sent");
        res.status(200).end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log("email not sent");
    res.status(500).end();
  }
}

module.exports = { handleContactSubmission };
