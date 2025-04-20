import mainController from "../controller/main.controller";

describe("Delete post", () => {
    it("should successfully delete a post and return empty response", async () => {
      const deletedPostResponse = await mainController.deletePost("11");

      expect(deletedPostResponse.status).toEqual(200);

      expect(deletedPostResponse.body).toEqual({});
    });
  });