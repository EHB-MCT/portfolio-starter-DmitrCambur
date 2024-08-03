import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EHBLogo from "../assets/images/EHBLOGO.png"; // Adjust the path as necessary

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const posts = [
    { username: "user1", question: "How do I reset my password?" },
    { username: "user2", question: "What are the library hours?" },
    { username: "user3", question: "How can I join a club?" },
  ];

  const handlePost = () => {
    // Handle post creation logic here
    setIsModalOpen(false);
  };

  return (
    <div className="w-screen h-screen bg-primary font-jetbrains">
      <nav className="bg-secondary p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={EHBLogo} alt="EHB Logo" className="h-10" />
          <span className="ml-4 text-primary font-bold text-xl">
            Student Forum
          </span>
        </div>
        <button
          className="bg-primary hover:bg-blue-800 text-secondary font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </nav>
      <div className="flex justify-center">
        <div
          className="mb-10 mt-4 p-4 bg-primary text-secondary shadow cursor-pointer flex items-center w-full max-w-xl"
          onClick={() => setIsModalOpen(true)}
        >
          <i className="fas fa-plus mr-5 text-3xl"></i>
          <div>
            <p className="font-bold text-xl">Create a Post</p>
            <p className="text-sm mt-1">
              Click here to share your question or discussion topic
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 w-full max-w-3xl mx-auto bg-secondary mt-4 space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-4">Forum Feed</h2>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="p-4 bg-primary text-secondary shadow">
                <p className="font-bold">{post.username}</p>
                <p>{post.question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5">
          <div className="bg-secondary p-6 shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create a Post</h2>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                maxLength="2000"
                style={{ resize: "none", height: "400px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary border-primary focus:ring-0"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  style={{
                    appearance: "none",
                    backgroundColor: isAnonymous ? "black" : "white",
                    borderColor: "black",
                  }}
                />
                <span className="ml-2 text-primary">Post Anonymously</span>
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-primary hover:bg-blue-800 text-secondary font-bold py-2 px-4 focus:outline-none focus:shadow-outline mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-primary hover:bg-blue-800 text-secondary font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
