// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return Math.sqrt(this.radius);
  }
}