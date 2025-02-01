import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  AboutUs,
  ContactUs,
  Home,
  Internship,
  Training,
  Verify,
  Login,
  Dashboard,
  Intern,
  TermsAndConditions,
  Refund,
  ApplyIntern,
  PrivacyPolicy,
  TempPay
} from "./components/xo.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      // {
      //   path: "internships",
      //   element: <Internship />
      // },
      {
        path: "trainings",
        element: <Training />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "contact",
        element: <ContactUs />
      },
      {
        path: "verify",
        element: <Verify />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "terms&conditions",
        element: <TermsAndConditions />
      },
      {
        path: "refund_policy",
        element: <Refund />
      },
      {
        path: "privacy_policy",
        element: <PrivacyPolicy />
      },
      {
        path: "pouwdkjhiuyscjhgZXMbjkjzchkjhckj",
        element: <ApplyIntern />
      },
      {
        path: "temp_pay",
        element: <TempPay />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Intern />
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
