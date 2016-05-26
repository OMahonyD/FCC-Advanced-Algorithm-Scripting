/**********************************************************
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Global Object
**********************************************************/

function drawer(price, cash, cid) {
var change = [['PENNY', 0.00], ['NICKEL', 0.00], ['DIME', 0.00], ['QUARTER', 0.00], ['ONE', 0.00], ['FIVE', 0.00], ['TEN', 0.00], ['TWENTY', 0.00], ['ONE HUNDRED', 0.00]];
  
  var changeVal = cash - price;
        console.log(changeVal);
  var cidVal = 0;
  for(var i = 0; i < cid.length; i++)
    {      
      cidVal += cid[i][1];      
    }
  
  if(cidVal < changeVal) { return "Insufficient Funds"; } else if(cidVal === changeVal) { return "Closed"; } else { while(changeVal > 0.00)
        {  
         
          if((changeVal >= 100.00) && (cid[8][1] >= 100.00))
            {
              changeVal -= 100.00;
              cid[8][1] -= 100.00;
              change[8][1] += 100.00;
            }
          else if((changeVal >= 20.00) && (cid[7][1] >= 20.00))
            {
              changeVal -= 20.00;
              cid[7][1] -= 20.00;
              change[7][1] += 20.00;
            } 
          else if((changeVal >= 10.00) && (cid[6][1] >= 10.00))
            {
              changeVal -= 10.00;
              cid[6][1] -= 10.00;
              change[6][1] += 10.00;
            } 
          else if((changeVal >= 5.00) && (cid[5][1] >= 5.00))
            {
              changeVal -= 5.00;
              cid[5][1] -= 5.00;
              change[5][1] += 5.00;
            } 
          else if((changeVal >= 1.00) && (cid[4][1] >= 1.00))
            {
              changeVal -= 1.00;
              cid[4][1] -= 1.00;
              change[4][1] += 1.00;
            }
          else if((changeVal >= 0.25) && (cid[3][1] >= 0.25))
            {
              changeVal -= 0.25;
              cid[3][1] -= 0.25;
              change[3][1] += 0.25;
            } 
          else if((changeVal >= 0.10) && (cid[2][1] >= 0.10))
            {
              changeVal -= 0.10;
              cid[2][1] -= 0.10;
              change[2][1] += 0.10;
            } 
          else if((changeVal >= 0.05) && (cid[1][1] >= 0.05))
            {
              changeVal -= 0.05;
              cid[1][1] -= 0.05;
              change[1][1] += 0.05;
            } 
          else if((changeVal >= 0.01) && (cid[0][1] >= 0.01))
            {
              changeVal -= 0.01;
              cid[0][1] -= 0.01;
              change[0][1] += 0.01;
            } 
      
      changeVal = changeVal.toFixed(2);
      
      
        }
    }
  
  
  function isNotZero(value) 
  {
    return value[1] > 0.00;
  }
  
  change = change.filter(isNotZero);
  
  return change.reverse();
}  
 
