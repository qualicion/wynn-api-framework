import mainController from "../controller/main.controller";
import { postData, updateData, updateSomeData } from "../data/route.data";
import { validatePostStructure } from "../utils/validators";

describe("Update post", () => {
  describe("Update specific post", () => {
    let createdPostResponse;

    beforeEach(async () => {
      createdPostResponse = await mainController.createPost(postData);
    });

    it("should create a post with correct data", async () => {
      expect(createdPostResponse.status).toEqual(201);
      expect(createdPostResponse.body.title).toEqual(postData.title);
      expect(createdPostResponse.body.body).toEqual(postData.body);
      expect(createdPostResponse.body.userId).toEqual(postData.userId);
      validatePostStructure(createdPostResponse.body);
    });

    it("should return error when attempting to update a non-existent post", async () => {
      const updatedPostResponse = await mainController.updatePost(
        updateData.userId,
        updateData
      );

      expect(updatedPostResponse.status).toEqual(404);
      expect(updatedPostResponse.body.error).toBeUndefined();
    });
  });

  describe("Update post partially", () => {
    let getPostResponse;

    beforeEach(async () => {
      getPostResponse = await mainController.getPost("11");
    });

    it("should partially update a post with only the specified fields", async () => {
      const partiallyUpdatedPostResponse = await mainController.modifyPost(
        updateData.userId,
        updateSomeData
      );

      expect(partiallyUpdatedPostResponse.status).toEqual(200);

      expect(partiallyUpdatedPostResponse.body.title).toEqual(
        getPostResponse.body.title
      );
      expect(partiallyUpdatedPostResponse.body.body).toEqual(
        updateSomeData.body
      );

      validatePostStructure(partiallyUpdatedPostResponse.body);
    });
  });
});
