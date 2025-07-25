import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../Pages/Dashboard";




import  ListJs2 from "../Pages/Tables2/ListTables/ListTables2.js";
import ListJs3 from "../Pages/Table3/ListTables/ListTables2.js";


// Import Calender
import Calender from "../Pages/Calender";


// Import E-mail
import Inbox from "../Pages/E-mail/Inbox";
import ReadEmail from "../Pages/E-mail/ReadEmail";
import EmailCompose from "../Pages/E-mail/EmailCompose";

// Import Authentication pages
import Login from "../Pages/Authentication/Login";
import ForgetPasswordPage from "../Pages/Authentication/ForgetPassword";
import Logout from "../Pages/Authentication/Logout";
import Register from "../Pages/Authentication/Register";
import UserProfile from "../Pages/Authentication/user-profile";

// Import Authentication Inner Pages
import Login1 from "../Pages/AuthenticationPages/Login";
import Register1 from "../Pages/AuthenticationPages/Register";
import RecoverPassword from "../Pages/AuthenticationPages/RecoverPassword";
import LockScreen from "../Pages/AuthenticationPages/LockScreen";

// Import Utility Pages
import StarterPage from "../Pages/Utility/Starter-Page";
import Maintenance from "../Pages/Utility/Maintenance-Page";
import ComingSoon from "../Pages/Utility/ComingSoon-Page";
import TimeLine from "../Pages/Utility/TimeLine-Page";
import FAQs from "../Pages/Utility/FAQs-Page";
import Pricing from "../Pages/Utility/Pricing-Page";
import Error404 from "../Pages/Utility/Error404-Page";
import Error500 from "../Pages/Utility/Error500-Page";

// Import UIElement Pages
import UiAlerts from "../Pages/UiElements/UiAlerts";
import UiBadge from "../Pages/UiElements/UiBadge";
import UiBreadcrumb from "../Pages/UiElements/UiBreadcrumb";
import UiButtons from "../Pages/UiElements/UiButtons";
import UiCards from "../Pages/UiElements/UiCards";
import UiCarousel from "../Pages/UiElements/UiCarousel";
import UiDropdown from "../Pages/UiElements/UiDropdowns";
import UiGrid from "../Pages/UiElements/UiGrid";
import UiImages from "../Pages/UiElements/UiImages";
import UiLightbox from "../Pages/UiElements/UiLightbox";
import UiModals from "../Pages/UiElements/UiModals";
import UiOffcanvas from "../Pages/UiElements/UiOffcanvas";
import UiRangeSlider from "../Pages/UiElements/UiRangeSlider";
import UiSessionTimeout from "../Pages/UiElements/UiSessionTimeout";
import UiPagination from "../Pages/UiElements/UiPagination";
import UiProgressBars from "../Pages/UiElements/UiProgressBars";
import UiPlaceholders from "../Pages/UiElements/UiPlaceholders";
import UiTabs from "../Pages/UiElements/UiTabs&Accordions";
import UiTypography from "../Pages/UiElements/UiTypography";
import UiToasts from "../Pages/UiElements/UiToasts";
import UiVideo from "../Pages/UiElements/UiVideo";
import UiPopovers from "../Pages/UiElements/UiPopovers&Tooltips";
import UiRating from "../Pages/UiElements/UiRating";

// Import Forms
import FormEditors from "../Pages/Forms/FormEditors";
import FormUpload from "../Pages/Forms/FormUpload";
import FormXeditable from "../Pages/Forms/FormXeditable";
import FormMask from "../Pages/Forms/FormMask";
import FormElements from "../Pages/Forms/FormElements";
import FormAdvanced from "../Pages/Forms/FormAdvanced";
import FormValidations from "../Pages/Forms/FormValidations";
import FormWizard from "../Pages/Forms/FormWizard";

// Import Tables
import BasicTable from "../Pages/Tables/BasicTable.js";
import ListJs from "../Pages/Tables/ListTables/ListTables";
import DataTable from "../Pages/Tables/DataTables/DataTables";


// Import Charts
import ApexCharts from "../Pages/Charts/ApexCharts";
import ChartJs from "../Pages/Charts/ChartjsCharts";
import Sparklinechart from "../Pages/Charts/SparklineCharts";
import FloatChart from "../Pages/Charts/FloatCharts";
import JknobCharts from "../Pages/Charts/JqueryKnobCharts";

// Import Icon Pages
import IconMaterialdesign from "../Pages/Icons/IconMaterialdesign";
import IconFontawesome from "../Pages/Icons/IconFontAwesome";
import IconDripicons from "../Pages/Icons/IconDrip";
import IconBoxicons from "../Pages/Icons/IconBoxicons"

// Import Map Pages
import VectorMaps from "../Pages/Maps/VectorMap";
import GoogleMap from "../Pages/Maps/GoogleMap";


const authProtectedRoutes = [
  //dashboard
  { path: "/dashboard", component: <Dashboard /> },

  { path: "/bhanu", component: <ListJs2 /> },
  {path:"/driver", component:<ListJs3/>},


  // Calender
  { path: "/calendar", component: <Calender /> },

  // Profile
  { path: "/userprofile", component: <UserProfile /> },

  // E-mail
  { path: "/inbox", component: <Inbox /> },
  { path: "/read-email", component: <ReadEmail /> },
  { path: "/compose-email", component: <EmailCompose /> },

  // Utility Pages
  { path: "/pages-starter", component: <StarterPage /> },
  { path: "/pages-timeline", component: <TimeLine /> },
  { path: "/pages-faqs", component: <FAQs /> },
  { path: "/pages-pricing", component: <Pricing /> },

  // UiElements Pages
  { path: "/ui-alerts", component: <UiAlerts /> },
  { path: "/ui-badge", component: <UiBadge /> },
  { path: "/ui-breadcrumb", component: <UiBreadcrumb /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModals /> },
  { path: "/ui-offcanvas", component: <UiOffcanvas /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-sessiontimeout", component: <UiSessionTimeout /> },
  { path: "/ui-pagination", component: <UiPagination /> },
  { path: "/ui-progressbars", component: <UiProgressBars /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-tabs-accordions", component: <UiTabs /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-popovers", component: <UiPopovers /> },
  { path: "/ui-rating", component: <UiRating /> },

  // Forms pages
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-validation", component: <FormValidations /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editor", component: <FormEditors /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-editors", component: <FormXeditable /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-mask", component: <FormMask /> },

  // Tables pages
  { path: "/tables-basic", component: <BasicTable /> },
  { path: "/tables-listjs", component: <ListJs /> },
  { path: "/table-datatables", component: <DataTable /> },

  // Charts Pages
  { path: "/chart-apexcharts", component: <ApexCharts /> },
  { path: "/chart-chartjscharts", component: <ChartJs /> },
  { path: "/chart-floatcharts", component: <FloatChart /> },
  { path: "/chart-jknobcharts", component: <JknobCharts /> },
  { path: "/chart-sparklinecharts", component: <Sparklinechart /> },

  // Icons Pages
  { path: "/icon-boxicon", component: <IconBoxicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },
  { path: "/icon-dripicons", component: <IconDripicons /> },

  // Maps Pages
  { path: "/maps-vector", component: <VectorMaps /> },
  { path: "/maps-google", component: <GoogleMap /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [

  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  // Authentication Inner Pages
  { path: "/auth-login", component: <Login1 /> },
  { path: "/auth-register", component: <Register1 /> },
  { path: "/auth-recoverpw", component: <RecoverPassword /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },

  // Utility Pages
  { path: "/pages-404", component: <Error404 /> },
  { path: "/pages-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-comingsoon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
