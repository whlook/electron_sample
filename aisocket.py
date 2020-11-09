
import os
import sys 
import random
import json
import time
from io import StringIO
import socket           


buf = StringIO()
tmp = sys.stdout
sys.stdout = buf

s = socket.socket()   
host = socket.gethostname() 
port = 12345          
s.connect((host, port))

if(len(sys.argv) < 2):
    print("usage: python this.py input_video ")
    exit(0)

input_video = sys.argv[1]

os.system("ffmpeg -r 30 -i " + input_video + " cache/imgs/img_%05d.jpg") 

viddir = os.getcwd() + "/cache/imgs/" 

s.send(bytes(viddir, encoding = "utf8"))


cont = s.recv(1024)
cont = str(cont,encoding="utf-8")
res = json.loads(cont)

score1 = res["0"]["score"]
sim1 = 0
score1video = res["0"]["video"] 
score2 = res["1"]["score"]
sim2 = 0 
score2video = res["1"]["video"] 
score3 = res["2"]["score"]
sim3 = 0 
score3video = res["2"]["video"] 

'''
score1 = 1 
sim1 = 0.1
score1video = "test"
score2 = 2
sim2 = 0.2
score2video = "test"
score3 = 3 
sim3 = 0.3
score3video = "test"
'''

scoreall = score3 

basedir = "/"
data = {'video':input_video,'score1':score1,'sim1':sim1,'score1video':basedir + score1video + ".mp4",'score2':score2,'sim2':sim2,'score2video':basedir + score2video + ".mp4",'score3':score3,'sim3':sim3,'score3video':basedir + score3video + ".mp4",'scoreall':scoreall}
json_str = json.dumps(data) 

sys.stdout = tmp
print(json_str,file=sys.stdout) 
s.close()
