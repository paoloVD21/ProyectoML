// Función para validar que el valor ingresado sea mayor que un valor mínimo
function validarMonto(valor, minimo) {
    return valor > minimo;
}

// Función para verificar que el campo contiene solo números y no letras ni símbolos
function esNumeroValido(valor) {
    return /^\d+(\.\d{1,2})?$/.test(valor);  // Verifica solo números y hasta dos decimales
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    alert(mensaje);
    return false;
}

// Toggle de secciones y botones navbar
const btnManual = document.getElementById('btnManual');
const btnCSV = document.getElementById('btnCSV');
const sectionManual = document.getElementById('sectionManual');
const sectionCSV = document.getElementById('sectionCSV');

function showManual() {
    sectionManual.classList.remove('hidden');
    sectionCSV.classList.add('hidden');
    btnManual.classList.add('active');
    btnCSV.classList.remove('active');
}

function showCSV() {
    sectionCSV.classList.remove('hidden');
    sectionManual.classList.add('hidden');
    btnCSV.classList.add('active');
    btnManual.classList.remove('active');
}

btnManual.addEventListener('click', showManual);
btnCSV.addEventListener('click', showCSV);

// Inicializar mostrando manual
showManual();

// Data provincias
const dataProvincia = {
    "AREQUIPA": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA"],
            "CMAC": ["CMAC CUSCO"]
        },
        "NCMV": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC AREQUIPA"]
        }
    },
    "CALLAO": {
        "NCMV": {
            "BANCO": ["INTERBANK"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "INTERBANK"]
        }
    },
    "CHEPEN": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "CHICLAYO": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["CREDITO"]
        },
        "NMIV": {
            "BANCO": ["INTERBANK"]
        }
    },
    "CHINCHA": {
        "FCTP": {
            "EDPYME": ["EDPYME MICASITA"]
        }
    },
    "ICA": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"]
        },
        "NMIV": {
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NCMV": {
            "BANCO": ["BANBIF"]
        }
    },
    "LAMBAYEQUE": {
        "NCMV": {
            "BANCO": ["CREDITO"]
        }
    },
    "LIMA": {
        "FCTP": {
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "CONTINENTAL", "CREDITO", "INTERBANK"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"]
        },
        "S-CRC": {
            "BANCO": ["INTERBANK"]
        }
    },
    "PISCO": {
        "FCTP": {
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "PIURA": {
        "FCTP": {
            "BANCO": ["CONTINENTAL"],
            "CMAC": ["CMAC HUANCAYO"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."],
        },
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA", "CREDITO"]
        },
        "NMIV": {
            "BANCO": ["INTERBANK"]
        }
    },
    "TRUJILLO": {
        "FCTP": {
            "CMAC": ["CMAC TRUJILLO"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."],
            "BANCO": ["CREDITO"]
        },
        "NCMV": {
            "BANCO": ["CREDITO"]
        }
    },
    "VIRU": {
        "FCTP": {
            "CAC": ["CAC PACIFICO"]
        }
    }
};

const provinciaSelect = document.getElementById("provincia");
const productoSelect = document.getElementById("producto");
const tipoIfiSelect = document.getElementById("tipo_ifi");
const ifiSelect = document.getElementById("ifi");

function clearSelect(selectElement) {
    selectElement.innerHTML = '<option value="">Selecciona</option>';
    selectElement.disabled = true;
}

function cargarProvincias() {
    clearSelect(provinciaSelect);
    Object.keys(dataProvincia).sort().forEach(prov => {
        const option = document.createElement("option");
        option.value = prov;
        option.textContent = prov;
        provinciaSelect.appendChild(option);
    });
    provinciaSelect.disabled = false;
}

function updateProductos() {
    clearSelect(productoSelect);
    clearSelect(tipoIfiSelect);
    clearSelect(ifiSelect);
    const provincia = provinciaSelect.value;
    if (!provincia || !dataProvincia[provincia]) return;
    const productos = Object.keys(dataProvincia[provincia]).sort();
    productos.forEach(p => {
        const option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        productoSelect.appendChild(option);
    });
    productoSelect.disabled = false;
}

function updateTipoIfi() {
    clearSelect(tipoIfiSelect);
    clearSelect(ifiSelect);
    const provincia = provinciaSelect.value;
    const producto = productoSelect.value;
    if (!provincia || !producto || !dataProvincia[provincia][producto]) return;
    const tiposIfi = Object.keys(dataProvincia[provincia][producto]).sort();
    tiposIfi.forEach(t => {
        const option = document.createElement("option");
        option.value = t;
        option.textContent = t;
        tipoIfiSelect.appendChild(option);
    });
    tipoIfiSelect.disabled = false;
}

function updateIfi() {
    clearSelect(ifiSelect);
    const provincia = provinciaSelect.value;
    const producto = productoSelect.value;
    const tipoIfi = tipoIfiSelect.value;
    if (!provincia || !producto || !tipoIfi || !dataProvincia[provincia][producto][tipoIfi]) return;
    const ifis = dataProvincia[provincia][producto][tipoIfi].sort();
    ifis.forEach(i => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        ifiSelect.appendChild(option);
    });
    ifiSelect.disabled = false;
}

provinciaSelect.addEventListener("change", updateProductos);
productoSelect.addEventListener("change", updateTipoIfi);
tipoIfiSelect.addEventListener("change", updateIfi);

document.addEventListener("DOMContentLoaded", () => {
    cargarProvincias();
    clearSelect(productoSelect);
    clearSelect(tipoIfiSelect);
    clearSelect(ifiSelect);
});

// Enviar formulario manual a backend
document.getElementById('formIndividual').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtener los valores de los campos
    const montoCuotaInicial = parseFloat(document.getElementById('monto_cuota_inicial').value);
    const montoValorVivienda = parseFloat(document.getElementById('monto_valor_vivienda').value);
    const ingresoMensual = parseFloat(document.getElementById('ingreso_mensual').value);

    // Validar si los campos son números y cumplen con los límites establecidos
    if (!esNumeroValido(montoCuotaInicial) || !validarMonto(montoCuotaInicial, 10000)) {
        return mostrarError('El monto de cuota inicial debe ser mayor a 10,000 soles y solo debe contener números.');
    }

    if (!esNumeroValido(montoValorVivienda) || !validarMonto(montoValorVivienda, 40000)) {
        return mostrarError('El monto valor vivienda debe ser mayor a 40,000 soles y solo debe contener números.');
    }

    if (!esNumeroValido(ingresoMensual) || !validarMonto(ingresoMensual, 3000)) {
        return mostrarError('El ingreso mensual debe ser mayor a 3,000 soles y solo debe contener números.');
    }

    // Si todo es válido, enviar la predicción
    const data = {
        PROVINCIA: provinciaSelect.value,
        PRODUCTO: productoSelect.value,
        TIPO_IFI: tipoIfiSelect.value,
        IFI: ifiSelect.value,
        MONTO_CUOTA_INICIAL: montoCuotaInicial,
        MONTO_VALOR_VIVIENDA: montoValorVivienda,
        INGRESO_MENSUAL_CLIENTE: ingresoMensual,
    };

    try {
        const response = await fetch('https://proyectoml-37r0.onrender.com/predict_manual', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Error en la petición');

        const result = await response.json();

        document.getElementById('resultIndividual').textContent = `Monto predicho: S/. ${result.predicted_monto.toFixed(2)}`;

    } catch (error) {
        alert('Error al obtener la predicción');
        console.error(error);
    }
});