
s = {1,2,3}
t = {3,4,5}

print(s | t)
print(s & t)
print(s-t)
print(s ^ t)
print(s|t)-(s&t) #union sxcluyendo la interseccion
s.union(t) # set([1,2,3,4,5])
s.intersection(t) # set([3])
s.difference(t) # set([1,2])