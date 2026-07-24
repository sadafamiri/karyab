"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  register: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function register(name: string, email: string, password: string) {
    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));
  }

  function login(email: string, password: string) {
    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) return false;

    const parsedUser: User = JSON.parse(savedUser);

    if (parsedUser.email === email && parsedUser.password === password) {
      setUser(parsedUser);

      localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));

      return true;
    }

    return false;
  }

  function logout() {
    setUser(null);

    localStorage.removeItem("loggedInUser");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
