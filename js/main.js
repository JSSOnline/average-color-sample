function avgImageColors(){
    var img = document.getElementsByTagName('img')[1];
    console.log(img)
    var vibrant = new Vibrant(img, 64, 3);
    var swatches = vibrant.swatches()
    for (var swatch in swatches){
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
            let colors = document.getElementsByClassName('colors');
            let color = document.createElement('div');
            color.style.backgroundColor = swatches[swatch].getHex();

            if (swatch == 'Vibrant') {
                document.body.style.backgroundColor = swatches[swatch].getHex();
            }
            colors[0].appendChild(color);
            console.log(swatch, swatches[swatch].getHex())
        }
    }
}