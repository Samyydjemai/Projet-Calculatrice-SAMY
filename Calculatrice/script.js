const resultInput = document.getElementById('result');
let hasOperator = false;

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Vérifie le mode enregistré dans le localStorage
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    // Basculer entre mode sombre et clair
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Enregistre le choix dans le localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});


function appendValue(value) {
    if (value === 'pi') {
        resultInput.value += '3.14159265359';  // Remplace "pi" par la valeur numérique de Pi
        return;
    }
 
    const lastChar = resultInput.value.slice(-1);
    if (isOperator(value)) {
        if (hasOperator || resultInput.value === '') {
            return;
        }
        hasOperator = true;
    } else {
        if (!isOperator(lastChar)) {
            hasOperator = false;
        }
    }
    resultInput.value += value;
}
 
function clearResult() {
    resultInput.value = '';
    hasOperator = false;
}
 
function deleteLast() {
    const lastChar = resultInput.value.slice(-1);
    if (isOperator(lastChar)) {
        hasOperator = false;
    }
    resultInput.value = resultInput.value.slice(0, -1);
}
 
function calculate() {
    const expression = resultInput.value;
    if (!isValidExpression(expression)) {
        showError('Expression invalide');
        return;
    }
    try {
        const result = Function(`'use strict'; return (${expression})`)();
        resultInput.value = result;
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function square() {
    if (hasOperator || resultInput.value === '') {
        showError('Une seule opération à la fois est permise');
        return;
    }
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = Math.pow(value, 2);
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function sin() {
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = Math.sin(value);
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function cos() {
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = Math.cos(value);
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function tan() {
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = Math.tan(value);
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function sqrt() {
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = Math.sqrt(value);
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function log() {
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = Math.log(value);
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function percentage() {
    try {
        const value = parseFloat(resultInput.value);
        if (isNaN(value)) {
            showError('Veuillez entrer un nombre');
            return;
        }
        resultInput.value = value / 100;
        hasOperator = false;
    } catch (error) {
        showError('Erreur de calcul');
    }
}
 
function isValidExpression(expression) {
    const regex = /^[\d+\-*/().\s]*$/;
    return regex.test(expression);
}
 
function isOperator(value) {
    return ['+', '-', '*', '/', '%', '.', '(', ')'].includes(value);
}
 
function showError(message) {
    alert(message);
}
 
function goToPage() {
    window.location.href = 'index2.html'; // Redirige vers "index2.html"
}
 
function goToPagee() {
    window.location.href = 'index.html'; // Redirige vers "index2.html"
}
