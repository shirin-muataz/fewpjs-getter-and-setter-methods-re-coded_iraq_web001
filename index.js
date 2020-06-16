// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  
  get circumference(){
    return 2 * Math.PI * this.radius;
  }
  get area(){
    return (this.radius **2) * Math.PI;
  }
  
  set diameter(radius){
    this.radius=radius;
    return this.radius *2;
  }
  
  set circumference(radius){
    return 2*radius*Math.PI;
  }
  set area(radius){
    return (radius **2) * Math.PI;
  }
}