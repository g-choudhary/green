import axios from "axios";
import React from "react";
let user_token = localStorage.getItem("user_token");
let apiUrl='http://192.168.29.108:8888';

export const updateCart = async (props, qty) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL}/cart_update/${props.id}`,
    {
      user_id: props.user_id,
      product_id: props.product_id,
      cart_product_quantity: qty,
    },
    {
      headers: {
        user_token,
      },
    }
  );
  return response.data;
};

export const fetchcartdata = async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL}/cart_list`,
    {
      user_id: "",
    },
    {
      headers: { user_token },
    }
  );
  return response.data;
};

export const deleteCart = async (id, user_id) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASEURL}/cart_delete`,
    {
      user_id: user_id,
      id: id,
    },
    {
      headers: { user_token },
    }
  );
  return response.data;
};

export const userdetails = async () => {
  const response = await axios.get(
    `${apiUrl}/user_details`,

    {
      headers: { user_token },
    }
  );
  return response.data;
};

export const allproduct = async (
  searchbox,
  price_from,
  price_to,
  showcategorydata,
  currentPage,
  recordsPerPage
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASEURL_0}/search?page=${currentPage}&per_page=${recordsPerPage}`,
    {
      price_from: price_from,
      price_to: price_to,
      search: searchbox,
      category: [],
      rating: showcategorydata,
      brand: [],
      seo_tag: [],
      vendor_id: [],
      name: [],
    },
    {
      headers: { user_blank: true },
    }
  );
  return response.data;
};