#!/bin/bash

echo "Seleccione el entorno:"
echo "1) Desarrollo"
echo "2) Producción"
read -p "Opción (1 o 2): " opcion

if [ "$opcion" = "1" ]; then
  echo "Iniciando entorno de desarrollo (npm run dev)..."
  npm run dev
elif [ "$opcion" = "2" ]; then
  echo "Compilando el proyecto para producción..."
  npm run build
  echo "Levantando en producción (npm start)..."
  npm start
else
  echo "Opción no válida. Por favor selecciona 1 o 2."
  exit 1
fi
