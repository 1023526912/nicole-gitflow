# Evidencia del conflicto de integración

## Resumen

Se generó intencionalmente un conflicto real al integrar dos ramas que modificaban la misma descripción del archivo `README.md`.

## Ramas involucradas

- `feature/descripcion-a`
- `feature/descripcion-b`

## Resolución

Se combinaron ambas ideas en una sola descripción final:

> Aplicación web académica creada por Nicole para gestionar un inventario creativo con estética pastel, desarrollada como práctica completa de GitFlow.

## Comandos principales

```bash
git checkout develop
git merge feature/descripcion-a
git merge feature/descripcion-b
git status
git add README.md
git commit -m "fix: resolver conflicto de integración en README"
```
