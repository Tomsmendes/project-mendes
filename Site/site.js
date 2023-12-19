
        // Função para inicializar o mapa
        function initMap(initialLocation) {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: initialLocation,
                zoom: 12,
            });

            // Adiciona um marcador para a localização atual
            new google.maps.Marker({
                position: initialLocation,
                map: map,
                title: 'Sua Localização Atual',
            });
        }

        // Função para obter a localização atual do usuário
        function getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const currentLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        initMap(currentLocation);
                    },
                    error => {
                        console.error('Erro ao obter a localização:', error.message);
                    }
                );
            } else {
                alert('Geolocalização não suportada pelo seu navegador.');
            }
        }