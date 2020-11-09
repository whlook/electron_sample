import os
import sys 
import random
import json
import time

from action_api import *

if len(sys.argv) < 2:
    print("usage: python this.py input_video ")
    exit(0)

input_video = sys.argv[1]

os.system("mkdir cache/imgs") 
os.system("rm -r cache/imgs/*") 
os.system("ffmpeg -i " + input_video + " cache/imgs/imgs_%05d.jpg") 

viddir = os.getcwd() + "/cache/imgs/" 

os.chdir("../lazyaction") 
ai_eng =  ActionSearchEngine("act_engine.yaml") 
item = ai_eng.process(viddir) 
res = ai_eng.search(item) 

score1 = res[0][2] 
score1video = res[0][0] 
score2 = res[1][2] 
score2video = res[1][0] 
score3 = res[2][2] 
score3video = res[2][0] 
scoreall = score1 + score2 + score3 

data = {'video':input_video,'score1':score1,'score1video':score1video,'score2':score2,'score2video':score2video,'score3':score3,'score3video':score3video,'scoreall':scoreall}
json_str = json.dumps(data) 

print(json_str,file=sys.stdout) 
