import { ZodError } from 'zod';
import handleZodError from '../manageAllTypesErrors/handleZodError';
import handleValidationError from '../manageAllTypesErrors/handleValidationError';
import handleCastError from '../manageAllTypesErrors/handleCastError';
import handleDuplicateError from '../manageAllTypesErrors/handleDuplicateError';
import CustomError from '../manageAllTypesErrors/CustomError';
const processError = (err: any) => {
  if (err instanceof ZodError) return handleZodError(err);
  if (err?.name === 'validationError') return handleValidationError(err);
  if (err?.name === 'CastError') return handleCastError(err);
  if (err?.code === 11000) return handleDuplicateError(err);
  if (err instanceof CustomError) {
    return {
      statusCode: err?.statusCode,
      message: err?.message,
      errorSources: [{ path: '', message: err?.message }],
    };
  }
  if (err instanceof Error) {
    return {
      statusCode: 500,
      message: err.message,
      errorSources: [{ path: '', message: err?.message }],
    };
  }
  return {
    statusCode: 500,
    message: 'Something went wrong!',
    errorSources: [],
  };
};

export default processError;
