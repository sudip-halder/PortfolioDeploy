# Generated by Django 4.1.5 on 2023-02-04 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactform',
            name='person_email',
            field=models.EmailField(default=0, max_length=254),
            preserve_default=False,
        ),
    ]
