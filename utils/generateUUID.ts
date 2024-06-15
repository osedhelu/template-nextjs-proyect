export function generatePassword() {
    // Crear un timestamp y convertirlo a string
    let timestamp = Date.now().toString();

    // Establecer los caracteres permitidos
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    // Generar una contraseña aleatoria a partir del timestamp
    let password = '';
    for (let i = 0; i < timestamp.length; i++) {
        // Escoger aleatoriamente mayúsculas, minúsculas o números en base al valor de timestamp[i]
        switch (parseInt(timestamp[i]) % 3) {
            case 0:
                // Añadir un carácter en mayúsculas
                password += uppercase[Math.floor(Math.random() * uppercase.length)];
                break;
            case 1:
                // Añadir un carácter en minúsculas
                password += lowercase[Math.floor(Math.random() * lowercase.length)];
                break;
            case 2:
                // Añadir un número
                password += numbers[Math.floor(Math.random() * numbers.length)];
                break;
        }
    }

    return password;
}

