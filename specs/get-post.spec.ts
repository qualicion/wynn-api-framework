import mainController from "../controller/main.controller";
import {
  validateCommentStructure,
  validatePostStructure,
} from "../utils/validators";

describe("Routes API", () => {
  describe("Fetch posts", () => {
    it("check number of posts recorded", async () => {
      const response = await mainController.getPosts();

      expect(response.statusCode).toEqual(200);
      expect(Array.isArray(response.body)).toBe(true);

      // Validate structure
      response.body.forEach((post) => {
        validatePostStructure(post);
      });
    });

    it("should return a specific post by ID", async () => {
      const response = await mainController.getPost("1");

      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(1);

      // Validate structure
      validatePostStructure(response.body);
    });

    it("should return 404 for non-existent post", async () => {
      const response = await mainController.getPost("999");

      expect(response.statusCode).toBe(404);
      expect(Object.keys(response.body).length).toBe(0);
    });

    it("should return comments for a specific post", async () => {
      const response = await mainController.getPostComments("1");

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);

      // Verify all comments belong to post 1
      response.body.forEach((comment) => {
        expect(comment.postId).toBe(1);
        validateCommentStructure(comment);
      });
    });

    it("should return empty array for post with no comments", async () => {
      const response = await mainController.getPostComments("9999");

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(0);
    });

    it("should return comments by post ID query parameter", async () => {
      const response = await mainController.getCommentsByPostId("1");

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);

      // Verify all comments belong to post 1
      response.body.forEach((comment) => {
        expect(comment.postId).toBe(1);
        validateCommentStructure(comment);
      });
    });

    it("should return empty array for non-existent post ID", async () => {
      const response = await mainController.getCommentsByPostId("9999");

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(0);
    });
  });
});
