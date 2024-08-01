// Función para convertir coordenadas polares a cartesianas
function polarToCartesian(r, thetaDegrees) {
    const theta = thetaDegrees * (Math.PI / 180); // Convertir grados a radianes
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y };
}

// Función para convertir coordenadas cartesianas a polares
function cartesianToPolar(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI); // Convertir radianes a grados
    return { r, theta };
}

// Función para manejar la conversión de polares a cartesianas
function convertPolarToCartesian() {
    const r = parseFloat(document.getElementById('polar-r').value);
    const thetaDegrees = parseFloat(document.getElementById('polar-theta').value);
    if (isNaN(r) || isNaN(thetaDegrees)) {
        document.getElementById('polar-result').innerText = 'Por favor, ingresa valores válidos para r y θ.';
        return;
    }
    const cartesian = polarToCartesian(r, thetaDegrees);
    document.getElementById('polar-result').innerText = `X: ${cartesian.x.toFixed(2)}, Y: ${cartesian.y.toFixed(2)}`;
}

// Función para manejar la conversión de cartesianas a polares
function convertCartesianToPolar() {
    const x = parseFloat(document.getElementById('cartesian-x').value);
    const y = parseFloat(document.getElementById('cartesian-y').value);
    if (isNaN(x) || isNaN(y)) {
        document.getElementById('cartesian-result').innerText = 'Por favor, ingresa valores válidos para X y Y.';
        return;
    }
    const polar = cartesianToPolar(x, y);
    document.getElementById('cartesian-result').innerText = `R: ${polar.r.toFixed(2)}, θ (grados): ${polar.theta.toFixed(2)}`;
}