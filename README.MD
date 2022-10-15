# Node JS-Express, Mongo, React

# Back-end
Directorio ```back-end```

Se ha desarrollado un back-end que permite consultar a la api de Binance lo siguiente:

### Funcionalidades:

1. Obtiene las 10 monedas que más pérdidas de valor tuvieron en las últimas 24 horas.
2. Obtiene la información de la cuenta de un usuario de Binance.
3. Podemos obtener una orden tipo ```limit```, con la moneda que más perdió en las últimas 24hrs.

### Librerías utilizadas para la realización:
1. Crypto
2. Express
3. dotenv
4. Axios
5. Jest
6. Supertest


### Iniciar el proyecto:
1. Copiar el ```.env.example``` a ```.env```.
2. Primeramente debemos de tener ```Node js``` instalado en nuestro ordenador.
3. Instalar las dependencias con el comando ```yarn install```.
4. En dado caso que no tengamos yarn en nuestro ordenador, podemos instalarlo con el siguiente comando ```npm -g install yarn```.
5. Una vez hecho esto procedemos a iniciar el proyecto con el comando ```yarn dev```.

### Organización de directorios:
Todos los archivos están dentro de ```src/```
```
app/
   src/config
   src/controllers
   src/routes
   src/services
   src/test
```

### Visual Studio Code
1. Si está usando el Visual Studio Code puede hacer uso del plugin ```Rest Client``` para ejecutar los endpoints..
2. Dicho archivo está en el directorio ```rest/```.

### Pruebas unitarias
1. Las pruebas se encuentran el ```src/tests/```
2. Las pruebas se ejecutan con el comando ```npm run tests```.



# Front-end
Directorio ```front-end```

Se ha desarrollado una aplicacion en react que permite obtener lo siguiente de Binance:

### Funcionalidades:

1. Se obtiene el precio en USD en tiempo real.
2. Se hacen los respectivos calculos de intereses a las 2 monedas BTC y ETH al ingresar un monto en dolares.
3. Se muestra la información en una tabla.
4. La información es posible descargarla en formato CSV.

### Librerías utilizadas para la realización:
1. classname
2. React CSV
3. dotenv
4. Websockets
5. Tailwindcss
6. Vite
7. React


### Iniciar el proyecto:
1. Instalar las dependencias con el comando ```yarn install```.
2. Una vez hecho esto procedemos a iniciar el proyecto con el comando ```yarn dev```.

### Organización de directorios:
Todos los archivos están dentro de ```src/```
```
font-end/
   src/components
   src/services
```


