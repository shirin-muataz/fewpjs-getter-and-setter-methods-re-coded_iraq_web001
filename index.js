// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius *2;
  }
  
  get circumference(){
    return this.radius*Math.PI();
  }
  get area(){
    return Math.sqrt(this.radius) * Math.PI;
  }
  
  set diameter(radius){
    return radius *2;
  }
  
  set circumference(radius){
    return radius*Math.PI;
  }
  set area(radius){
    return Math.sqrt(radius) * Math.PI;
  }
}