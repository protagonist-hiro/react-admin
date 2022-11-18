// @ts-nocheck

import axios from "axios";
import decodeJwt from "jwt-decode";

// const servicesHost = "http://rayyapi.tk";
import { servicesHost } from "./data-provider";

const authProvider = {
  login: ({ email, password }: { email: string; password: string }) => {
    const request = {
      method: "POST",
      url: `${servicesHost}/auth/signin`,
      data: {
        email,
        password,
      },
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    return axios(request)
      .then((response) => {
        if (response?.data?.tokens) {
          const refreshToken = response?.data?.tokens?.refreshToken;

          const userId = response?.data?.uid;
          const email = response?.data?.name ? response?.data?.name : "user";

          const decodedToken = decodeJwt(response?.data?.tokens?.refreshToken);
          const accessToken = response?.data?.tokens?.accessToken;
          const user = {
            accessToken,
            refreshToken,
            userId,
            email,
            permission: decodedToken.roles,
          };

          localStorage.setItem("user", JSON.stringify(user));

          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
        } else {
          throw new Error(
            "Something went wrong.Please Try again Sometimes Later."
          );
        }

        // return response?.data?.json();
      })
      .catch((err) => {
        const status = error.status;
        if (status === 401 || status === 403) {
          throw new Error("Please enter valid Email or Password.");
        }
        throw new Error(
          "Something went wrong.Please Try again Sometimes Later."
        );
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () => {
    const user: any = JSON.parse(localStorage.getItem("user"));

    return Promise.resolve({
      id: user.userId,
      fullName: user.email,
    });
  },
  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
