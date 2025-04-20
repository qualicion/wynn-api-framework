import { Test } from 'supertest';
import mainController from "../controller/main.controller";

// Mock response types
interface MockResponse {
  status: number;
  body: any;
}

// Error mock responses
export const invalidDataMock: MockResponse = {
  status: 400,
  body: { error: "Invalid data provided" }
};

export const serverErrorMock: MockResponse = {
  status: 500,
  body: { error: "Internal server error" }
};

// Mocked the createPost method
export const mockCreatePost = (mockResponse: MockResponse): void => {
  jest.spyOn(mainController, 'createPost').mockImplementation(
    (data: { [key: string]: string | number }): Test => {
      return {
        status: mockResponse.status,
        body: mockResponse.body
      } as unknown as Test;
    }
  );
};

