var coinChange = function(coins, amount) {
    var dp = [0], i , j, min;
     for(i = 1; i <= amount; i++){
         min = Infinity;
         for(j = 0; j < coins.length; j++)
             if(i - coins[j] >= 0) 
                 min = Math.min(min, dp[i - coins[j]] + 1);
         dp[i] = min;
     }
     return dp[amount] === Infinity ? -1 : dp[amount];
};

// given an amount, and a set of different coin denominations, return the least amount of coins required to sum the amount.