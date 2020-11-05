function percent(initValue = 0, variation = 0){
    if (initValue == 0){
        return  0
    }
    else {
        return variation / initValue * 100
    }


};

export { percent };