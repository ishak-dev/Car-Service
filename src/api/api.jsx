import axios from "axios";

let id = localStorage.getItem("id");
let carServiceId = localStorage.getItem("user_car");
export const getAllCustomers = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/customer")
    .then((res) => res.data);
};

export const getAllVehicle = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/vehicle")
    .then((res) => console.log(res));
};

export const addUser = (data) => {
  axios
    .post("http://localhost/carservice-backend/rest/customer", {
      ...data,
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
    .get(`http://localhost/carservice-backend/rest/orders/${id}`)
    .then((response) => response.data);
};

export const allUserServices = async () => {
  return await axios
    .get(
      `http://localhost/carservice-backend/rest/serviceByUser/${carServiceId}`
    )
    .then((response) => response.data);
};

export const getVehicleById = (id) => {};

export const getServiceTypes = async () => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/servicetype`)
    .then((response) => response.data);
};
export const getServiceTypesById = async (id) => {
  console.log(id);
  return await axios
    .get(`http://localhost/carservice-backend/rest/servicetype/${id}`)
    .then((response) => response.data);
};

export const postOrder = (quantity) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + "-" + mm + "-" + dd;
  let data = {};
  data.customer_id = id;
  data.order_date = formattedToday;
  data.quantity = quantity;
  data.part_id = localStorage.getItem("itemId");
  data.approved = "false";
  // let stringifyData = JSON.stringify(data);
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

export const addServiceAppointment = async (
  option,
  date,
  description,
  hours
) => {
  let data = {};

  data.vehicleID = carServiceId;
  data.ServiceDate = date;
  data.description = description;
  data.serviceTypeId = option;
  data.hours = hours;
  console.log(data);
  return await axios
    .post("http://localhost/carservice-backend/rest/service", data)
    .then((res) => res.data);
};
