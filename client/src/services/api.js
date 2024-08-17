// Define the base URL for the API
const API_BASE_URL = "http://localhost:8080/api";

export async function createUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "An unexpected error occurred");
    }

    const data = await response.json();

    console.log("Registration response data:", data); // Debug log

    // Check if the response contains the expected user data
    if (data.user) {
      sessionStorage.setItem("user", JSON.stringify(data.user)); // Save user details
    } else {
      console.error("Unexpected response format:", data);
    }

    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Login response data:", data); // Debug log

    // Check if the response contains the expected user data
    if (data.user) {
      sessionStorage.setItem("user", JSON.stringify(data.user)); // Save user details in sessionStorage
    } else {
      console.error("Unexpected response format:", data);
    }

    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// New function to fetch all users
export async function fetchAllUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
}

export async function updateUser(userId, userUpdates) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdates),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

// Thread functions
export async function createThread(threadData) {
  try {
    const response = await fetch(`${API_BASE_URL}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(threadData),
    });

    if (!response.ok) {
      // Capture and return detailed error message
      const errorData = await response.json();
      throw new Error(errorData.error || response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
}

export async function getThreadById(threadId) {
  try {
    const response = await fetch(`${API_BASE_URL}/threads/${threadId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching thread:", error);
    throw error;
  }
}

// New function to fetch all threads
export async function fetchAllThreads() {
  try {
    const response = await fetch(`${API_BASE_URL}/threads`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all threads:", error);
    throw error;
  }
}

export async function updateThread(threadId, threadUpdates) {
  try {
    const response = await fetch(`${API_BASE_URL}/threads/${threadId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(threadUpdates),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating thread:", error);
    throw error;
  }
}

export async function deleteThread(threadId) {
  try {
    const response = await fetch(`${API_BASE_URL}/threads/${threadId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting thread:", error);
    throw error;
  }
}

// Reply functions
export async function createReply(replyData) {
  try {
    const response = await fetch(`${API_BASE_URL}/replies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replyData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating reply:", error);
    throw error;
  }
}

export async function getReplyById(replyId) {
  try {
    const response = await fetch(`${API_BASE_URL}/replies/${replyId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching reply:", error);
    throw error;
  }
}

export async function fetchRepliesForThread(threadId) {
  try {
    const response = await fetch(`${API_BASE_URL}/replies/thread/${threadId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching replies for thread:", error);
    throw error;
  }
}

// New function to fetch all replies
export async function fetchAllReplies() {
  try {
    const response = await fetch(`${API_BASE_URL}/replies`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all replies:", error);
    throw error;
  }
}

export async function updateReply(replyId, replyUpdates) {
  try {
    const response = await fetch(`${API_BASE_URL}/replies/${replyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replyUpdates),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating reply:", error);
    throw error;
  }
}
// Update the status of a reply
export async function updateReplyStatus(replyId, status) {
  try {
    const response = await fetch(`${API_BASE_URL}/replies/${replyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }), // Only sending the status field
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating reply status:", error);
    throw error;
  }
}

export async function deleteReply(replyId) {
  try {
    const response = await fetch(`${API_BASE_URL}/replies/${replyId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting reply:", error);
    throw error;
  }
}
