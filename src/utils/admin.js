// simple helpers for admin-related operations (localStorage-backed)

const USERS_KEY = "users";

export function getAllUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveAllUsers(list) {
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}

export function addUser(user) {
  const list = getAllUsers();
  const exists = list.find((u) => u.email === user.email);

  if (!exists) {
    list.push(user);
    saveAllUsers(list);
  }
}

export function deleteUserByEmail(email) {
  const list = getAllUsers().filter((u) => u.email !== email);
  saveAllUsers(list);
}

export function getUserCount() {
  return getAllUsers().length;
}
