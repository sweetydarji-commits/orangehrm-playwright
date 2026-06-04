export class ApiClient {

  constructor(request) {
    this.request = request;
  }

  async getPosts() {
    return await this.request.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  async createPost(data) {
    return await this.request.post(
      'https://jsonplaceholder.typicode.com/posts',
      { data }
    );
  }

  async updatePost(id, data) {
    return await this.request.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { data }
    );
  }

  async deletePost(id) {
    return await this.request.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}