function Book(t,a,g,p){
    this.title=t;
    this.author=a;
    this.genre=g;
    this.price=p;
}

function Author(n,b,nl){
    this.name=n;
    this.birthyear=b;
    this.nationality=nl;
}
// ,this.author.name,this.genre,this.price
Book.prototype.getBookInfo=function(){
    console.log(`Tittle:-${this.title}\nauther Name :- ${this.author.name}\ngenre:${this.genre}\nprice:-${this.price} `)
} 

let a1=new Author("Mahipal",2005,"IND")
let b1=new Book("oxford",a1,"english",499)

b1.getBookInfo()