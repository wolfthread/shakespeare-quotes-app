const themes = [
  'All Themes',
  'Desire',
  'Love',
  'Strength',
  'Rich',
  'Ambition',
  'Evil',
  'Order',
  'Disorder',
  'Appearance',
  'Violence',
  'Tyranny',
  'Guilt',
  'Conscience',
  'Witchcraft',
  'Lust',
  'Courage',
  'Pain',
  'Friendship',
  'Friends',
  'Fate',
  'Faith',
  'Spirit',
  'Vengeance',
];

class ThemeObject {
  constructor(id, theme, key) {
    this.key = id;
    this.value = id;
    this.name = theme;
    this.selected = false;
  }
}

themes.sort();
store = [];

for (let i = 0; i < themes.length; i++) {
  let themeObj = new ThemeObject(i, themes[i], 'theme');
  store.push(themeObj);
}

console.log(store);
