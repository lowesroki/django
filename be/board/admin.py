from django.contrib import admin
from .models import Board
# Register your models here.

@admin.register(Board)
class ABoardAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'title', 'description')