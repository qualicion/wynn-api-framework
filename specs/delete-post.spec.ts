import mainController from "../controller/main.controller";
import { mockDeletePost, postNotFoundMock } from "../data/delete-post.mock.data";

describe("Delete post", () => {
  it("should successfully delete a post and return empty response", async () => {
    const deletedPostResponse = await mainController.deletePost("11");

    expect(deletedPostResponse.status).toEqual(200);

    expect(deletedPostResponse.body).toEqual({});
  });

  it("should return 404 when deleting non-existent post", async () => {
    // Mocked only for this test
    mockDeletePost(jest, postNotFoundMock);

    const deletedPostResponse = await mainController.deletePost("999");
    expect(deletedPostResponse.status).toEqual(404);
    expect(deletedPostResponse.body.error).toEqual("Post not found");
  });
});
