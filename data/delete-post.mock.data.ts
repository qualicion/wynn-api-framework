import { Response } from "supertest";
import mainController from "../controller/main.controller";

// Mock implementations for error scenarios
export const postNotFoundMock = {
  status: 404,
  body: { error: "Post not found" },
};

export const serverErrorMock = {
  status: 500,
  body: { error: "Internal server error" },
};

// Definition type for the mocked responses
interface MockResponse {
  status: number;
  body: any;
}

export const mockDeletePost = (jest: any, mockResponse: MockResponse): void => {
    jest.spyOn(mainController, 'deletePost').mockImplementation(
      async (id: string | number): Promise<Response> => {
        //  Added logic here based on a mocked ID 
        if (id === "999") {
          return postNotFoundMock as unknown as Response;
        }
        return mockResponse as unknown as Response;
      }
    );
  };
