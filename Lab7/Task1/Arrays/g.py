n = int(input())
arr = [int(i) for i in input().split()]
for i in range(n // 2):
    arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]
print(*arr)