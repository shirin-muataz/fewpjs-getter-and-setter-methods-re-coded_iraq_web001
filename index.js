// Add your Circle class here
class Circle{
  constructor(radius){
    this._radius=radius;
  }
  get diameter(){
    return this._radius *2;
  }
  
  get circumference(){
    return 2 * Math.PI * this._radius;
  }
  get area(){
    return Math.sqrt(this._radius) * Math.PI;
  }
  
  set diameter(radius){
    return radius *2;
  }
  
  set circumference(radius){
    return 2*radius*Math.PI;
  }
  set area(radius){
    return Math.sqrt(radius) * Math.PI;
  }
}