/* eslint-disable no-undef */
import React from 'react';
import { Spinner } from 'react-bootstrap';

export const baseLink = 'http://localhost:5105/';

export const afetch = {
  Loader: () => <Spinner className="spinner" animation="grow" />,
  postf: async (url, body) => {
    // let formData = JSON.stringify(body);
    // let formData = new FormData();
    // //  //console.log(body)
    // for (const key in body) {
    //     if (body.hasOwnProperty(key)) {
    //         const element = body[key];
    //          //console.log(element)
    //         formData.append(key, element)
    //     }
    // };
    //  //console.log(formData)
    try {
      const resp = await fetch(baseLink + url, {
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,

        },
        // credentials: 'same-origin'
        // redirect: "follow"
      });
      //  //console.log("hy", resp.url)
      const rResp1 = await resp.json();
      //  //console.log("hy", resp_1.url)
      return rResp1;
    } catch (err) {
      //  //console.log(err.url);
      return {
        success: false,
        message: err.message,
      };
    }
  },
  post: async (url, body) => {
    const formData = JSON.stringify(body);
    // let formData = new FormData();
    // //  //console.log(body)
    // for (const key in body) {
    //     if (body.hasOwnProperty(key)) {
    //         const element = body[key];
    //          //console.log(element)
    //         formData.append(key, element)
    //     }
    // };
    //  //console.log(formData)
    try {
      const resp = await fetch(baseLink + url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        // credentials: 'same-origin'
        // redirect: "follow"
      });
      //  //console.log("hy", resp.url)
      const Resp2 = await resp.json();
      //  //console.log("hy", resp_1.url)
      return Resp2;
    } catch (err) {
      //  //console.log(err.url);
      return {
        success: false,
        message: err.message,
      };
    }
  },
  put: async (url, body) => {
    try {
      const resp = await fetch(baseLink + url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const Resp1 = await resp.json();
      return Resp1;
    } catch (err) {
      return err;
    }
  },
  delete: async (url) => {
    try {
      const resp = await fetch(baseLink + url, {
        method: 'DELETE',
        // body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,

        },
      });
      const Resp1 = await resp.json();
      return Resp1;
    } catch (err) {
      return err;
    }
  },
  // Loader: <Spinner animation="grow" />,

};
