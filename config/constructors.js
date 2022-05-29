function response (data)  {
    this.status = 'success',
    this.data = {
        data
    }
}

function ServerError (error) {
    this.status = 'fail',
    this.data = {
        message: 'خطای سرور',
        messageEN: 'Server error',
        error: error
    }
}

function ParameterError (error) {
    this.status ='fail',
    this.data = {
        message: 'خطای در پارامترهای ورودی',
        messageEN: 'Input error',
        error: error
    }
}

module.exports = {
    response,
    ServerError,
    ParameterError
}