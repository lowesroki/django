from rest_framework import serializers
from .models import Board

class BoardSerializers(serializers.ModelSerializer):

    class Meta:
        model = Board
        fields = '__all__'

        def create(self, validated_data):
            print(validated_data)

            return Board.objects.create(**validated_data)