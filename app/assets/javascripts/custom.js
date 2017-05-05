class Developer {
  constructor(options = {}, data = []) {
    this.name = 'David Montesdeoca'
    this.url = 'http://www.davidmontesdeoca.net'
    this.data = data
    this.options = options
  }

  getName() {
    console.log(`Developer: ${this.name}`)
  }
}
