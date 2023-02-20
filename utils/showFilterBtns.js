const showFilterBtns = () => {
    let filtBtns = [];
    filtBtns.push(btn_T, btn_S, btn_L, btn_H, btn_G, btn_B, btn_All);
    
    for (i in filtBtns){
      filtBtns[i].hidden = false;
    }};

export default showFilterBtns;