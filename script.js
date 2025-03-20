// Datos de las narrativas
const narrativeData = {
    'ai-blockchain': {
        title: 'IA + Blockchain (29.6%)',
        description: 'La intersección entre inteligencia artificial y blockchain está revolucionando ambos campos. Los modelos de IA descentralizados, el aprendizaje federado y los oráculos inteligentes son las principales áreas de desarrollo.',
        projects: [
            'Ocean Protocol - Marketplace de datos para IA',
            'Fetch.ai - Agentes autónomos basados en IA',
            'SingularityNET - Red descentralizada de servicios de IA'
        ]
    },
    'dev-tools': {
        title: 'Herramientas para Desarrolladores (24.0%)',
        description: 'El desarrollo de infraestructura y herramientas para facilitar la creación de aplicaciones blockchain es fundamental para la adopción masiva. Las soluciones de escalabilidad y las herramientas de desarrollo están atrayendo importantes inversiones.',
        projects: [
            'Alchemy - Infraestructura blockchain para desarrolladores',
            'Hardhat - Entorno de desarrollo para Ethereum',
            'The Graph - API indexada para datos blockchain'
        ]
    },
    'payments': {
        title: 'Pagos Descentralizados (17.0%)',
        description: 'Las soluciones de pago descentralizadas están transformando las finanzas globales, ofreciendo alternativas más rápidas, económicas y accesibles que los sistemas tradicionales.',
        projects: [
            'Lightning Network - Solución de capa 2 para Bitcoin',
            'Celo - Plataformas de pagos móviles',
            'Stellar - Red de pagos internacionales'
        ]
    },
    'dex': {
        title: 'Exchanges Descentralizados (15.6%)',
        description: 'Los DEX permiten el intercambio de activos digitales sin intermediarios. La evolución hacia arquitecturas modulares y la implementación de IA para optimizar operaciones están marcando su desarrollo actual.',
        projects: [
            'Uniswap V4 - Exchange con arquitectura modular',
            'dYdX - Plataforma de derivados descentralizada',
            'GMX - Trading de perpetuos con bajas comisiones'
        ]
    },
    'data-service': {
        title: 'Servicios de Datos (13.7%)',
        description: 'La monetización y gestión de datos a través de blockchain está redefiniendo cómo se comparte y comercializa la información. Las pruebas de conocimiento cero están permitiendo un intercambio de datos con mayor privacidad.',
        projects: [
            'World Network - Identidad digital verificable',
            'Chainlink - Oráculos de datos para smart contracts',
            'Filecoin - Almacenamiento descentralizado de datos'
        ]
    }
};

// Funcionalidad para mostrar información detallada
document.querySelectorAll('.bar-item').forEach(item => {
    item.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const data = narrativeData[id];
        
        // Actualizar panel de información
        document.getElementById('info-title').textContent = data.title;
        document.getElementById('info-description').textContent = data.description;
        
        const projectsList = document.getElementById('info-projects');
        projectsList.innerHTML = '';
        data.projects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = project;
            projectsList.appendChild(li);
        });
        
        // Mostrar panel
        document.getElementById('info-panel').style.display = 'block';
        
        // Resaltar barra seleccionada
        document.querySelectorAll('.bar-item').forEach(bar => {
            bar.style.backgroundColor = bar === this ? 'var(--hover-color)' : '';
        });
        
        // Forzar una actualización de la altura para cuando está embebido
        if (window.parent) {
            setTimeout(function() {
                const height = document.body.scrollHeight;
                window.parent.postMessage({ type: 'resize', height: height }, '*');
            }, 200);
        }
    });
});

// Animación inicial
document.querySelectorAll('.bar-inner').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.width = width;
    }, 300);
});

// Seleccionar automáticamente el primer elemento después de cargar
window.addEventListener('load', function() {
    // Esperar a que se complete la animación inicial
    setTimeout(function() {
        // Simular un clic en el primer elemento
        const firstItem = document.querySelector('.bar-item');
        if (firstItem) {
            firstItem.click();
        }
    }, 500);
    
    // También intentar ajustar la altura para Medium
    setTimeout(function() {
        if (window.parent) {
            const height = Math.max(700, document.body.scrollHeight);
            window.parent.postMessage({ type: 'resize', height: height }, '*');
        }
    }, 1000);
});
