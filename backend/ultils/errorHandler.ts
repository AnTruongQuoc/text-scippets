// Error Handler Class
module.exports = class ErrorHandler extends Error {
    constructor(message: string) {
        super(message);

        Error.captureStackTrace(this, this.constructor)
    }
}