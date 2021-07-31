// Your code here
class Polygon {
    constructor(arr){
    this.arr = arr;
    this.count = this.arr.length
    }

    get countSides(){
        return this.arr.length;
    }
    get perimeter(){
        return this.arr.reduce((a,b) => a + b, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
      if (this.count !== 3) {
          return false;
      } else {
        let arr1 = this.arr[0]
        let arr2 = this.arr[1]
        let arr3 = this.arr[2]
        return ((arr1 + arr2 > arr3) && (arr1 + arr3 > arr2) && (arr3+ arr2 > arr1))
      }
    }
  }

  class Square extends Polygon{
    
    get area(){
        return this.arr[1] * this.arr[2];
    }

    get isValid(){
        if (this.count !== 4){
            return false;
        } else {
        let arr1 = this.arr[0]
        let arr2 = this.arr[1]
        let arr3 = this.arr[2]
        let arr4 = this.arr[3]
        return (arr1 === arr2 && arr1 === arr3 && arr1 == arr4)
        }
    }
  }