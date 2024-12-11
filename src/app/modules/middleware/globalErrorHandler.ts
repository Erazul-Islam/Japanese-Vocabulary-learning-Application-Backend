import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../../errors/error";
import handleZodError from "../../errors/handleZodError";
import handleValidationError from "../../errors/handleValidationError";
import { ZodError } from "zod";
import handleCastError from "../../errors/handleCastError";
import handleDuplicateError from "../../errors/handleDuplicateError";
import AppError from "../../errors/AppError";

const globalErrorHandler = (err : any, req : any, res : any, next : any) => {
    let statusCode = 500;
    let message = 'Something went wrong!';
    let errorSources: TErrorSources = [
      {
        path: '',
        message: 'Something went wrong',
      },
    ];
  
    if (err instanceof ZodError) {
      const simplifiedError = handleZodError(err);
      statusCode = simplifiedError?.statusCode;
      message = simplifiedError?.message;
      errorSources = simplifiedError?.errorSources;
    } else if (err?.name === 'ValidationError') {
      const simplifiedError = handleValidationError(err);
      statusCode = simplifiedError?.statusCode;
      message = simplifiedError?.message;
      errorSources = simplifiedError?.errorSources;
    } else if (err?.name === 'CastError') {
      const simplifiedError = handleCastError(err);
      statusCode = simplifiedError?.statusCode;
      message = simplifiedError?.message;
      errorSources = simplifiedError?.errorSources;
    } else if (err?.code === 11000) {
      const simplifiedError = handleDuplicateError(err);
      statusCode = simplifiedError?.statusCode;
      message = simplifiedError?.message;
      errorSources = simplifiedError?.errorSources;
    } else if (err instanceof AppError) {
      statusCode = err?.statusCode;
      message = err.message;
      errorSources = [
        {
          path: '',
          message: err?.message,
        },
      ];
    } else if (err instanceof Error) {
      message = err.message;
      errorSources = [
        {
          path: '',
          message: err?.message,
        },
      ];
    }
  
    //ultimate return
    return res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      err,
    });
  };
  
  export default globalErrorHandler;