export default class Developer {

  constructor({name, language}) {
    this.name = name;
    this.language = language;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(language) {
    this.language = language;
  }

  code() {
    return Promise.resolve(this)
      .then(function(that) {

      switch (that.language) {
        case 'nodejs':
          return 'console.log("Hello, ' + that.name + '!")'
        case 'java':
          return 'System.out.println("Hello, ' + that.name + '!")'
        case 'python':
          return 'print("Hello, ' + that.name + '!")'
        default:
          throw new Error('Unsupported language: ' + that.language)
      }
    });
  }
}
