export const setToken = id => {
    localStorage.setItem("token", id);
};

export const removeToken = () => {
    localStorage.removeItem("token");
};

export const getToken = () => {
    return localStorage.getItem("token");
};
