# rolando-diaz-API

Mini servidor web hecho con **Node.js** usando el módulo **`http` nativo** (sin dependencias).
Expone un endpoint `GET /` que devuelve un saludo del desarrollador.

## Requisitos

- Node.js 22 o superior

## Instalación y ejecución en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/<TU_ORGANIZACION>/rolando-diaz-API.git
cd rolando-diaz-API

# 2. Arrancar el servidor
npm start
```

El servidor quedará escuchando en `http://localhost:3000`.

## Endpoint

| Método | Ruta | Respuesta                | Código |
|--------|------|--------------------------|--------|
| GET    | `/`  | `HOLA SOY ROLANDO DIAZ`  | 200    |

Ejemplo:

```bash
curl http://localhost:3000/
# -> HOLA SOY ROLANDO DIAZ
```

## Despliegue en Render (opcional)

1. Sube el repositorio a GitHub.
2. En [Render](https://render.com) crea un **New > Web Service** y conecta el repo.
3. Configuración:
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Render asigna el puerto mediante la variable `PORT`, que el servidor ya lee automáticamente.

## Autor

Rolando Díaz
