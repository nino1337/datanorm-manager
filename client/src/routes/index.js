import { FileCopy, Search, Publish } from "@material-ui/icons";

import AllDatanormFiles from "../pages/AllDatanormFiles";
import DatanormFile from "../pages/DatanormFile";
import FilterProducts from "../pages/FilterProducts";
import UploadDatanorm from "../pages/UploadDatanorm";

const routes = [
  {
    link: {
      to: "/",
      icon: Search,
    },
    route: {
      path: "/",
      component: FilterProducts,
    },
    title: "Produkte filtern",
  },
  {
    link: {
      to: "/datanorm-dateien",
      icon: FileCopy,
    },
    route: {
      path: "/datanorm-dateien",
      component: AllDatanormFiles,
    },
    title: "Alle Datanorm Dateien",
  },
  {
    route: {
      path: "/datanorm-dateien/:id",
      component: DatanormFile,
    },
  },
  {
    link: {
      to: "/datanorm-datei-hochladen",
      icon: Publish,
    },
    route: {
      path: "/datanorm-datei-hochladen",
      component: UploadDatanorm,
    },
    title: "Datanorm-Dateien hochladen",
  },
];

export default routes;
