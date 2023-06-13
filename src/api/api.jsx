import axios from "axios";
const token = localStorage.getItem("token");
let id = localStorage.getItem("id");
let carServiceId = localStorage.getItem("user_car");
export const getAllCustomers = () => {
  return axios
    .get(
      "http://carserviceburch.great-site.net/carservice-backend/rest/customer",
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => res.data);
};

export const getAllVehicle = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/vehicle", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res));
};

export const addUser = (data) => {
  axios
    .post(
      "http://localhost/carservice-backend/rest/customer",
      {
        headers: {
          Authorization: token,
        },
      },
      {
        ...data,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const allParts = () => {
  return axios
    .get("http://localhost/carservice-backend/rest/part", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const addPart = async (data) => {
  return await axios
    .post("http://localhost/carservice-backend/rest/part", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};
export const updatePart = async (data, id) => {
  return await axios
    .put(`http://localhost/carservice-backend/rest/part/${id}`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const getPartById = (id) => {
  return axios
    .get(`http://localhost/carservice-backend/rest/part/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const allUserOrders = () => {
  return axios
    .get(`http://localhost/carservice-backend/rest/orders/user`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const allUserServices = async () => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/serviceByUser`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const allServices = async () => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/service`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const getVehicleByCarId = async (id) => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/vehicle/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};
export const getVehicleById = async () => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/getVehicle`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const addVehicle = async (data) => {
  axios
    .post("http://localhost/carservice-backend/rest/addVehicle", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getServiceTypes = async () => {
  return await axios
    .get(`http://localhost/carservice-backend/rest/servicetype`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};
export const getServiceTypesById = async (id) => {
  console.log(id);
  return await axios
    .get(`http://localhost/carservice-backend/rest/servicetype/${id}`, {
      headers: {
        Authorization: token,
      },
    })
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

  data.order_date = formattedToday;
  data.quantity = quantity;
  data.part_id = localStorage.getItem("itemId");
  data.approved = "false";
  // let stringifyData = JSON.stringify(data);
  axios
    .post("http://localhost/carservice-backend/rest/order", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getAllOrders = () => {
  return axios
    .get(`http://localhost/carservice-backend/rest/order`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const getUserById = (id) => {
  return axios
    .get(`http://localhost/carservice-backend/rest/customer/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const updateOrder = async (id) => {
  return axios
    .post(
      `http://localhost/carservice-backend/rest/order_update/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => response.data);
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
    .post("http://localhost/carservice-backend/rest/service", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data);
};

export const login = async (data) => {
  return await axios
    .post(`http://localhost/carservice-backend/rest/userLogin`, data)
    .then((response) => {
      localStorage.setItem("token", response.data.token),
        window.location.reload();
    })
    .catch((err) => err.response.data.message);
};
