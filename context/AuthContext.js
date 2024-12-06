// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as Random from 'expo-random';

// Google OAuth Configuration
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const login = async () => {
    try {
      const clientId = 'YOUR_GOOGLE_CLIENT_ID';
      const scopes = ['https://www.googleapis.com/auth/calendar'];
      
      // Generate a random state to prevent CSRF
      const state = Buffer.from(Random.getRandomBytes(16)).toString('hex');

      const authRequest = new AuthSession.AuthRequest({
        clientId,
        scopes,
        redirectUri,
        usePKCE: true,
        state
      });

      const result = await authRequest.promptAsync({ 
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenEndpoint: 'https://oauth2.googleapis.com/token'
      });

      if (result.type === 'success') {
        const { authentication } = result;
        setAccessToken(authentication.accessToken);
        
        // Fetch user info
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`
        );
        const userInfo = await response.json();
        setUser(userInfo);

        return userInfo;
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;