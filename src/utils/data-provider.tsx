// @ts-nocheck
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const servicesHost =
  "https://c06c-2400-1a00-bd20-e146-b9cf-2e53-c0b6-dfe.in.ngrok.io";
// const servicesHost = "http://rayyapi.tk";

const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;
  for (const property in obj) {
    if (obj.hasOwnProperty(property) && obj[property]) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }
      // if the property is an object, but not a File,
      // use recursivity.
      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        objectToFormData(obj[property], fd, property);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};

const httpClient = (url, options) => {
  // if (!options.headers) {
  //     options.headers = new Headers({ Accept: 'application/json' });
  // }
  // const token = localStorage.getItem('token');
  // options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(servicesHost, httpClient);

export const myDataProvider = {
  ...dataProvider,
  create: (resource: any, params: any) => {
    const objectFromForm = params.data;
    let isFormWithFile = false;
    //go through each value in object, and if a value has rawFile property, then it is a file
    const transformed = {};
    for (const [key, value] of Object.entries(objectFromForm)) {
      //does value have rawFile property and is it instance of File
      if (value?.rawFile instanceof File) {
        isFormWithFile = true;
        transformed[key] = value.rawFile;
      } else {
        transformed[key] = value;
      }
    }
    return httpClient(`${servicesHost}/${resource}`, {
      method: "POST",
      body: isFormWithFile
        ? objectToFormData(transformed)
        : JSON.stringify(transformed),
    }).then(({ json }) => ({ data: json }));
  },
  update: (resource: any, params: any) => {
    console.log({ params });
    const objectFromForm = params.data;
    let isFormWithFile = false;
    //go through each value in object, and if a value has rawFile property, then it is a file
    const transformed = {};
    for (const [key, value] of Object.entries(objectFromForm)) {
      //does value have rawFile property and is it instance of File
      if (value?.rawFile instanceof File) {
        isFormWithFile = true;
        transformed[key] = value.rawFile;
      } else {
        transformed[key] = value;
      }
    }
    return httpClient(`${servicesHost}/${resource}/${params.data.id}`, {
      method: "PUT",
      body: isFormWithFile
        ? objectToFormData(transformed)
        : JSON.stringify(transformed),
    }).then(({ json }) => ({ data: json }));
  },
};