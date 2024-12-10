export const buildResponse = (status: string, data: any, message: string = null) => {
    return {
      status,
      data,
      message,
    };
  };
  