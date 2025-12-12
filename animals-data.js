// Dados dos animais para adoção
const animalsData = [
    {
        id: 1,
        name: "Bolinha",
        breed: "Vira-lata",
        age: "2 anos",
        gender: "Macho",
        mainImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=600&fit=crop"
        ],
        description: "Bolinha é um cão muito carinhoso e brincalhão. Adora crianças e é muito dócil. Está castrado, vacinado e vermifugado. Procura um lar cheio de amor e atenção."
    },
    {
        id: 2,
        name: "Luna",
        breed: "SRD",
        age: "1 ano",
        gender: "Fêmea",
        mainImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=600&fit=crop"
        ],
        description: "Luna é uma gata muito tranquila e independente. Perfeita para quem busca um companheiro mais reservado. Está castrada, vacinada e vermifugada. Adora carinho e sonecas ao sol."
    },
    {
        id: 3,
        name: "Rex",
        breed: "Labrador",
        age: "3 anos",
        gender: "Macho",
        mainImage: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop"
        ],
        description: "Rex é um cão muito inteligente e ativo. Adora brincar e fazer exercícios. Ideal para famílias ativas. Está castrado, vacinado e vermifugado. Muito obediente e carinhoso."
    },
    {
        id: 4,
        name: "Mimi",
        breed: "Persa",
        age: "4 meses",
        gender: "Fêmea",
        mainImage: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&h=600&fit=crop"
        ],
        description: "Mimi é uma gatinha filhote muito brincalhona e curiosa. Adora explorar e brincar. Está vacinada e vermifugada. Será castrada quando completar 6 meses. Perfeita para quem quer acompanhar o crescimento de um filhote."
    },
    {
        id: 5,
        name: "Thor",
        breed: "Pastor Alemão",
        age: "5 anos",
        gender: "Macho",
        mainImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1589941024236-875df8c0928e?w=600&h=600&fit=crop"
        ],
        description: "Thor é um cão muito leal e protetor. Muito dócil com a família, mas precisa de espaço. Está castrado, vacinado e vermifugado. Ideal para quem tem experiência com cães de grande porte."
    },
    {
        id: 6,
        name: "Nina",
        breed: "SRD",
        age: "6 meses",
        gender: "Fêmea",
        mainImage: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=600&h=600&fit=crop"
        ],
        description: "Nina é uma cadelinha filhote muito energética e carinhosa. Adora brincar e está sempre feliz. Está vacinada e vermifugada. Será castrada quando completar 6 meses. Perfeita para famílias com crianças."
    },
    {
        id: 7,
        name: "Simba",
        breed: "Vira-lata",
        age: "1 ano e meio",
        gender: "Macho",
        mainImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop"
        ],
        description: "Simba é um gato muito sociável e brincalhão. Adora interagir com pessoas e outros animais. Está castrado, vacinado e vermifugado. Perfeito para quem busca um companheiro ativo."
    },
    {
        id: 8,
        name: "Mel",
        breed: "Golden Retriever",
        age: "2 anos",
        gender: "Fêmea",
        mainImage: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=600&fit=crop"
        ],
        description: "Mel é uma cadela muito dócil e carinhosa. Adora crianças e é muito paciente. Está castrada, vacinada e vermifugada. Ideal para famílias que buscam um cão de temperamento calmo e amigável."
    }
];

// Função para renderizar os animais na página
window.renderAnimals = function() {
    const animalsGrid = document.getElementById('animalsGrid');
    if (!animalsGrid) return;

    animalsGrid.innerHTML = animalsData.map(animal => `
        <div class="animal-card" onclick="openAnimalModalFromData(${animal.id})">
            <div class="animal-image">
                <img src="${animal.mainImage}" alt="${animal.name}" loading="lazy">
            </div>
            <div class="animal-info">
                <h3>${animal.name}</h3>
                <p class="animal-breed">${animal.breed}</p>
                <p class="animal-age">${animal.age}</p>
            </div>
        </div>
    `).join('');
}

// Função global para abrir o modal (exposta no window)
window.openAnimalModalFromData = function(animalId) {
    const animal = animalsData.find(a => a.id === animalId);
    if (!animal) return;

    const modal = document.getElementById('animalModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-animal-content">
            <div class="modal-animal-images">
                <div class="modal-main-image">
                    <img src="${animal.images[0]}" alt="${animal.name}" id="modalMainImage">
                </div>
                <div class="modal-thumbnails">
                    ${animal.images.map((img, index) => `
                        <img src="${img}" alt="${animal.name} - Foto ${index + 1}" 
                             onclick="window.changeModalImage('${img}')" 
                             class="thumbnail ${index === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
            </div>
            <div class="modal-animal-details">
                <h2>${animal.name}</h2>
                <div class="animal-details-grid">
                    <div class="detail-item">
                        <strong>Raça:</strong>
                        <span>${animal.breed}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Idade:</strong>
                        <span>${animal.age}</span>
                    </div>
                    <div class="detail-item">
                        <strong>Sexo:</strong>
                        <span>${animal.gender}</span>
                    </div>
                </div>
                <div class="animal-description">
                    <h3>Sobre ${animal.name}</h3>
                    <p>${animal.description}</p>
                </div>
                <div class="modal-actions">
                    <a href="contatos.html" class="btn btn-primary">Quero Adotar</a>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Expor função globalmente
window.openAnimalModal = window.openAnimalModalFromData;

// Função para trocar a imagem principal no modal
window.changeModalImage = function(imageSrc) {
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Atualizar thumbnails ativas
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === imageSrc) {
            thumb.classList.add('active');
        }
    });
}

// Fechar modal ao clicar no X
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('animalModal');
    const closeBtn = document.getElementById('modalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Fechar modal ao clicar fora
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Renderizar animais se estiver na página de adoção
    if (document.getElementById('animalsGrid')) {
        window.renderAnimals();
    }
});

