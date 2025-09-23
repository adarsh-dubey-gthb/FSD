list = ["adars","abhinav","abhishek","aditi","aditya"]
length = []
for i in range(len(list)):
    len1 = len(list[i])
    push = length.append(len1)
print(length)
print(max(length))
print(list[length.index(max(length))])
