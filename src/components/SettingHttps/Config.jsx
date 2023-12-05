// Verificar si la conexión es segura (HTTPS)
if (location.protocol !== 'https:') {
    // Construir la URL segura
    const secureUrl = 'https://' + location.host + location.pathname + location.search;

    // Intentar redirigir a la versión segura
    window.location.replace(secureUrl);
}

// También puedes agregar una verificación para manejar casos específicos
// por ejemplo, si estás trabajando en un entorno local y no tienes HTTPS habilitado.

// Ejemplo: Si estás en un entorno local (localhost), redirige a HTTPS
if (location.hostname === 'localhost' && location.protocol !== 'https:') {
    const secureLocalUrl = 'https://' + location.host + location.pathname + location.search;
    window.location.replace(secureLocalUrl);
}