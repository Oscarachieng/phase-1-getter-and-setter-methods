// Add your Circle class here

/*
Diameter = radius • 2
Circumference = π • diameter
Area = π • radius2
*/

/*
1. declare a class , Cirlce.
2. declare a private property.
3. declare constructor function, setting radius as parameter.
4. Store the value of argument into the property.
5. get diameter (){
    return this.radius*2
} 
6.get circumference (){
    return Math.PI*${this.diameter}
}
7. get area(){
    return Math.PI*radius*radius
}
8.set diameter(newDiameter){
    this.#radius = newDaimater/2
}
9. set circumference(newCircumference){
    this.#radius = ((newCircumference/Math.PI)/2)
}
10. set area (newArea){
    this.#radius = Math.sqrt(newArea/Math.PI)
}
*/

class Circle {
    
    constructor(radius){
        this.radius = radius;
    }
    get diameter (){
        return this.radius*2
    } 
    get circumference (){
        return Math.PI*this.diameter
    }
     get area(){
        return Math.PI*(this.diameter/2)*(this.diameter/2)
    }
    set diameter(newDiameter){
        this.radius = newDiameter/2
    }
     set circumference(newCircumference){
        this.radius = ((newCircumference/Math.PI)/2)
    }
     set area (newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }

}