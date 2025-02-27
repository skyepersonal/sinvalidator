export const validator = (sinStr: string): boolean => {
    let sin: number = +sinStr;
    let valid: boolean = true;
    let sum: number = 0;
    if(sinStr.length != 9) {
        valid = false;
    } else {
        for(let i = 0; i < 9; i++) {
            let tempSum: number = sin % 10;
            if (i % 2 != 0){
                tempSum *= 2;
            }
            if(tempSum <= 9) {
                sum+= tempSum;
            } else {
                sum+= tempSum%10 + Math.trunc(tempSum/10);
            }
            sin = Math.trunc(sin/10);
        }
        if(sum % 10 != 0) {
            valid = false;
        }
    }
    return valid;
}
