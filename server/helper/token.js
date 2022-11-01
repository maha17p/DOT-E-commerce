const jwt = require("jsonwebtoken");

const activationToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.ACTIVATION_JWT_KEY, {
      expiresIn: "5min",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

const activationTokenValidator = async (token) => {
  try {
    const data = await jwt.verify(token, process.env.ACTIVATION_JWT_KEY);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.REFRESH_JWT_KEY, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

const refreshTokenValidator = async (token) => {
  try {
    const data = jwt.verify(token, process.env.REFRESH_JWT_KEY);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const accessToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.ACCESS_JWT_KEY, {
      expiresIn: "15min",
    });
    return token
  } catch (error) {
      console.log(error);
  }
};

const accessTokenValidator = async(token) => {
    try {
        const data = await jwt.verify(token, process.env.ACCESS_JWT_KEY);
        return data;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
  activationToken,
  activationTokenValidator,
  refreshToken,
  refreshTokenValidator,
  accessToken,
  accessTokenValidator
};
