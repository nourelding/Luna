from django.db import models

CATEGORY_CHOICES = (
    ("Steakhouse", "Steakhouse"),
    ("Burger", "Burger"),
    ("Pizza", "Pizza"),
    ("Seafood", "Seafood"),
    ("Sushi", "Sushi"),
    ("Hot Dogs", "Hot Dogs"),
    ("Fish & Chips", "Fish & Chips"),
    ("Kebab", "Kebab"),
    ("Waffle", "Waffle"),
    ("Vegetarian", "Vegetarian"),
)


class CategoryModel(models.Model):
    name = models.CharField(max_length=50, choices=CATEGORY_CHOICES)

    def __str__(self):
        return f"{self.pk} {self.name}"
