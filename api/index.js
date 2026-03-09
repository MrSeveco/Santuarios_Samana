module.exports = (req, res) => {
  const baseUrl = `https://${req.headers.host}`;
  
  const routes = {
    endpoints: [
      {
        method: 'POST',
        path: '/api/upload',
        description: 'Sube una imagen o video',
        contentType: 'multipart/form-data',
        body: {
          file: 'File (required)'
        }
      },
      {
        method: 'DELETE',
        path: '/api/delete',
        description: 'Elimina un archivo',
        queryParams: {
          path: 'string (required) - Ruta del archivo'
        },
        example: `${baseUrl}/api/delete?path=images/example.jpg`
      },
      {
        method: 'GET',
        path: '/api/list',
        description: 'Lista archivos',
        queryParams: {
          folder: 'string (optional) - Carpeta a listar',
          limit: 'number (optional) - Límite de resultados (default: 100)',
          offset: 'number (optional) - Offset para paginación (default: 0)'
        },
        example: `${baseUrl}/api/list?folder=images&limit=10`
      }
    ],
    documentation: `${baseUrl}/api-docs.html`
  };

  res.status(200).json(routes);
};
