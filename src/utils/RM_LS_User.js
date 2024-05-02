const Remove_user = async (message) => {    
    if(message === "Authorized token expired! Please log in again." || message === "Cannot read properties of undefined (reading 'rejectWithValue')") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem('wishlist');
        localStorage.removeItem('rzp_device_id');
        localStorage.removeItem("rzp_checkout_anon_id");
        window.location.replace("/login");
    }
}
export default Remove_user;