import jwt from "jsonwebtoken";

export const jwtAuth = (req, res, next) => {
  const jwtToken = req.cookie.jwtToken;
  try {
    const{ userId,email } = jwt.verify(jwtToken,process.env.jwtKey);
    if(userId){
        req.user = { userId,email };
        next();
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      msg: { name: "JsonWebTokenError", message: "jwt must be provided" },
    });
  }
};
