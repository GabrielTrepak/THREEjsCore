# FirstTHREEJS

This code utilizes the THREE.js library for 3D rendering and interaction:

Libraries and Modules: Imports necessary libraries including THREE.js core (three), OrbitControls for camera manipulation, dat.gui for UI controls, and GLTFLoader for loading 3D models in GLTF format.

Assets: Loads textures (space.jpeg, PN.png, PE.png) and a 3D model (Doort.glb) using their respective paths.

Renderer Setup: Creates a WebGL renderer and configures it for shadow mapping and window dimensions.

Scene, Camera, and Controls: Sets up a 3D scene, a perspective camera with orbit controls, and an axes helper for orientation.

Geometries and Materials: Defines various geometries (box, plane, sphere) and their corresponding materials (basic, standard) with textures and colors.

Lights: Adds ambient and directional lights to illuminate the scene, with shadow configuration for the directional light.

Helpers: Includes helpers for lights (DirectionalLightHelper, CameraHelper), and optionally, for spot lights (SpotLightHelper).

Fog: Implements fog (THREE.Fog) or exponential fog (THREE.FogExp2) for depth perception.

Texture Loading: Uses TextureLoader to load and set a background texture for the scene and apply textures to materials.

Meshes: Creates mesh objects (boxes, planes, spheres) with specified geometries and materials, positioning them within the scene.

Custom Shaders: Includes commented-out code for defining custom vertex and fragment shaders.

Model Loading: Loads a GLTF model (Doort.glb) using GLTFLoader, positions it in the scene upon loading completion.

GUI Controls: Sets up a dat.GUI interface to dynamically control sphere color, wireframe display, and animation speed.

Animation and Interaction: Implements animation (animate function) for rotating objects and reacting to mouse movements using raycasting (Raycaster).

Event Listeners: Registers event listeners for window resize and mouse movement to update camera aspect ratio and handle interactive behavior.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Este código utiliza a biblioteca THREE.js para criar uma cena 3D interativa com diversos elementos e funcionalidades. Aqui está um resumo do que é usado:

Renderização e Controles:

THREE.WebGLRenderer: Renderiza a cena usando WebGL.
OrbitControls: Permite controlar a câmera de forma interativa.
Elementos 3D:

Meshes (Malhas): Representam objetos 3D na cena, como caixas, esferas e modelos importados.
Geometrias: Definem a forma dos objetos (caixa, esfera, plano).
Materiais: Controlam a aparência dos objetos (cores, texturas, wireframe).
Texturas: Aplicadas em materiais para adicionar detalhes visuais aos objetos.
Iluminação e Sombras:

AmbientLight: Luz ambiente que ilumina todos os objetos igualmente.
DirectionalLight: Luz direcional que simula a luz do sol, com projeção de sombras.
Helpers: Ajudam a visualizar as luzes e suas áreas de influência na cena.
Controles e Interatividade:

dat.GUI: Interface de usuário para ajustar variáveis e parâmetros em tempo real.
Raycaster: Detecta interseções de raio (como o cursor do mouse) com objetos na cena, permitindo interatividade.
Carregamento de Modelos Externos:

GLTFLoader: Carrega modelos 3D no formato GLTF para serem exibidos na cena.
Animação e Atualização de Cena:

Animation Loop: Função que atualiza e renderiza a cena repetidamente para criar animações suaves.
Event Listeners: Detectam eventos como redimensionamento da janela ou movimento do mouse para ajustar a cena dinamicamente.
Outros Recursos:

Fog (Névoa): Adiciona efeitos atmosféricos à cena para simular profundidade.
AxesHelper e GridHelper: Ajudam na visualização dos eixos e grades na cena, facilitando a orientação espacial.
