export const handleError = (err, req, res, next) => {
    const statusCode = err.statusCode || 400
    res.statusCode(statusCode).json({
        message: err.message,
        stack: process.env.ENV_MODE == "production" ? null :  err.stack
    })
}

export const invalidPathError = (req, res, next) => {
    let error = new Error('invalid path')
    error.statusCode = 404
    next(error)
}