class Stringer{
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(innerLength){
        this.innerLength += innerLength;
    }

    decrease(innerLength){
        this.innerLength = this.innerLength - innerLength > 0 ? this.innerLength - innerLength : 0;
    }

    toString(){
        if (this.innerLength === 0) {
            return '...';
        }

        return this.innerString.slice(0, this.innerLength) + (this.innerLength >=  this.innerString .innerLength ? '' : '...')
    }
}