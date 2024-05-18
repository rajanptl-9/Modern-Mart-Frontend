export const logout = (message) => {
    if (message === "Authorized token expired! Please log in again." || message === "Cannot read properties of undefined (reading 'rejectWithValue')") {
        localStorage.clear();
        setTimeout(() => {
            window.location.replace("/login")
        }, 1000);
    }
}