# Shakespeare Quotes App

A Shakespeare Quotes app with custom API.

You can access the [live app here](https://shakespeare-quotes-gen.herokuapp.com/).

## Process

I used a Python script on the raw texts to generate quotes by theme, by play or randomly. This data is in the `_data` folder.

See full [code here](https://github.com/wolfthread/shakespeare-quotes-generator) for the actual script I used to generate the quotes.

I then created a seeder to pull the quotes and themes from the JSON files and create themes and quotes with ids for faster indexing within the \_data folder.

## API

Here is the [documentation](https://documenter.getpostman.com/view/13762589/TVmS6Zyj) if you want to use the API for your own projects.

## Future Improvements

- [ ] Add a fetch all themes to get list of themes
- [ ] Add a fetch all plays to get list of all titles
- [ ] Add Poems and Sonnets to theme search (need to change logic a bit)
- [ ] Add more themes or even a possibility to add them (add more themes request) (need to re-run the python script, then re-deploy)
- [ ] Make Themes more dynamic, ie possibility to enter a non-existing theme.
- [ ] Add more translations of Shakespeare plays. For this, the complete UI needs to be translated too.
- [ ] Implement `Like` functionality.

## Source

The initial texts used for this came from [Folger Digital Texts](https://shakespeare.folger.edu/download-the-folger-shakespeare-complete-set/), from [The Folger Shakespeare](<(https://shakespeare.folger.edu/)>), licensed under a [Creative Commons Attribution-NonCommercial 3.0 Unported license](https://creativecommons.org/licenses/by-nc/3.0/deed.en_US).

## License

MIT &copy; 2020, Sylvain Dessureault
