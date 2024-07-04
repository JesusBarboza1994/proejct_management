// import swaggerJSDoc from "swagger-jsdoc";
// import fs from "fs";
// import path from "path";

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: "3.0.0", // Versión de OpenAPI
//     info: {
//       title: "ProMA",
//       version: "1.0.0",
//       description: "Manage your projects",
//     },
//   },
//   apis: getSwaggerPaths(path.join(__dirname, "components")), // Rutas de tu API que quieres documentar
// };

// const swaggerSpec = swaggerJSDoc(swaggerOptions);

// export default swaggerSpec;

// function getSwaggerPaths(componentsPath) {
//   const paths = [];

//   // Recorre la carpeta de componentes y busca los archivos routes.js
//   const componentFolders = fs.readdirSync(componentsPath);
//   componentFolders.forEach((component) => {
//     const routePath = `${componentsPath}/${component}/routes.js`;
//     if (fs.existsSync(routePath)) {
//       paths.push(routePath);
//     }
//   });
//   console.log("PATHS", paths)
//   return paths;
// }