const exec = async (url, options = {} ) => {
  try{
    const res = await fetch(url, options);
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
  
}

const get = async (url) => {
  return exec(url);
};

const post = async (url, body) => {
  return exec(url, {
    method: "POST",
    body: body,
  });
};

const put = async (url, body) => {
  return exec(url, {
    method: "PUT",
    body: body,
  });
};

const delet = async (url) => {
  exec(url, {
    method: "DELETE",
  });
};

const api = {
  get: (url) => get(url),
  post: (url, body) => post(url, body),
  put: (url, body) => put(url, body),
  delete: (url) => delet(url)
}

export default api