const SUCCESS = "success"
const FAIL = "fail"
const ERROR = "error"

export class Responses {

    static success(data) {
        return { status: SUCCESS, data: data }
    }

    static fail(data) {
        return { status: FAIL, data: data }
    }

    static error(msg) {
        return { status: ERROR, message: msg }
    }

}


