import requests
from bs4 import BeautifulSoup

colors = []

baseUrl = "https://flaviocopes.com/rgb-color-codes/"

r = requests.get(url)

soup = BeautifulSoup(r.content, 'html.parser')
colorList = soup.find_all("table")
print(colorList)
""" for recipe in recipes:
    tags = recipe.find_all("a")
    for tag in tags:
        temp = tag.get("href")
        name = temp.split("/")[2]
        r = requests.get(baseUrl + temp)
        soup = BeautifulSoup(r.content, 'html.parser')
        ingredients = soup.find("div", class_="dish-ingredients").find("ul")
        ingredientList = []
        for ingredient in ingredients:
            if ingredient.string != "\n":
                ingredientList.append(ingredient.string)
        recipeList[name] = ingredientList
        print(recipeList) """
