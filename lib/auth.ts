// Authentication utility functions
export const isAuthenticated = () => {
  // In a real app, this would check JWT tokens or session data
  return !!localStorage.getItem('isAuthenticated');
};

export const login = (email: string, password: string) => {
  // Simulating authentication - in a real app, this would make an API call
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const signup = (name: string, email: string, password: string) => {
  // Simulating signup - in a real app, this would make an API call
  localStorage.setItem('user', JSON.stringify({ name, email }));
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('user');
};