import jwt from 'jsonwebtoken';

export const checkUserToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).send({
        message: 'Auth failed',
        success: false,
      });
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.params.userId = decodedToken.userId;
    next();
  } catch (error) {
    res.status(401).send({
      message: 'Auth failed',
      success: false,
    });
  }
};
