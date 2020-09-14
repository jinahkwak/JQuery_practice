import json

diary = {
    'id' : 3,
    'title' : "I/'m jinah",
    'body' : 'lalalala'
    }
print(diary)
print(type(diary))

#json형변환(str)
diary_s = json.dumps(diary) # dumps: dict -> json

print(diary_s)
print(type(diary_s))

#json -> dict 역변환
diary_back = json.loads
print(type(diary_back))
