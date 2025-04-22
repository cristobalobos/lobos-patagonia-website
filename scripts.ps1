# Cambia a tu directorio de proyecto
Set-Location "C:\ruta\a\tu\proyecto"  # ← Modifica esto

# Verifica que estés usando la versión correcta de Node (opcional)
nvm use 18.20.0

# Instala dependencias si no existen
if (!(Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..."
    npm install
}

# Compila el proyecto
Write-Host "Compilando el proyecto con next build..."
npm run build

# Inicia el servidor en producción
Write-Host "Iniciando el servidor con next start..."
npm run start