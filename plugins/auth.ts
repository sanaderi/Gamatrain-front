import { ref } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  // Create an auth object to manage authentication
  const user = ref(null);
  const auth = {

    setUser(user: any) {
      localStorage.setItem("user", JSON.stringify(user));
    },
     getUser() {
      if (!user.value && process.client) {
        const storedUser = localStorage.getItem("user");
        user.value = storedUser ? JSON.parse(storedUser) : null;
      }
      return user.value;
    },
    setUserToken(token: string) {
      localStorage.setItem("token", token);
    },
    getUserToken() {
      return localStorage.getItem("token");
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    loggedIn() {
      let token = false;
      if(process.client)
         token = localStorage.getItem("token");
      return !!token; // Returns true if a token exists, false otherwise
    },
    get user() {
      return user.value; // Access the reactive user
    },
  };

  // Provide $auth globally
  nuxtApp.provide("auth", auth);
});
