const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).send({
                message: "Auth failed",
                success: false,
            });
        }
        const decodedToken = jwt.verify(token, process.env.jwt_secret); // this is the secret key that we used to sign the token
        req.params.adminId = decodedToken.adminId; // this is the secret key that we used to sign the token
        next(); // this is to continue the request
    } catch (error) {
        res.status(401).send({
            message: "Auth failed",
            success: false,
        });
    }
};
