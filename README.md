# Backend

### Setup

*Aclaración: Para poder seguir los siguientes pasos, necesitás tener Docker instalado en tu máquina.*

Para iniciar los contenedores del backend y la base de datos, ejecutar:
```
./start_dev_containers
```

Si no te permite ejecutar el script anterior, ejecutar (lo mismo para cualquiera de los scripts del repo):
```
chmod +x start_dev_containers
```

Una vez iniciados los contenedores y estando en la terminal dentro del backend, ejecutar el siguiente script para iniciar la API en modo desarrollo:
```
./start_dev
```

Con esto ya podés codear los cambios que quieras para la API, que se reinicia automáticamente cada vez que detecta un cambio en algún archivo.

### Migrations

Para crear un template de DB migration, ejecutar:
```
alembic revision -m "crear tabla usuarios"
```

Para ejecutar la última migration creada, ejecutar:
```
alembic upgrade head
```


# Fronted

Esta es una aplicación realizada en [Next.js](https://nextjs.org) utilizando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f241047-afb2-495e-b817-d593b186c792/deploy-status)](https://app.netlify.com/sites/itil-frontend/deploys)

## Software necesario

- Nodejs v20
- Bunjs (opcional, recomendado)

## Development

### Descargar dependencias

El primer paso es descargar las dependencias o `node_modules` usando **uno** de los siguientes comandos:

```bash
npm i
# o
yarn i
# o
pnpm i
# o
bun i
```

### Correr la aplicación

Para correr el servidor, correr **uno** de los siguientes comandos:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Luego abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver la aplicación.

### Correr los tests

#### Tests unitarios de componentes

```bash
npm test
# o
yarn dev
# o
pnpm dev
```

Con Bun no funciona

#### Tests de aceptación

TODO

## Variables de entorno

El proyecto requiere la configuración de variables de entorno. Sin aquellos, la aplicación no compila (TODO). Copiar del `env.example` en un `.env`.

## Extensiones de VSCode

Hay recomendaciones de extensiones de Visual Studio Code para que el desarrollo sea más fluido. Te debería llegar un mensaje del estilo: _This workspace has extension recommendations._

- Eslint
- Prettier
- Tailwind CSS
- React Snippets
- Version Lens

## Deployment

Para buildear la aplicación se tiene que ejecutar **uno** de los siguientes comandos:

```bash
npm run build
# o
yarn build
# o
pnpm build
# o
bun build
```

---

## Documentación de Next JS

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
