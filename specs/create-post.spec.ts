import mainController from "../controller/main.controller";
import { invalidDataMock, mockCreatePost } from "../data/create-post.mock.data";
import { serverErrorMock } from "../data/delete-post.mock.data";
import { postData } from "../data/route.data";
import { validatePostStructure } from "../utils/validators";

describe("Create post", () => {
  it("creates a new post with correct status and data", async () => {
    const createdPostResponse = await mainController.createPost(postData);

    expect(createdPostResponse.status).toEqual(201);
    expect(createdPostResponse.body.title).toEqual(postData.title);
    expect(createdPostResponse.body.body).toEqual(postData.body);
    expect(createdPostResponse.body.userId).toEqual(postData.userId);

    validatePostStructure(createdPostResponse.body);
  });

  it("returns 400 error when creating a post with invalid data", async () => {
    mockCreatePost(invalidDataMock);
    
    // Create post with invalid data
    const invalidData = { userId: 1 }; // Missing title and body
    const response = await mainController.createPost(invalidData);
    
    expect(response.status).toEqual(400);
    expect(response.body.error).toEqual("Invalid data provided");
  });

  it("returns 500 error when server fails during post creation", async () => {
    mockCreatePost(serverErrorMock);
    
    const response = await mainController.createPost(postData);
    
    expect(response.status).toEqual(500);
    expect(response.body.error).toEqual("Internal server error");
  });

});