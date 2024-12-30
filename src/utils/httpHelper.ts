/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 18:30
* @Description: Creating a helper to handle with data and httpCodes
*****************************************************************************************/

// ===== IMPORTS
import { BaseResponseAPI } from "../models"

const OK = async (data: any): Promise<BaseResponseAPI> => {
    return {
        body: data,
        statusCode: 200
    }
}

const NoContent = async (): Promise<BaseResponseAPI> => {
    return {
        body: null,
        statusCode: 204
    }
}

const BadRequest = async (error?: any): Promise<BaseResponseAPI> => {
    return {
        body: error ?? null,
        statusCode: 400
    }
}

const Created = async (data: any): Promise<BaseResponseAPI> => {
    return {
        body: data ?? null,
        statusCode: 201
    }
}

export default {
    OK,
    Created,
    NoContent,
    BadRequest
}