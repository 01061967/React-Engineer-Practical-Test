class bank {
    constructor({ bankName, description, age, url }) {
      this.bankName = bankName;
      this.description = description;
      this.age = age;
      this.url = url;
    }
  
    // Get the age of the bank in years
    getAge() {
      const now = new Date();
      const year = now.getFullYear();
      return year - this.age;
    }
  }
  
  export default bank;
  