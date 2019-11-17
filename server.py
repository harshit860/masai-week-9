from flask import Flask,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
import json
import csv

def read():
    global res_list 
    res_list = list()
    with open("restraunts.csv") as readfile:
        readfile = csv.DictReader(readfile)
        for i in readfile:
            res_list.append(i)

@app.route("/create_res",methods=["POST"])
def write():
    try:
        with open("restraunts.csv") as readfile:
            fieldnames=['restraunt_name','rating','location','image_url','cuisines']
    except FileNotFoundError:
        with open("restraunts.csv","w") as writerfile:
            fieldnames=['restraunt_name','rating','location','image_url','cuisines']
            writer = csv.DictWriter(writerfile,fieldnames=fieldnames)
            writer.writeheader()
    with open("restraunts.csv","a") as writerfile:
        writer = csv.DictWriter(writerfile,fieldnames=fieldnames)    
        if not writer.fieldnames == fieldnames:
            writer.writeheader()
        global restraunt_name  
        restraunt_name = request.json["restraunt_name"]
        rating = int(request.json["rating"])
        cuisines = request.json["cuisines"]
        location = request.json["location"]
        image_url = request.json["image_url"]
        writer.writerow({"restraunt_name":restraunt_name,"rating":rating,"image_url":image_url,"location":location})
    return "restraunt_create"

@app.route("/add_dish",methods=["POST"])
def dish():
    try:
        with open("dishes.csv") as dishread:
            fieldnames = ['restraunt_name','dish_name','dish_cost']
    except:
        with open("dishes.csv","w") as dishwrite:
            fieldnames = ['restraunt_name','dish_name','dish_cost']
            writer = csv.DictWriter(dishwrite,fieldnames=fieldnames)
            writer.writeheader()
    with open("dishes.csv","a") as dishwrite:
        writer = csv.DictWriter(dishwrite,fieldnames=fieldnames)
        if not writer.fieldnames == fieldnames:
            writer.writeheader()
        restraunt_name = request.json["restraunt_name"]                
        dish_name = request.json["dish_name"]
        dish_cost = int(request.json["dish_cost"])
        writer.writerow({'restraunt_name':restraunt_name,"dish_name":dish_name,"dish_cost":dish_cost})
    return "dish added"

@app.route("/get_dish",methods=["post"])
def dish_get():
    dish_arr = list()
    with open("dishes.csv") as dishread:
        reader = csv.DictReader(dishread)
        restraunt_name = request.json["restraunt_name"]
        for i in reader:
            if i["restraunt_name"] == restraunt_name:
                dish_arr.append(i)
    return json.dumps({"dishes":dish_arr})

@app.route("/order_history",methods=["post"])
def order_history():
    try:
        with open("order_history.csv") as dishread:
            fieldnames = ['name']
    except:
        with open("order_history.csv","w") as dishwrite:
            fieldnames = ['name']
            writer = csv.DictWriter(dishwrite,fieldnames=fieldnames)
            writer.writeheader()
    with open("order_history.csv","a") as dishwrite:
        writer = csv.DictWriter(dishwrite,fieldnames=fieldnames)
        if not writer.fieldnames == fieldnames:
            writer.writeheader()
        order_detail = request.json["name"]
        writer.writerow({'name':order_detail})
    return "dish added"

@app.route("/get_history")
def history():
    history = list()
    with open("order_history.csv") as dishread:
        reader = csv.DictReader(dishread)
        for i in reader:
            history.append(i)
    return json.dumps({"order_history":history})


@app.route("/showres")
def show():
    read()
    return json.dumps({"restraunts":res_list})