module.exports = function NumToWord(num) {    
    var n1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var n2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var n3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    num = num.toString();
    num = num.replace(/[\, ]/g, '');
    if (num != parseFloat(num)) return 'fail!';
    if (num == '0') return 'zero';
    var x = num.indexOf('.');
    if (x == -1)
        x = num.length;
    if (x > 4)
        return 'too big';    
    var n = num.split('');
    var str = '';
    var sk = 0;
    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += n2[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += n3[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) { 
            str += n1[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }            
    }

    if (x != num.length) {
        var y = num.length;
        str += 'point';
        for (var i = x + 1; i < y; i++)
            str += n1[n[i]] + '';
    }
    return str.replace(/.$/,"");
}
