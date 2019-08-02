import React, { Component } from "react";
import http from "./services/httpService"; // writing the crud libraries seperately
import config from "./config.json"; // seperating apiUrls into another file (json)
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogService from "./services/logService";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    // axios.get() : => promise : => data with handlers in event call back to backend fails
    // await axios.get() : => gets the data alone through async task
    const { data: posts } = await http.get(config.apiEndPoint);
    console.log(posts);
    this.setState({ posts });
  }
  // post method
  // 2 requests sent for CRUD operations
  // a. options request: first checks if the url is safe to access (if settings permit access)
  // b. posts request: posts request then made
  handleAdd = async () => {
    // create a random annoymous object with attributes similar as the objects in the apiEndPoint
    const obj = { title: "new title", body: "new body" };
    const { data: post } = await http.post(config.apiEndPoint, obj); // posting an object returns the object itself
    //updating the front-end array directly
    const posts = [...this.state.posts];
    posts.push(post);
    this.setState({ posts });
  };
  // put method
  handleUpdate = async post => {
    const initialPosts = this.state.posts;
    // patch updates only the property and leaves the rest untouched
    //axios.patch(apiEndPoint + "/" + post.id, {title: post.title});

    // updating the front - end table / array
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    let postCopy = { ...post };
    postCopy.title = "updated_title";
    posts[index] = postCopy;
    this.setState({ posts });

    try {
      // put updates the whole object
      await http.put(config.apiEndPoint + "/" + post.id, post);
    } catch (ex) {
      alert("The update process failed!");
      this.setState({ posts: initialPosts });
    }
  };

  // delete method
  handleDelete = async post => {
    const initialPosts = this.state.posts;
    // removing the post object from the array - front-end
    const posts = [...this.state.posts];
    // delete using splice method
    //const index = posts.indexOf(post);
    //posts.splice(index, 1);

    //or use filter method

    const postsCopy = posts.filter(p => p.id !== post.id);

    this.setState({ posts: postsCopy });

    try {
      await http.delete(config.apiEndPoint + "s" + "/" + post.id);
    } catch (ex) {
      // expected error
      if (ex.response && ex.response.status === 404) {
        LogService.log(ex);
        toast.error("This Post has already been deleted!");
      }

      this.setState({ posts: initialPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
