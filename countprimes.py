### rudimentary method of counting primes up to a non-negative n value. 
def countPrimes(n):
    if n == 0:
        return n
    count = 0
    for i in range(1,n):
        if isPrime(i):
            count=count+1
    return count
                
def isPrime(value):
    for i in range(2, value-1):
        if value % i == 0:
            return False
    return value > 1