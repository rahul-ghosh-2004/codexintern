const signup_url = String(import.meta.env.VITE_SIGNUP)
const login_url = String(import.meta.env.VITE_LOGIN)
const logout_url = String(import.meta.env.VITE_LOGOUT)
const current_admin_url = String(import.meta.env.VITE_CURRENT_ADMIN)

const upload_intern_data = String(import.meta.env.VITE_UPLOAD_DATA)
const find_data = String(import.meta.env.VITE_FIND_DATA)
const apply_intern = String(import.meta.env.VITE_APPLYINTERN_APPLY)

export {
    signup_url,
    login_url,
    logout_url,
    current_admin_url,
    upload_intern_data,
    find_data,
    apply_intern
}