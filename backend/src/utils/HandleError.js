class HandleError {
    constructor(
        statusCode,
        message = "Something went wrong!"
    ){
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
    }
}

export default HandleError