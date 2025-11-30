// ================================
// Read all users from localStorage
// ================================
export const getAllUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

// ================================
// Save all users
// ================================
export const saveAllUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// ================================
// Save active logged-in user
// ================================
export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// ================================
// Get active logged-in user
// ================================
export const getUser = () => {
  const u = localStorage.getItem("user");
  return u ? JSON.parse(u) : null;
};

// ================================
// Remove logged-in user
// ================================
export const logoutUser = () => {
  localStorage.removeItem("user");
};


// ================================
// SIGNUP — prevents duplicates
// ================================
export const signupUser = (newUser) => {
  let users = getAllUsers();

  // Check if email exists already
  const exists = users.find((u) => u.email === newUser.email);

  if (exists) {
    return { success: false, message: "Email already registered!" };
  }

  // Save new user
  users.push(newUser);
  saveAllUsers(users);

  return { success: true, message: "Signup successful." };
};


// ================================
// LOGIN — verifies credentials
// ================================
export const loginUser = (email, password) => {
  let users = getAllUsers();

  const found = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!found) {
    return { success: false, message: "Invalid email or password!" };
  }

  // Save logged-in user
  saveUser(found);

  return { success: true, user: found };
};


// ================================
// Check If Logged In
// ================================
export const isLoggedIn = () => {
  return localStorage.getItem("user") ? true : false;
};

