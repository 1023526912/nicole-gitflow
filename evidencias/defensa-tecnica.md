# Defensa Técnica - Nicole Bloom

## 1. ¿Por qué no se debe desarrollar directamente sobre main?
`main` representa la versión estable del proyecto. Hacer cambios directamente allí aumenta el riesgo de publicar código incompleto o defectuoso. Con GitFlow, las funcionalidades se desarrollan en ramas separadas y solo llegan a `main` después de ser integradas y revisadas.

## 2. ¿Qué diferencia existe entre main y develop?
`main` conserva versiones estables listas para entrega o producción. `develop` recibe las funcionalidades terminadas y funciona como rama de integración antes de preparar una nueva versión.

## 3. ¿Cuándo se utiliza una feature?
Cuando se desarrolla una funcionalidad independiente. Nace desde `develop` y, cuando está terminada, se fusiona nuevamente en `develop`.

## 4. ¿Cuándo se utiliza release?
Cuando el conjunto de funcionalidades está listo para preparar una versión. Permite realizar ajustes finales, pruebas y documentación antes de fusionar en `main` y etiquetar la versión.

## 5. ¿Cuándo se utiliza hotfix?
Cuando se detecta un error urgente en una versión estable. Se crea desde `main`, se corrige el problema y luego se integra tanto a `main` como a `develop`.

## 6. ¿Qué es un conflicto de Git y por qué ocurre?
Sucede cuando Git encuentra cambios incompatibles en la misma zona de un archivo y no puede decidir automáticamente cuál conservar. En este proyecto ocurrió al modificar la misma descripción del `README.md` en dos ramas distintas.

## 7. ¿Qué diferencia existe entre merge y rebase?
`merge` conserva las dos líneas de historial y crea una integración explícita. `rebase` reaplica commits sobre una base nueva para producir un historial más lineal, pero reescribe hashes y debe usarse con cuidado en ramas compartidas.

## 8. ¿Qué función cumple un tag como 1.0.0?
Identifica de forma permanente un punto del historial como una versión específica. Facilita auditoría, entregas, despliegues y recuperación de versiones anteriores.
