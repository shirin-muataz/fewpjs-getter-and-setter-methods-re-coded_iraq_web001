// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius *2;
  }
  
  get circumference(){
    return this.radius *2 *Math.PI;
  }
  get area(){
    return Math.sqrt(this.radius) * Math.PI;
  }
  
  set diameter(radius){
    return this.radius *2;
  }
  
  set circumference(radius){
    return this.radius *2 *Math.PI;
  }
  set area(radius){
    return Math.sqrt(this.radius) * Math.PI;
  }
}