import axios from "axios";

let id = localStorage.getItem("id");
let carServiceId = localStorage.getItem("user_car");
export const getAllCustomers = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/customer")
    .then((res) => console.log(res));
};

export const getAllVehicle = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/vehicle")
    .then((res) => console.log(res));
};

export const addUser = (data) => {
  axios("http://localhost/carservice-backend/rest/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const allParts = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/part")
    .then((response) => response.data);
};

export const getPartById = (id) => {
  return axios
    .get(`http://localhost/carservice-backend/rest/part/${id}`)
    .then((response) => response.data);
};

export const allUserOrders = () => {
  return axios
    .get(`http://localhost/carservice-backend/rest/order/${id}`)
    .then((response) => response.data);
};

export const allUserServices = () => {
  return axios
    .get(`http://localhost/carservice-backend/rest/service/${carServiceId}`)
    .then((response) => response.data);
};

export const getVehicleById = (id) => {};

export const getServiceTypes = () => {};

export const postOrder = (quantity) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  let data = {};
  data.id = "2";

  let stringifyData = JSON.stringify(data);
  axios
    .post("http://localhost/carservice-backend/rest/order", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getAllOrders = () => {
  return axios
    .get(`http://localhost/carservice-backend/rest/order`)
    .then((response) => response.data);
};

export const getUserById = (id) => {
  return axios
    .get(`http://localhost/carservice-backend/rest/customer/${id}`)
    .then((response) => response.data);
};

export const updateOrder = async (id) => {
  return axios
    .post(`http://localhost/carservice-backend/rest/order_update/${id}`)
    .then((response) => response.data);
};
