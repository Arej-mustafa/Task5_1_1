function appendToResult(value) {
    document.getElementById('result').value += value;
    }
    console.log(document.getElementById('result').value)
    function calculateResult() {
    let  result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
    }

    function clearResult() {
    document.getElementById('result').value = '';
    }

    function delet(){
    document.getElementById('result').value =document.getElementById('result').value.slice(0,-1);;

    }