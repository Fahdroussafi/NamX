import { verifyToken } from "."

export const isSuper = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_SUPER_SECRET)
            if (tokensData && tokensData.role === 'super_admin') {
                next()
            } else {
                res.status(403).json({
                    message: 'Access denied'
                })
            }
        } else {
            next(new Error('No token provided'))
        }
    } catch (error) {
        next(error)
    }
}

export const isAdCenter = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET)
            console.log(tokensData);
            if (tokensData && tokensData.role === 'admin_center') {
                next()
            } else {
                res.status(403).json({
                    message: 'Access denied'
                })
            }
        } else {
            next(new Error('No token provided'))
        }
    } catch (error) {
        next(error)
    }
}


export const isManager = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET)
            if (tokensData && tokensData.role === 'manager') {
                next()
            } else {
                res.status(403).json({
                    message: 'Access denied'
                })
            }
        } else {
            next(new Error('No token provided'))
        }
    } catch (error) {
        next(error)
    }
}


export const isAuthenticated = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)
            if (tokensData) {
                req.User = tokensData
                next()
            } else {
                res.status(403).json({
                    message: 'Access denied'
                })
            }
        } else {
            next(new Error('No token provided'))
        }
    } catch (error) {
        next(error)
    }
}
