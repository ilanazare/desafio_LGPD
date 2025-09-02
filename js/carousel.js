let carouselArr = [];

class Carousel {

    constructor(image, title, uri){
        this.image = image;
        this.title = title;
        this.uri = uri;
        carouselArr.push(this);
    }
    
      
    static Start(arr){
        if(arr){

            if(arr && arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next();
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
            }
            
        } else {
            throw "O método Start precisa de um array como parâmetro";
        }
    }

    static Next(){

        const carouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");
        if(!carouselElement || !titleElement){
            throw "Elemento do carrosel não encontrado";
        }

        const item = Carousel._arr[Carousel._sequence];
        carouselElement.style.backgroundImage = `url(${item.image})`;
        carouselElement.style.backgroundSize = "cover";
        carouselElement.style.backgroundPosition = "center";    
        carouselElement.style.transition = "background-image 0.5s ease-in-out";
        titleElement.innerHTML = `<a href= "${item.uri}"> ${item.title}</a>`;
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
};
