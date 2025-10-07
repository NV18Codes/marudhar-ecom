import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("marudhar_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async (email, password, name, role = "customer") => {
    try {
      // Demo implementation - in production, this would be a backend call
      const users = JSON.parse(localStorage.getItem("marudhar_users") || "[]");
      
      // Check if user already exists
      if (users.find(u => u.email === email)) {
        throw new Error("User already exists");
      }

      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        role,
        createdAt: new Date().toISOString()
      };

      users.push({ ...newUser, password }); // Store with password for demo
      localStorage.setItem("marudhar_users", JSON.stringify(users));
      
      // Set current user (without password)
      const userWithoutPassword = { ...newUser };
      localStorage.setItem("marudhar_user", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signIn = async (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("marudhar_users") || "[]");
      console.log("Available users:", users);
      console.log("Attempting login with:", { email, password });
      
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        console.log("User not found or password incorrect");
        throw new Error("Invalid email or password");
      }

      const userWithoutPassword = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt
      };

      console.log("Login successful:", userWithoutPassword);
      localStorage.setItem("marudhar_user", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
      
      return { success: true };
    } catch (error) {
      console.log("Login error:", error.message);
      return { success: false, error: error.message };
    }
  };

  const signOut = () => {
    localStorage.removeItem("marudhar_user");
    setUser(null);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAdmin: user?.role === "admin",
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
