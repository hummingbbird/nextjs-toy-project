export const getUserData = async () => {
    const resp = await fetch("http://localhost:3000/users");
    const data = await resp.json();
    return data;   
}