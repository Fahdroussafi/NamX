import jwt from 'jsonwebtoken';

export const generateToken = ({ id, email }, agency = "", secret) => {
    const token = jwt.sign({
        id,
        email,
        agency : agency.toString()
    }, secret, {
        expiresIn: '24h'
    })
    return token
}
export const generateTokenAdmin = ({ id, email }, secret) => {
    const token = jwt.sign({
        id,
        email,
    }, secret, {
        expiresIn: '1y'
    })
    return token
}

export const verifyToken = (token, secret) => {
    try {
        const decoded = jwt.verify(token, secret)
        return decoded
    } catch (error) {
        throw new Error("invalid token")
    }
}
