//triagalnik plus hight and width and console log
let rec = {
    hight: 12,
    width: 4,
    grow: function (hight, width) {
        this.hight += hight,
        this.width += width
    },
    print: function(){
        console.log(this.hight + this.width)
    }
}
rec.grow(1,2)
rec.print()