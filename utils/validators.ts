export const validatePostStructure = (post) => {
    expect(post).toHaveProperty("userId");
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
    
    expect(typeof post.userId).toBe("number");
    expect(typeof post.id).toBe("number");
    expect(typeof post.title).toBe("string");
    expect(typeof post.body).toBe("string");
  };
  
  // Add more validators as needed
  export const validateCommentStructure = (comment) => {
    expect(comment).toHaveProperty("postId");
    expect(comment).toHaveProperty("id");
    expect(comment).toHaveProperty("name");
    expect(comment).toHaveProperty("email");
    expect(comment).toHaveProperty("body");
    
    expect(typeof comment.postId).toBe("number");
    expect(typeof comment.id).toBe("number");
    expect(typeof comment.name).toBe("string");
    expect(typeof comment.email).toBe("string");
    expect(typeof comment.body).toBe("string");
  };