class node {
    constructor() {
      this.value = null; 
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null;
      this.currentValue = null;    
    }
    
    
    append = (value) => {
      let newNode = new node;
      newNode.value = value;
      if (!this.headNode) this.headNode = newNode;
      else {
        this.currentValue = this.headNode;
        while (this.currentValue.nextNode) {
          this.currentValue = this.currentValue.nextNode;
        }
        this.currentValue.nextNode = newNode;
      }
    };
    
    prepend = (value) => {
      let newNode = new node;
      newNode.value = value;
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    };
    
    size = () => {
      let count = 0;
      this.currentValue = this.headNode;
      while (this.currentValue.nextNode) {
        count++;
        this.currentValue = this.currentValue.nextNode;
      }
      return count;
    };
    
    head = () => {
      return this.headNode;
    };
    
    tail = () => {
      this.currentValue = this.headNode;
      while (this.currentValue.nextNode) {
        this.currentValue = this.currentValue.nextNode;
      }
      return this.currentValue;
    };
    
    at = (value) => {
      let count = 0;
      this.currentValue = this.headNode;
      while (this.currentValue.nextNode) {
        if (count === value) return this.currentValue;
        count++;
        this.currentValue = this.currentValue.nextNode;
      }
      if (count === value) return this.currentValue;
    };
    
    pop = () => {
      this.currentValue = this.headNode;
      while (this.currentValue.nextNode.nextNode) {
        this.currentValue = this.currentValue.nextNode;
      }
      this.currentValue.nextNode = null;
      return this.currentValue;
    };
    
    contains = (value) => {
      this.currentValue = this.headNode;
      while (this.currentValue) {
        if (this.currentValue.value === value) return true;
        this.currentValue = this.currentValue.nextNode;
      }
      return false;
    };
    
    find = (value) => {
      let count = 0;    
      this.currentValue = this.headNode;
      while (this.currentValue) {
        if (this.currentValue.value === value) return count;
        count ++;
        this.currentValue = this.currentValue.nextNode;
      } 
    };
    
    toString = () => {
      let output = "";
      this.currentValue = this.headNode;
      while (this.currentValue) {
        output = output + "( " + this.currentValue.value + " ) -> ";
        this.currentValue = this.currentValue.nextNode;
      }
      output = output + "null";
      return output;
    };
    
    showList = () => {
      return this.headNode;
    };
  };
  
  // example uses class syntax - adjust as necessary
  const list = new LinkedList();
  
  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");
  
  list.prepend("turtle");
  
  console.log(list.size());
  
  console.log(list.head());
  
  console.log(list.tail());
  
  console.log(list.at(3));
  
  console.log(list.pop());
  
  console.log(list.contains("snake"))
  
  console.log(list.find("hamster"));
  
  console.log(list.toString());
  
  // console.log(list.showList());