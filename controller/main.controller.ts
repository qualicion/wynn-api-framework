import * as supertest from "supertest";
import config from "../config/base.config";
const request = supertest(config.baseUrl);

class MainController {
  getPosts() {
    return request.get("/posts");
  }

  getPost(id: string) {
    return request.get(`/posts/${id}`);
  }

  getPostComments(postId: string) {
    return request.get(`/posts/${postId}/comments`);
  }

  getCommentsByPostId(postId: string) {
    return request.get(`/comments?postId=${postId}`);
  }

  createPost(data: { [key: string]: string | number }) {
    return request.post("/posts").send(data);
  }

  updatePost(id: string | number, data: { [key: string]: string | number }) {
    return request.put(`/posts${id}`).send(data);
  }

  modifyPost(id: string | number, data: { [key: string]: string | number}) {
    return request.patch(`/posts/${id}`).send(data);
  }

  deletePost(id: string) {
    return request.delete(`/posts/${id}`);
  }
}

export default new MainController();
