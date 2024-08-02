import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class RequestHandler {
  static async sendRequest<T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: any,
    config?: AxiosRequestConfig 
  ): Promise<T | null> {
    try {
      const requestConfig: AxiosRequestConfig = {
        method,
        url,
        data,
        ...config,
      };

      const response: AxiosResponse<T> = await axios(requestConfig);
      return await response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
      } else if (error instanceof Error) {
        console.error("General error:", error.message);
      } else {
        console.error("Unknown error occurred");
      }
      return null;
    }
  }
}

export default RequestHandler;
