const managementClient = require("auth0").ManagementClient;
const dotenv = require("dotenv");

dotenv.config();

const createUserData = async (req, res) => {
  let response;
  var management = new managementClient({
    domain: process.env.DOMAIN,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope: "create:users",
    token: process.env.TOKEN,
  });

  try {
    management
      .createUser({
        connection: "Username-Password-Authentication",
        email: req.body.Email,
        password: req.body.Password,
        email_verified: true,
        verify_email: true,
        // username: "smpatel",
      })
      .then(function (users) {
        response = {
          data: users,
        };
        res.status(200).json(response);
      })
      .catch(function (err) {
        response = {
          Error: err.message,
        };
        res.status(200).json(response);
      });
  } catch (err) {
    res.status(200).json({ Error: err.message });
  }
};

module.exports = { createUserData };
