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
            "EDPYME": ["EDPYME MICASITA"],
            "CMAC": ["CMAC CUSCO"]
        },
        "NCMV": {
            "BANCO": ["CREDITO", "INTERBANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "INTERBANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "CALLAO": {
        "NCMV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "INTERBANK"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "CANIETE": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL"]
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
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["CREDITO", "BANCO PICHINCHA", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "INTERBANK"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "CHINCHA": {
        "FCTP": {
            "EDPYME": ["EDPYME MICASITA"],
            "CMAC": ["CMAC ICA"]
        }
    },
    "ICA": {
        "FCTP": {
            "BANCO": ["CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"]
        },
        "NCMV": {
            "BANCO": ["BANBIF"],
            "CMAC": ["CMAC ICA"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["BANBIF"],
            "CMAC": ["CMAC ICA"],
            "EDPYME": ["EDPYME MICASITA"]
        }
    },
    "LAMBAYEQUE": {
        "FCTP": {
            "BANCO": ["CONTINENTAL"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NCMV": {
            "BANCO": ["CREDITO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "LIMA": {
        "FCTP": {
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S. A"]
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
            "EDPYME": ["EDPYME MICASITA"],
        },
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA", "CREDITO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "INTERBANK"]
        }
    },
    "SULLANA": {
        "FCTP": {
            "BANCO": ["CONTINENTAL", "INTERBANK"],
            "CAC": ["CAC PACIFICO"]
        },
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO"]
        }
    },
    "TRUJILLO": {
        "FCTP": {
            "CMAC": ["CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["CREDITO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "INTERBANK"]
        }
    },
    "VIRU": {
        "FCTP": {
            "CAC": ["CAC PACIFICO"]
        },
        "NCMV": {
            "BANCO": ["CONTINENTAL"]
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

// Procesar CSV
document.getElementById('procesarCSV').addEventListener('click', () => {
    // Obtener el elemento input donde se selecciona el archivo CSV
    const input = document.getElementById('csvFile');
    const output = document.getElementById('csvOutput');

    // Limpiar cualquier contenido previo en el área de salida
    output.textContent = '';

    // Verificar si el usuario seleccionó algún archivo
    if (!input.files.length) {
        alert('Por favor, selecciona un archivo CSV.');
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    // Definir qué hacer cuando la lectura del archivo termine correctamente
    reader.onload = function (e) {
        const text = e.target.result;
        const lines = text.split('\n').filter(line => line.trim() !== '');
        output.textContent = `Archivo cargado con ${lines.length} líneas.\n\nPrimeras líneas:\n${lines.slice(0, 5).join('\n')}`;
        console.log('Contenido CSV:', lines.slice(0, 5));
        // Aquí puedes añadir procesamiento extra para usar el CSV en predicción
    };

    // Definir qué hacer si hay un error al leer el archivo
    reader.onerror = function () {
        alert('No se pudo leer el archivo.');
    };

    // Iniciar la lectura del archivo como texto plano
    reader.readAsText(file);
});

// Eliminar CSV cargado
document.getElementById("clearCSV").addEventListener("click", () => {
    const csvFileInput = document.getElementById("csvFile");
    const csvOutput = document.getElementById("csvOutput");
    const csvMessage = document.getElementById("csvMessage");

    // Limpiar input file (esto borra el archivo seleccionado)
    csvFileInput.value = "";

    // Limpiar salida y mensajes
    csvOutput.textContent = "";
    csvMessage.textContent = "";

    alert("Archivo CSV y datos limpiados.");
});

// Enviar formulario manual a backend
document.getElementById('formIndividual').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        PROVINCIA: provinciaSelect.value,
        PRODUCTO: productoSelect.value,
        TIPO_IFI: tipoIfiSelect.value,
        IFI: ifiSelect.value,
        MONTO_CUOTA_INICIAL: parseFloat(document.getElementById('monto_cuota_inicial').value),
        MONTO_VALOR_VIVIENDA: parseFloat(document.getElementById('monto_valor_vivienda').value),
        INGRESO_MENSUAL_CLIENTE: parseFloat(document.getElementById('ingreso_mensual').value),
    };

    try {
        const response = await fetch('https://proyectoml-37r0.onrender.com/predict_manual', {
            // Local
            // const response = await fetch('http://127.0.0.1:8000/predict_manual', {
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

// Enviar archivo CSV al backend
document.getElementById('procesarCSV').addEventListener('click', async () => {
    const input = document.getElementById('csvFile');
    const output = document.getElementById('csvOutput');
    const message = document.getElementById('csvMessage');

    output.textContent = '';
    message.textContent = 'Procesando...';  // Mensaje al usuario mientras se procesa el archivo

    if (!input.files.length) {
        alert('Por favor, selecciona un archivo CSV.');
        return;
    }

    const formData = new FormData();
    formData.append('file', input.files[0]);

    try {
        const response = await fetch('https://proyectoml-37r0.onrender.com/predict_csv', {
            // Local
            // const response = await fetch('http://127.0.0.1:8000/predict_csv', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('Error en la petición');

        // Crear un enlace para descargar el archivo CSV generado
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'predicciones.csv';  // Este es el nombre del archivo CSV que el usuario descargará
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        message.textContent = 'Archivo descargado con éxito'; // Indica que la descarga fue exitosa

    } catch (error) {
        message.textContent = 'Error al procesar el archivo.';
        console.error(error);
    }
});