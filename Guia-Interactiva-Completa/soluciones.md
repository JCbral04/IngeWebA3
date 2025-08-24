# Soluciones de los Ejercicios

---

## Reto 1: Función Suma

```javascript
function suma(a, b) {
    return a + b;
}
```

### Casos de prueba:
- `suma(2, 3) → 5`
- `suma(10, 5) → 15`
- `suma(-1, 1) → 0`
- `suma(0, 0) → 0`
- `suma(100, 200) → 300`

---

## Reto 2: Números Pares del 1 al 10

### Opción 1: Con bucle `for`
```javascript
let pares = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
return pares;
```

### Opción 2: Más directo
```javascript
return [2, 4, 6, 8, 10];
```

### Opción 3: Con `filter`
```javascript
Array.from({length: 10}, (_, i) => i + 1).filter(n => n % 2 === 0);
```

**Resultado esperado**:  
`[2, 4, 6, 8, 10]`

---

## Reto 3: Detector de Palíndromo

### Versión detallada
```javascript
function esPalindromo(palabra) {
    const palabraLimpia = palabra.toLowerCase();
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === palabraInvertida;
}
```

### Alternativa más concisa
```javascript
function esPalindromo(palabra) {
    return palabra.toLowerCase() === palabra.toLowerCase().split('').reverse().join('');
}
```

### Casos de prueba:
- `esPalindromo('oso') → true`
- `esPalindromo('casa') → false`
- `esPalindromo('reconocer') → true`
- `esPalindromo('javascript') → false`
- `esPalindromo('anilina') → true`
- `esPalindromo('a') → true`
