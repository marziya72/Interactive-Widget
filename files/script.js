function resetReceiptAnimation() {
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('show');
    void receipt.offsetWidth;
    receipt.classList.add('show');
  
    setTimeout(() => {
      receipt.classList.remove('show');
    }, 3000);
  }  
  
  
  
  let receiptImg = new Image();
  receiptImg.src = 'receipt.png'; // your receipt image
  
  function drawReceipt(username) {
    const canvas = document.getElementById('receiptCanvas');
    const ctx = canvas.getContext('2d');
  
    receiptImg.onload = () => {
      ctx.drawImage(receiptImg, 0, 0, canvas.width, canvas.height);
    };
    ctx.drawImage(receiptImg, 0, 0, canvas.width, canvas.height);
  
    // Now overlay the username
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black'; // choose contrasting color
    ctx.textAlign = 'left';
    ctx.fillText(username, 50, 100); // adjust x/y as needed
  }
  

function play() {
    resetReceiptAnimation();
    const spat = document.getElementById('spat');
    const vanilla = document.getElementById('vanilla');
  
    // Reset any previous animation states
    spat.classList.remove('move');
    spat.classList.remove('move2');
    spat.classList.remove('move3');
    spat.classList.remove('move4');
    vanilla.classList.remove('lift');
    matcha.classList.remove('lift');
    strawb.classList.remove('lift');
    mango.classList.remove('lift');
  
  
    // Step 2: After 1s, fade in spatula and lift tiramisu
    setTimeout(() => {
      spat.classList.add('move');
      vanilla.classList.add('lift');
      reset();
    }, 1000);
  }
  
  function play2() {
    resetReceiptAnimation();
    const spat = document.getElementById('spat');
    const matcha = document.getElementById('matcha');
  
    // Reset any previous animation states
    spat.classList.remove('move');
    spat.classList.remove('move2');
    spat.classList.remove('move3');
    spat.classList.remove('move4');
    vanilla.classList.remove('lift');
    matcha.classList.remove('lift');
    strawb.classList.remove('lift');
    mango.classList.remove('lift');
  
    // Step 2: After 1s, fade in spatula and lift tiramisu
    setTimeout(() => {
      spat.classList.add('move2');
      matcha.classList.add('lift');
      reset();
    }, 1000);
  }

  function play3() {
    resetReceiptAnimation();
    const spat = document.getElementById('spat');
    const strawb = document.getElementById('strawb');
  
    spat.classList.remove('move');
    spat.classList.remove('move2');
    spat.classList.remove('move3');
    spat.classList.remove('move4');
    vanilla.classList.remove('lift');
    matcha.classList.remove('lift');
    strawb.classList.remove('lift');
    mango.classList.remove('lift');
  
    // Step 2: After 1s, fade in spatula and lift tiramisu
    setTimeout(() => {
      spat.classList.add('move3');
      strawb.classList.add('lift');
      reset();
    }, 1000);
  }

  function play4() {
    resetReceiptAnimation();
    const spat = document.getElementById('spat');
    const mango = document.getElementById('mango');
  
    // Reset any previous animation states
    spat.classList.remove('move');
    spat.classList.remove('move2');
    spat.classList.remove('move3');
    spat.classList.remove('move4');
    vanilla.classList.remove('lift');
    matcha.classList.remove('lift');
    strawb.classList.remove('lift');
    mango.classList.remove('lift');
  
    // Step 2: After 1s, fade in spatula and lift tiramisu
    setTimeout(() => {
      spat.classList.add('move4');
      mango.classList.add('lift');
      reset();
    }, 1000);
  }

  function reset() {
    setTimeout(() => {
        //resetReceiptAnimation();
        spat.classList.remove('move');
        spat.classList.remove('move2');
        spat.classList.remove('move3');
        spat.classList.remove('move4');
        vanilla.classList.remove('lift');
        matcha.classList.remove('lift');
        strawb.classList.remove('lift');
        mango.classList.remove('lift');
    }, 2000);
  }


  
  