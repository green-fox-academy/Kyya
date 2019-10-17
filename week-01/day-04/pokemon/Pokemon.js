class Pokemon {

  constructor(name, type, effectiveAgainst) {
    this.name = name;
    this.type = type;
    this.effectiveAgainst = effectiveAgainst;
  }

  isEffectiveAgainst(pokemon) {
    return this.effectiveAgainst === pokemon.type;
  }
}

module.exports = Pokemon;
