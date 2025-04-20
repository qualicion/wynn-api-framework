import mainController from "../controller/main.controller";
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
});
