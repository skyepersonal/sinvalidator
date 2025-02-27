const multiplierVal: readonly number[] = [1,2,1,2,1,2,1,2,1];

export const validator = (sin: readonly number[]): boolean => {
    let valid: boolean = true;
    let sum: number = 0;
    if(sin.length != 9) {
        valid = false;
    } else {
        for(let i = 0; i < 9; i++) {
            let tempSum: number = sin[i] * multiplierVal[i];
            if(tempSum <= 9) {
                sum+= tempSum;
            } else {
                sum+= tempSum%10 + Math.trunc(tempSum/10);
            }
        }
        if(sum % 10 != 0) {
            valid = false;
        }
    }
    let sinStr: string = '';
    for(let i in sin) {
        sinStr += sin[i] + "";
    }
    return valid;
}



