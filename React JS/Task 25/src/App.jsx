import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Take only the first 5 posts from the response data
        this.setState({ posts: response.data.slice(0, 5) });
      })
      .catch((error) => {
        this.setState({ error: 'Error fetching posts' });
        console.error('Error fetching posts:', error);
      });
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        {error && <p className="text-red-500">{error}</p>}
        <ul className="list-disc pl-5 space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
