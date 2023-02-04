from django.db import models
class ContactForm (models.Model):
    person_name = models.CharField(max_length=100)
    person_email = models.EmailField()
    purpose = models.TextField()
