class basicshapeclass {

    constructor(shapetype, param1, param2, param3, translateX, translateY,
        rotateXvalue, textureValue) {
        this.shapetype = shapetype;
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.translateX = translateX;
        this.translateY = translateY;
        this.rotateXvalue = rotateXvalue;
        this.textureValue = textureValue;
    }

    draw(fCount) {
        push();
        rotateX(this.rotateXvalue * fCount);
        texture(this.textureValue);
        noStroke();
        if (this.shapetype == "ellipsoid") {
            translate(this.translateX, this.translateY);
            ellipsoid(this.param1, this.param2, this.param3);
        } else if (this.shapetype == "cone") {
            translate(this.translateX, this.translateY);
            cone(this.param1, this.param2);
        }
        pop();
    }
}
