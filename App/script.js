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
    "ABANCAY": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "ALTO AMAZONAS": {
        "NCMV": {
            "CMAC": ["CMAC MAYNAS"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"]
        }
    },
    "AMBO": {
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "ANDAHUAYLAS": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"],
            "CRAC": ["CRAC RAIZ"]
        }
    },
    "ANTA": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "AREQUIPA": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"],
            "EDPYME": ["EDPYME MICASITA"],
            "FINANCIERA": ["CREDISCOTIA"]
        },
        "S-CRC": {
            "BANCO": ["CREDITO"]
        }
    },
    "ASCOPE": {
        "FCTP": {
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"]
        },
        "NMIV": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "AYMARAES": {
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "AZANGARO": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "BARRANCA": {
        "NCMV": {
            "BANCO": ["CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO", "CMAC ICA", "CMAC TRUJILLO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA", "CMAC TRUJILLO"]
        }
    },
    "BELLAVISTA": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "BOLOGNESI": {
        "NCMV": {
            "CMAC": ["CMAC TRUJILLO"]
        }
    },
    "BONGARA": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "CAJAMARCA": {
        "NCMV": {
            "BANCO": ["CONTINENTAL"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "INTERBANK", "SCOTIABANK"]
        }
    },
    "CALCA": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "CALLAO": {
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"],
            "CRAC": ["CRAC RAIZ"],
            "EDPYME": ["EDPYME MICASITA"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."],
            "FINANCIERA": ["CREDISCOTIA", "FINANCIERA EFECTIVA S. A"]
        },
        "S-CRC": {
            "BANCO": ["CREDITO", "INTERBANK"]
        }
    },
    "CAMANA": {
        "NCMV": {
            "CMAC": ["CMAC ICA"]
        },
        "NMIV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "CANCHIS": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "CMAC": ["CMAC CUSCO", "CMAC TRUJILLO"]
        }
    },
    "CANDARAVE": {
        "NMIV": {
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "CANIETE": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        }
    },
    "CASMA": {
        "FCTP": {
            "CMAC": ["CMAC MAYNAS"]
        },
        "NMIV": {
            "BANCO": ["CREDITO"]
        }
    },
    "CAYLLOMA": {
        "NCMV": {
            "BANCO": ["CREDITO"]
        },
        "NMIV": {
            "CMAC": ["CMAC AREQUIPA"]
        }
    },
    "CHACHAPOYAS": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "CHANCHAMAYO": {
        "NCMV": {
            "BANCO": ["CONTINENTAL", "INTERBANK"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "CONTINENTAL", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "CHEPEN": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NCMV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "CHICLAYO": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL"],
            "CMAC": ["CMAC HUANCAYO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "CHINCHA": {
        "FCTP": {
            "BANCO": ["BANBIF"],
            "CAC": ["CAC PACIFICO"],
            "EDPYME": ["EDPYME MICASITA"],
            "CMAC": ["CMAC ICA"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "SCOTIABANK"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "CHUPACA": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "CONCEPCION": {
        "NCMV": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC CUSCO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "CONTINENTAL", "INTERBANK"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "CORONEL PORTILLO": {
        "FCTP": {
            "CMAC": ["CMAC AREQUIPA", "CMAC MAYNAS"]
        },
        "NCMV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "SCOTIABANK"]
        }
    },
    "CUSCO": {
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC CUSCO"]
        },
        "S-CRC": {
            "BANCO": ["CREDITO"]
        }
    },
    "ESPINAR": {
        "NMIV": {
            "BANCO": ["CONTINENTAL"]
        }
    },
    "FERRENIAFE": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["BANCO PICHINCHA"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "GRAN CHIMU": {
        "NMIV": {
            "CMAC": ["CMAC TRUJILLO"]
        }
    },
    "HUAMANGA": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"]
        },
        "NMIV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "HUANCAVELICA": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "HUANCAYO": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"],
            "CRAC": ["CRAC RAIZ"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"],
            "FINANCIERA": ["CREDISCOTIA"]
        }
    },
    "HUANTA": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"]
        }
    },
    "HUANUCO": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC CUSCO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC CUSCO"]
        }
    },
    "HUARAL": {
        "NMIV": {
            "BANCO": ["CREDITO"]
        }
    },
    "HUAROCHIRI": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "HUAURA": {
        "FCTP": {
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA", "COMERCIO", "CREDITO", "INTERBANK", "SCOTIABANK"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "SCOTIABANK"]
        }
    },
    "HUAYLAS": {
        "NCMV": {
            "BANCO": ["CREDITO", "INTERBANK"]
        }
    },
    "HUAYTARA": {
        "NCMV": {
            "BANCO": ["INTERBANK"]
        }
    },
    "ICA": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA", "CMAC TRUJILLO"],
            "CRAC": ["CRAC RAIZ"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC ICA", "CMAC TRUJILLO"],
            "FINANCIERA": ["CREDISCOTIA", "FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC ICA"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."],
            "FINANCIERA": ["CREDISCOTIA"]
        }
    },
    "LIMA": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL", "INTERBANK"],
            "CAC": ["CAC PACIFICO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC ICA", "CMAC SULLANA"],
            "CAC": ["CAC PACIFICO"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC ICA", "CMAC TRUJILLO"],
            "CAC": ["CAC PACIFICO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "S-CRC": {
            "BANCO": ["CREDITO", "INTERBANK"]
        }
    },
    "ILO": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "INTERBANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "ISLAY": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC AREQUIPA"]
        }
    },
    "JAEN": {
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "FINANCIERA EFECTIVA S. A", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO"]
        }
    },
    "JAUJA": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "LA CONVENCION": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL"],
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "LA MAR": {
        "NCMV": {
            "BANCO": ["CREDITO", "INTERBANK", "FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "LAMAS": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO", "CMAC MAYNAS"]
        }
    },
    "LAMBAYEQUE": {
        "FCTP": {
            "BANCO": ["CONTINENTAL"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A.", "EDPYME MICASITA"],
            "FINANCIERA": ["CREDISCOTIA", "FINANCIERA EFECTIVA S. A"]
        },
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA", "BANBIF", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["BANCO PICHINCHA", "BANBIF", "COMERCIO", "CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A.", "EDPYME MICASITA"],
            "FINANCIERA": ["CREDISCOTIA", "FINANCIERA EFECTIVA S. A"]
        }
    },
    "LEONCIO PRADO": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"]
        },
        "NMIV": {
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "MARISCAL CACERES": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL"]
        }
    },
    "MARISCAL NIETO": {
        "NCMV": {
            "BANCO": ["CREDITO", "SCOTIABANK"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "CONTINENTAL"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "MAYNAS": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "MELGAR": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "MORROPON": {
        "NMIV": {
            "BANCO": ["CONTINENTAL"]
        }
    },
    "MOYOBAMBA": {
        "FCTP": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC MAYNAS"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL"],
            "CMAC": ["CMAC MAYNAS"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "NAZCA": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"],
            "BANCO": ["CREDITO"]
        }
    },
    "OXAPAMPA": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "PACASMAYO": {
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA", "CREDITO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "CREDITO"]
        }
    },
    "PADRE ABAD": {
        "NMIV": {
            "BANCO": ["CREDITO"]
        }
    },
    "PAITA": {
        "NCMV": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"],
            "BANCO": ["INTERBANK"]
        }
    },
    "PASCO": {
        "NMIV": {
            "BANCO": ["CONTINENTAL"]
        }
    },
    "PAUCARTAMBO": {
        "NMIV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "PICOTA": {
        "NCMV": {
            "CMAC": ["CMAC MAYNAS"]
        },
        "NMIV": {
            "CMAC": ["CMAC MAYNAS"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "PISCO": {
        "FCTP": {
            "BANCO": ["CONTINENTAL"],
            "CMAC": ["CMAC HUANCAYO", "CMAC ICA"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "CREDITO", "CONTINENTAL", "INTERBANK"],
            "CMAC": ["CMAC SULLANA"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "CREDITO", "INTERBANK"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A."],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "PIURA": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA"],
            "CAC": ["CAC PACIFICO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC SULLANA"],
            "EDPYME": ["EDPYME MICASITA"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A", "CREDISCOTIA"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        }
    },
    "PUNO": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO"]
        }
    },
    "QUISPICANCHI": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "RIOJA": {
        "NCMV": {
            "BANCO": ["CREDITO", "INTERBANK"],
            "CMAC": ["CMAC MAYNAS"]
        },
        "NMIV": {
            "BANCO": ["CREDITO", "CONTINENTAL"],
            "CMAC": ["CMAC MAYNAS"]
        }
    },
    "RODRIGUEZ DE MENDOZA": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "SAN IGNACIO": {
        "NCMV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "SAN MARTIN": {
        "FCTP": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "INTERBANK", "SCOTIABANK"],
            "CAC": ["CAC PACIFICO"],
            "CMAC": ["CMAC HUANCAYO", "CMAC MAYNAS"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NCMV": {
            "BANCO": ["CREDITO", "CONTINENTAL", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO", "CMAC MAYNAS"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC MAYNAS"],
            "EDPYME": ["EDPYME MICASITA"]
        }
    },
    "SAN ROMAN": {
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC CUSCO", "CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "SANCHEZ CARRION": {
        "NMIV": {
            "BANCO": ["INTERBANK"]
        }
    },
    "SANTA": {
        "FCTP": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "MI BANCO"],
            "CMAC": ["CMAC TRUJILLO"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CREDITO", "INTERBANK", "SCOTIABANK"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC TRUJILLO"]
        }
    },
    "SATIPO": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "SECHURA": {
        "NMIV": {
            "BANCO": ["CREDITO"],
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "SULLANA": {
        "FCTP": {
            "BANCO": ["BANBIF", "CONTINENTAL"],
            "CAC": ["CAC PACIFICO"],
            "CMAC": ["CMAC AREQUIPA", "CMAC TRUJILLO", "CMAC HUANCAYO"],
            "CRAC": ["CRAC RAIZ"],
            "EDPYME": ["EMPRESA DE CREDITO VIVELA S.A.", "EDPYME MICASITA"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO"]
        },
        "NMIV": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL", "CREDITO"],
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO", "CMAC TRUJILLO"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        }
    },
    "TACNA": {
        "FCTP": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO"]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC TACNA"],
            "FINANCIERA": ["FINANCIERA EFECTIVA S. A"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO"]
        }
    },
    "TALARA": {
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "CREDITO", "BANCO PICHINCHA"]
        },
        "S-CRC": {
            "BANCO": ["CREDITO"]
        }
    },
    "TAMBOPATA": {
        "NCMV": {
            "CMAC": ["CMAC CUSCO"]
        },
        "NMIV": {
            "CMAC": ["CMAC CUSCO"]
        }
    },
    "TARMA": {
        "NCMV": {
            "BANCO": ["CREDITO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL"]
        }
    },
    "TOCACHE": {
        "NCMV": {
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
        }
    },
    "TRUJILLO": {
        "FCTP": {
            "BANCO": ["BANCO PICHINCHA", "INTERBANK", "SCOTIABANK", "CONTINENTAL"],
            "CAC": ["CAC PACIFICO"],
            "CMAC": ["CMAC AREQUIPA", "CMAC HUANCAYO", "CMAC SULLANA", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        },
        "NCMV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "BANCO PICHINCHA", "COMERCIO", "CONTINENTAL", "CREDITO", "INTERBANK", "SCOTIABANK"],
            "CMAC": ["CMAC AREQUIPA", "CMAC CUSCO", "CMAC HUANCAYO", "CMAC TRUJILLO"],
            "EDPYME": ["EDPYME MICASITA", "EMPRESA DE CREDITO VIVELA S.A."]
        }
    },
    "TUMBES": {
        "NCMV": {
            "BANCO": ["INTERBANK"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["BANBIF", "CONTINENTAL"]
        }
    },
    "UTCUBAMBA": {
        "NCMV": {
            "BANCO": ["CREDITO", "CONTINENTAL", "SCOTIABANK"],
            "CMAC": ["CMAC HUANCAYO"]
        },
        "NMIV": {
            "BANCO": ["CONTINENTAL", "SCOTIABANK"]
        }
    },
    "VIRU": {
        "FCTP": {
            "BANCO": ["CONTINENTAL"],
            "CAC": ["CAC PACIFICO"]
        },
        "NCMV": {
            "BANCO": ["BANCO PICHINCHA", "CONTINENTAL"]
        },
        "NMIV": {
            "CMAC": ["CMAC AREQUIPA"]
        }
    },
    "YAULI": {
        "NCMV": {
            "BANCO": ["CREDITO"]
        }
    },
    "ZARUMILLA": {
        "NMIV": {
            "CMAC": ["CMAC HUANCAYO"]
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
