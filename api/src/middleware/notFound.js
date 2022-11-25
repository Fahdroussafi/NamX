export const notFound = ((req, res, next) => {
    const error = new Error(` ${req.originalUrl} 🚑 I think you are lost 🤦‍♀️🤦‍♀️ `)
    next(error);
})