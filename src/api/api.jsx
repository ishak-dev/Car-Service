import axios from "axios";
const token = localStorage.getItem("token");
let id = localStorage.getItem("id");
let carServiceId = localStorage.getItem("user_car");
export const getAllCustomers = () => {
  return axios
    .get("https://flight-carservice.onrender.com/rest/customer", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data);
};

export const getAllVehicle = () => {
  return axios
    .get("https://flight-carservice.onrender.com/rest/vehicle", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const addUser = (data) => {
  return axios
    .post("https://flight-carservice.onrender.com/rest/addCustomer", {
      ...data,
    })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const allParts = () => {
  return axios
    .get("https://flight-carservice.onrender.com/rest/part", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const addPart = async (data) => {
  return await axios
    .post("https://flight-carservice.onrender.com/rest/part", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
export const updatePart = async (data, id) => {
  return await axios
    .put(`https://flight-carservice.onrender.com/rest/part/${id}`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const getPartById = (id) => {
  return axios
    .get(`https://flight-carservice.onrender.com/rest/part/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const allUserOrders = () => {
  return axios
    .get(`https://flight-carservice.onrender.com/rest/orders/user`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const allUserServices = async () => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/serviceByUser`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const allServices = async () => {
  return await axios
    .get(`https://flight-carservice.onrender.com/rest/service`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const getVehicleByCarId = async (id) => {
  return await axios
    .get(`https://flight-carservice.onrender.com/rest/vehicle/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
export const getVehicleById = async () => {
  return await axios
    .get(`https://flight-carservice.onrender.com/rest/getVehicle`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const addVehicle = async (data) => {
  axios
    .post("https://flight-carservice.onrender.com/rest/addVehicle", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getServiceTypes = async () => {
  return await axios
    .get(`https://flight-carservice.onrender.com/rest/servicetype`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
export const getServiceTypesById = async (id) => {
  console.log(id);
  return await axios
    .get(`https://flight-carservice.onrender.com/rest/servicetype/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
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

  data.order_date = formattedToday;
  data.quantity = quantity;
  data.part_id = localStorage.getItem("itemId");
  data.approved = "false";
  // let stringifyData = JSON.stringify(data);
  axios
    .post("https://flight-carservice.onrender.com/rest/order", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getAllOrders = async () => {
  return await axios
    .get(`https://flight-carservice.onrender.com/rest/order`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const getUserById = (id) => {
  return axios
    .get(`https://flight-carservice.onrender.com/rest/customer/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const updateOrder = async (id) => {
  return axios
    .post(
      `https://flight-carservice.onrender.com/rest/order_update/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const addServiceAppointment = async (
  option,
  date,
  description,
  hours
) => {
  let data = {};
  data.ServiceDate = date;
  data.description = description;
  data.serviceTypeId = option;
  data.hours = hours;
  console.log(data);
  return await axios
    .post("https://flight-carservice.onrender.com/rest/service", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const login = async (data) => {
  return await axios
    .post(`https://flight-carservice.onrender.com/rest/userLogin`, data)
    .then((response) => {
      localStorage.setItem("token", response.data.token),
        console.log(response.data);
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
