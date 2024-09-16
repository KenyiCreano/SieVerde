module.exports = {
    devServer: {
      https: false,  // Fuerza el uso de HTTPS en el servidor de desarrollo
      hot: true,    // Habilita el Hot Module Replacement (HMR)
      client: {
        webSocketURL: {
          protocol: 'http',  // Asegura que el WebSocket use el protocolo WSS
          port: 8080,       // Puerto del servidor de WebSocket
        }
      }
    }
  };
