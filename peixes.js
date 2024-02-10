var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixezinho;

function preload() {
    // carregar o fundo
    this.load.image('fundo', 'assets/bg_azul-escuro.png');

    //carregar a logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar peixe
    this.load.image('peixe', 'assets/peixes/baiacu_lado.png');

    //carregar elemento da tarefa adicional
    this.load.image('peixe2', 'assets/peixes/peixe_rosa.png');
}

function create() {
    // adicionando o fundo na tela
    this.add.image(400, 300, 'fundo');

    //carregar a logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //carregar o peixe na tela e guardar o peixe em uma variável
    peixezinho = this.add.image(400, 300, 'peixe').setScale(0.5, 0.5).setFlip(true, false);

    //carregando o elemento da tarefa adicional na tela do jogo
    this.add.image(150, 130, 'peixe2').setScale(0.6, 0.6);

    //transformando a variável
    peixezinho.setFlip(true, false);
}

function update() {
    //adicionando controles no peixe
    peixezinho.x = this.input.x;
    peixezinho.y = this.input.y;
}
